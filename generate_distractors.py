"""
Generate or regenerate distractors for the kid-maze-passages study.

Wraps maze-distractor-generator with study-specific paths and defaults.
Run from the kid-maze-passages directory using the generator's venv:

Usage:

  Initial generation — produces distractors.csv and distractors_review.csv:
    /home/vboyce/Research/maze-distractor-generator/.venv/bin/python generate_distractors.py

  Regenerate rejected positions — after marking 'rejected' in distractors_review.csv:
    python generate_distractors.py --regen

Options:
  --num-options N    Candidate distractors per position (default: 5)
  --review FILE      Review CSV to read/write (default: stimuli/distractors_review.csv)
  --output FILE      Sentence-level output CSV (default: stimuli/distractors.csv)
"""

import argparse
import sys
from pathlib import Path

GENERATOR_DIR = Path("/home/vboyce/Research/maze-distractor-generator")
PARAMS_FILE   = Path("stimuli/params.txt")
INPUT_CSV     = Path("stimuli/distractor_input.csv")

sys.path.insert(0, str(GENERATOR_DIR))
from main import run_stuff  # noqa: E402  (import after path setup)


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--regen", action="store_true",
                        help="Regenerate only positions marked 'rejected' in the review file")
    parser.add_argument("--num-options", type=int, default=5, metavar="N",
                        help="Candidate distractors per position (default: 5)")
    parser.add_argument("--review", default="stimuli/distractors_review.csv", metavar="FILE",
                        help="Review CSV (default: stimuli/distractors_review.csv)")
    parser.add_argument("--output", default="stimuli/distractors.csv", metavar="FILE",
                        help="Sentence-level output CSV (default: stimuli/distractors.csv)")
    args = parser.parse_args()

    if not INPUT_CSV.exists():
        sys.exit(f"Error: input CSV not found: {INPUT_CSV}\n"
                 "Run: python build_stimuli.py ... --gen-csv stimuli/distractor_input.csv")
    if not PARAMS_FILE.exists():
        sys.exit(f"Error: params file not found: {PARAMS_FILE}")

    if args.regen:
        review = Path(args.review)
        if not review.exists():
            sys.exit(f"Error: review file not found: {review}\n"
                     "Run without --regen first to generate the initial review file.")
        print(f"Regenerating rejected positions from {review} ...")
        run_stuff(
            str(INPUT_CSV),
            "",                        # no sentence-level output in regen mode
            parameters=str(PARAMS_FILE),
            rejection_file=str(review),
            num_options=args.num_options,
            longform_outfile=str(review),
        )
        print(f"Updated {review}")
    else:
        print(f"Generating distractors with {args.num_options} options per position ...")
        run_stuff(
            str(INPUT_CSV),
            str(args.output),
            parameters=str(PARAMS_FILE),
            num_options=args.num_options,
            longform_outfile=str(args.review),
        )
        print(f"Wrote {args.output}")
        print(f"Wrote {args.review}")
        print(f"\nNext steps:")
        print(f"  1. Review {args.review} — mark 'rejected' on any bad distractor words")
        print(f"  2. python generate_distractors.py --regen")
        print(f"  3. python explode_distractors.py --collapse {args.review} {args.output}")
        print(f"  4. python build_stimuli.py ... --distractors {args.output}")


if __name__ == "__main__":
    main()
