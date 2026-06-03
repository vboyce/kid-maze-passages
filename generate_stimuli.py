"""
End-to-end stimuli pipeline for kid-maze-passages.

Steps:
  1. Parse passage and practice text files
  2. Write combined distractor input CSV (passages + practice, globally unique item numbers)
  3. Run maze-distractor-generator
  4. Write experiment/src/passages.js and experiment/src/practice_distractors.js

Usage:
  python3 generate_stimuli.py [--model MODEL] [--num-to-test N] [--skip-generation]

Defaults: model=EleutherAI/pythia-160m, num-to-test=300

Use --skip-generation to rebuild the JS files from an existing distractors.csv
without re-running the (slow) generator.
"""

import os
import sys
from pathlib import Path

REPO_DIR = Path(__file__).parent.resolve()
GENERATOR_DIR = REPO_DIR.parent / "maze-distractor-generator"

# Re-exec under the generator's venv if torch isn't available there.
_VENV_PYTHON = GENERATOR_DIR / ".venv" / "bin" / "python"
if _VENV_PYTHON.exists() and Path(sys.executable).resolve() != _VENV_PYTHON.resolve():
    os.execv(str(_VENV_PYTHON), [str(_VENV_PYTHON)] + sys.argv)

import argparse
import logging
import time
STIMULI_DIR = REPO_DIR / "stimuli"
EXPERIMENT_SRC = REPO_DIR / "experiment" / "src"

PASSAGES = [
    ("T. rex's Tiny Arms", STIMULI_DIR / "dino_text.txt"),
    ("Whale Culture", STIMULI_DIR / "whale_text.txt"),
]
PRACTICE_FILE = STIMULI_DIR / "practice.txt"
DISTRACTOR_INPUT = STIMULI_DIR / "distractor_input.csv"
DISTRACTOR_OUTPUT = STIMULI_DIR / "distractors.csv"
DISTRACTOR_LOG = STIMULI_DIR / "distractor_run.log"

GENERATOR_PARAMS = {
    "min_delta": 10,
    "min_abs": 25,
    "max_repeat": 1,
    # These override wordfreq_distractor.py defaults which point to non-existent wiki-100k.txt
    "include_words": "curated_word_list.txt",
    "exclude_words": "exclude.txt",
}


def main():
    parser = argparse.ArgumentParser(
        description=__doc__,
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )
    parser.add_argument(
        "--model", default="EleutherAI/pythia-160m",
        help="Model for distractor generation (default: EleutherAI/pythia-160m)",
    )
    parser.add_argument(
        "--num-to-test", type=int, default=300,
        help="Distractor candidates to evaluate per word position (default: 300)",
    )
    parser.add_argument(
        "--skip-generation", action="store_true",
        help="Skip the generator step and rebuild JS from an existing distractors.csv",
    )
    args = parser.parse_args()

    logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")

    # Import build_stimuli functions (same directory as this script)
    sys.path.insert(0, str(REPO_DIR))
    from build_stimuli import (
        parse_passage, read_distractors, write_distractor_csv,
        merge_distractors, build_passages_js, write_practice_distractors_js,
    )

    # --- Step 1: parse text files ---
    passages_data = []
    for title, filepath in PASSAGES:
        if not filepath.exists():
            sys.exit(f"Error: passage file not found: {filepath}")
        sentences = parse_passage(filepath)
        passages_data.append({"title": title, "sentences": sentences})
        n_img = sum(1 for s in sentences if s["img"])
        logging.info("Parsed %r: %d sentences, %d with images", title, len(sentences), n_img)

    if not PRACTICE_FILE.exists():
        sys.exit(f"Error: practice file not found: {PRACTICE_FILE}")
    practice_sentences = parse_passage(PRACTICE_FILE)
    logging.info("Parsed practice: %d sentences", len(practice_sentences))

    # --- Step 2: write combined distractor input CSV ---
    write_distractor_csv(str(DISTRACTOR_INPUT), passages_data, practice_sentences)
    total = sum(len(p["sentences"]) for p in passages_data) + len(practice_sentences)
    logging.info("Wrote distractor input CSV (%d sentences): %s", total, DISTRACTOR_INPUT)

    # --- Step 3: run distractor generator ---
    if not args.skip_generation:
        if not GENERATOR_DIR.exists():
            sys.exit(f"Error: generator not found at {GENERATOR_DIR}")
        sys.path.insert(0, str(GENERATOR_DIR))
        from main import run_stuff  # noqa: E402 (generator's main.py)

        params = {**GENERATOR_PARAMS, "num_to_test": args.num_to_test}
        logging.info(
            "Running generator (model=%s, num_to_test=%d, min_delta=%s, min_abs=%s)...",
            args.model, args.num_to_test, params["min_delta"], params["min_abs"],
        )
        os.chdir(GENERATOR_DIR)
        t0 = time.perf_counter()
        run_stuff(
            str(DISTRACTOR_INPUT),
            str(DISTRACTOR_OUTPUT),
            logfile=str(DISTRACTOR_LOG),
            parameters=params,
            model_override=args.model,
        )
        logging.info("Generator completed in %.1fs", time.perf_counter() - t0)
    else:
        if not DISTRACTOR_OUTPUT.exists():
            sys.exit(f"Error: --skip-generation set but {DISTRACTOR_OUTPUT} does not exist")
        logging.info("Skipping generation; using existing %s", DISTRACTOR_OUTPUT)

    # --- Step 4: merge and write JS output ---
    distractors = read_distractors(str(DISTRACTOR_OUTPUT))
    merge_distractors(passages_data, distractors, practice_sentences)
    logging.info("Merged distractors")

    passages_js = EXPERIMENT_SRC / "passages.js"
    passages_js.write_text(build_passages_js(passages_data))
    logging.info("Wrote %s", passages_js)

    practice_js = EXPERIMENT_SRC / "practice_distractors.js"
    write_practice_distractors_js(str(practice_js), practice_sentences)
    logging.info("Wrote %s", practice_js)

    logging.info("Done. Review stimuli/distractors.csv before launch.")


if __name__ == "__main__":
    main()
