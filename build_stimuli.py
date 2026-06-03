"""
Build experiment/src/passages.js from annotated passage text files.

Passage file format (one sentence per line):
  - Sentence lines: plain text, one sentence each
  - Image markers: [filename.jpg | Credit text]  (on its own line, after the sentence it follows)
  - Separator: --- (everything below this line is ignored)

Image markers are optional: not every sentence needs one.

Usage (without distractors, for development):
  python build_stimuli.py \\
    --passage "T. rex's Tiny Arms" dino_draft_2.txt \\
    --passage "Whale Culture" whale_draft_1.txt

Usage (with distractors, for launch):
  python build_stimuli.py \\
    --passage "T. rex's Tiny Arms" dino_draft_2.txt \\
    --passage "Whale Culture" whale_draft_1.txt \\
    --distractors distractors.csv

Generate distractor generator input CSV:
  python build_stimuli.py ... --gen-csv distractor_input.csv

Output:
  experiment/src/passages.js  (or --output PATH)
"""

import argparse
import csv
import json
import sys
from pathlib import Path


def parse_passage(path):
    """Parse a passage text file into a list of sentence dicts.

    Returns list of dicts: {num, sent, img, credit}
    img and credit are None if no image marker follows the sentence.
    Raises ValueError with a descriptive message on any format violation.
    """
    text = Path(path).read_text()
    raw = []  # list of ("sentence", str) or ("image", {img, credit})

    for lineno, line in enumerate(text.splitlines(), start=1):
        stripped = line.strip()
        if not stripped:
            continue
        if stripped.startswith("---") and stripped.rstrip("-") == "":
            break
        if stripped.startswith("[") and stripped.endswith("]"):
            inner = stripped[1:-1]
            parts = inner.split("|", 1)
            if len(parts) != 2:
                raise ValueError(
                    f"{path}:{lineno}: image marker missing '|' separator: {stripped!r}"
                )
            img, credit = parts[0].strip(), parts[1].strip()
            if not img:
                raise ValueError(
                    f"{path}:{lineno}: image marker has empty filename: {stripped!r}"
                )
            raw.append(("image", {"img": img, "credit": credit}))
        else:
            raw.append(("sentence", stripped))

    if not raw:
        raise ValueError(f"{path}: no passage content found")

    # Validate ordering constraints
    for i, (kind, _) in enumerate(raw):
        if kind == "image":
            if i == 0 or raw[i - 1][0] == "image":
                raise ValueError(
                    f"{path}: image marker at line {i+1} has no preceding sentence"
                )

    # Merge: each sentence absorbs the image marker immediately following it
    sentences = []
    i = 0
    num = 1
    while i < len(raw):
        kind, content = raw[i]
        if kind == "sentence":
            entry = {"num": num, "sent": content, "img": None, "credit": None}
            if i + 1 < len(raw) and raw[i + 1][0] == "image":
                entry["img"] = raw[i + 1][1]["img"]
                entry["credit"] = raw[i + 1][1]["credit"]
                i += 1
            sentences.append(entry)
            num += 1
        i += 1

    return sentences


def read_distractors(distractor_file):
    """Read distractor CSV from maze-distractor-generator.

    Returns dict mapping (type, item_num_str) -> distractor string.
    """
    distractors = {}
    with open(distractor_file, newline="") as f:
        reader = csv.DictReader(f)
        required = {"type", "item_num", "distractors"}
        missing = required - set(reader.fieldnames or [])
        if missing:
            raise ValueError(
                f"Distractor CSV missing columns: {missing}. "
                f"Found: {reader.fieldnames}"
            )
        for row in reader:
            key = (row["type"], row["item_num"])
            if key in distractors:
                raise ValueError(
                    f"Duplicate (type={row['type']!r}, item_num={row['item_num']!r}) "
                    f"in distractor CSV"
                )
            distractors[key] = row["distractors"]
    return distractors


def merge_distractors(passages_data, distractors, practice_sentences=None):
    """Merge distractor strings into passages_data (and optionally practice_sentences) in-place.

    Uses the same globally-unique item_num scheme as write_distractor_csv.
    Exits with an error if any sentence is missing a distractor or any
    distractor has no matching sentence.
    """
    matched_keys = set()
    global_num = 1
    for passage in passages_data:
        for sent in passage["sentences"]:
            key = (passage["title"], str(global_num))
            if key not in distractors:
                sys.exit(
                    f"Error: no distractor found for passage '{passage['title']}' "
                    f"sentence {sent['num']} (global item_num {global_num})"
                )
            # maze-distractor-generator uses "x-x-x" as the dummy first-word
            # distractor; replace with "---" for cleaner display.
            sent["distractor"] = distractors[key].replace("x-x-x", "---", 1)
            matched_keys.add(key)
            global_num += 1

    if practice_sentences:
        for sent in practice_sentences:
            key = ("practice", str(global_num))
            if key not in distractors:
                sys.exit(
                    f"Error: no distractor found for practice sentence {sent['num']} "
                    f"(global item_num {global_num})"
                )
            sent["distractor"] = distractors[key].replace("x-x-x", "---", 1)
            matched_keys.add(key)
            global_num += 1

    extra = set(distractors) - matched_keys
    if extra:
        sys.exit(
            f"Error: {len(extra)} distractor(s) in CSV have no matching sentence: "
            + ", ".join(f"type={t!r} item_num={n!r}" for t, n in sorted(extra))
        )


def write_distractor_csv(outfile, passages_data, practice_sentences=None):
    """Write input CSV for maze-distractor-generator.

    Uses globally-unique item_num across all passages and practice items so
    the generator does not share distractors between same-position sentences.
    """
    with open(outfile, "w", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(["type", "item_num", "sentence"])
        global_num = 1
        for passage in passages_data:
            for sent in passage["sentences"]:
                writer.writerow([passage["title"], global_num, sent["sent"]])
                global_num += 1
        if practice_sentences:
            for sent in practice_sentences:
                writer.writerow(["practice", global_num, sent["sent"]])
                global_num += 1


def write_practice_distractors_js(outfile, practice_sentences):
    """Generate practice_distractors.js with one distractor string per sentence."""
    lines = [
        "// Auto-generated by build_stimuli.py — do not edit by hand.",
        "// Re-run generate_stimuli.py to update.",
        "",
        "export const PRACTICE_DISTRACTORS = [",
    ]
    for sent in practice_sentences:
        lines.append(f"  {json.dumps(sent.get('distractor', ''))},")
    lines.append("];\n")
    Path(outfile).write_text("\n".join(lines))


def build_passages_js(passages_data):
    """Render passages list as a JS module string."""
    lines = [
        "// Auto-generated by build_stimuli.py — do not edit by hand.",
        "// Re-run build_stimuli.py to update.",
        "",
        "export const passages = [",
    ]
    for passage in passages_data:
        lines.append("  {")
        lines.append(f'    title: {json.dumps(passage["title"])},')
        lines.append("    sentences: [")
        for sent in passage["sentences"]:
            item = {
                "num": sent["num"],
                "sent": sent["sent"],
                "distractor": sent.get("distractor"),
                "img": sent["img"],
                "credit": sent["credit"],
            }
            lines.append("      " + json.dumps(item) + ",")
        lines.append("    ],")
        lines.append("  },")
    lines.append("];\n")
    return "\n".join(lines)


def main():
    parser = argparse.ArgumentParser(
        description=__doc__,
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )
    parser.add_argument(
        "--passage",
        nargs=2,
        metavar=("TITLE", "FILE"),
        action="append",
        required=True,
        help="Passage title and source file (repeat for each passage)",
    )
    parser.add_argument(
        "--output",
        default="experiment/src/passages.js",
        help="Output JS file (default: experiment/src/passages.js)",
    )
    parser.add_argument(
        "--distractors",
        metavar="FILE",
        help="Distractor CSV from maze-distractor-generator",
    )
    parser.add_argument(
        "--gen-csv",
        metavar="FILE",
        help="Also write distractor generator input CSV to this path",
    )
    parser.add_argument(
        "--practice",
        metavar="FILE",
        help="Practice sentence file (same format as passage files); included in CSV and distractor output",
    )
    args = parser.parse_args()

    # Parse passage files
    passages_data = []
    for title, filepath in args.passage:
        path = Path(filepath)
        if not path.exists():
            sys.exit(f"Error: passage file not found: {filepath}")
        sentences = parse_passage(path)
        passages_data.append({"title": title, "sentences": sentences})
        n_with_img = sum(1 for s in sentences if s["img"])
        print(f"  {title!r}: {len(sentences)} sentences, {n_with_img} with images")

    # Optionally parse practice file
    practice_sentences = None
    if args.practice:
        path = Path(args.practice)
        if not path.exists():
            sys.exit(f"Error: practice file not found: {args.practice}")
        practice_sentences = parse_passage(path)
        print(f"  Practice: {len(practice_sentences)} sentences")

    # Optionally write distractor generator input CSV
    if args.gen_csv:
        write_distractor_csv(args.gen_csv, passages_data, practice_sentences)
        print(f"Wrote distractor input CSV: {args.gen_csv}")

    # Optionally merge distractors
    if args.distractors:
        distractors = read_distractors(args.distractors)
        merge_distractors(passages_data, distractors, practice_sentences)
        print(f"Merged distractors from {args.distractors}")

    # Write passages.js
    outpath = Path(args.output)
    outpath.parent.mkdir(parents=True, exist_ok=True)
    outpath.write_text(build_passages_js(passages_data))
    print(f"Wrote {outpath}")

    # Write practice_distractors.js if practice distractors are available
    if practice_sentences and any(s.get("distractor") for s in practice_sentences):
        practice_js = outpath.parent / "practice_distractors.js"
        write_practice_distractors_js(str(practice_js), practice_sentences)
        print(f"Wrote {practice_js}")


if __name__ == "__main__":
    main()
