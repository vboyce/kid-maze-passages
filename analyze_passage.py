"""
Compute per-word length, frequency, and surprisal for a passage,
then report summary statistics and correlations.

Run with the maze-distractor-generator venv:
  /home/vboyce/Research/maze-distractor-generator/.venv/bin/python analyze_passage.py <passage.txt>
"""
import sys
import re
import math
import argparse
from pathlib import Path

# Make the maze-distractor-generator backends importable
sys.path.insert(0, str(Path(__file__).parent.parent / "maze-distractor-generator"))

from wordfreq import zipf_frequency
from backends import load_surprisal_model
from get_surprisal import get_surprisal


def tokenize(text):
    """Split passage into words, preserving original surface form and stripping
    leading/trailing punctuation for lookup purposes."""
    raw_words = text.split()
    tokens = []
    for w in raw_words:
        clean = re.sub(r"^[^a-zA-Z0-9']+|[^a-zA-Z0-9']+$", "", w)
        if clean:
            tokens.append((w, clean))
    return tokens


def word_length(clean_word):
    """Number of characters, apostrophes excluded."""
    return len(clean_word.replace("'", ""))


def build_prefix(surface_words, idx):
    """Return the prefix string up to (not including) word at idx."""
    return " ".join(surface_words[:idx])


def summarize(values, label):
    n = len(values)
    mean = sum(values) / n
    variance = sum((x - mean) ** 2 for x in values) / (n - 1)
    sd = math.sqrt(variance)
    sorted_v = sorted(values)
    median = sorted_v[n // 2] if n % 2 else (sorted_v[n // 2 - 1] + sorted_v[n // 2]) / 2
    print(f"{label}:")
    print(f"  n={n}, mean={mean:.3f}, sd={sd:.3f}, median={median:.3f}, "
          f"min={min(values):.3f}, max={max(values):.3f}")


def pearson_r(xs, ys):
    n = len(xs)
    mx, my = sum(xs) / n, sum(ys) / n
    num = sum((x - mx) * (y - my) for x, y in zip(xs, ys))
    denom = math.sqrt(sum((x - mx) ** 2 for x in xs) * sum((y - my) ** 2 for y in ys))
    return num / denom if denom else float("nan")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("passage", help="Path to passage text file")
    parser.add_argument("--model", default="gpt2", help="Surprisal model (default: gpt2)")
    args = parser.parse_args()

    raw = Path(args.passage).read_text()
    # Strip notes/citations after a separator line (e.g. -----------).
    # Also skip image marker lines of the form [filename | credit].
    lines = []
    for line in raw.splitlines():
        if line.strip().startswith("---") and line.strip().rstrip("-") == "":
            break
        if line.strip().startswith("[") and line.strip().endswith("]"):
            continue
        lines.append(line)
    text = "\n".join(lines).strip()
    tokens = tokenize(text)
    surface_words = [w for w, _ in tokens]

    print(f"Passage: {args.passage}")
    print(f"Total tokens: {len(tokens)}\n")

    print(f"Loading surprisal model: {args.model} ...")
    backend = load_surprisal_model(args.model)

    lengths, freqs, surprisals = [], [], []
    rows = []

    # Skip first word for surprisal (no prefix context)
    for i, (surface, clean) in enumerate(tokens):
        length = word_length(clean)
        freq = zipf_frequency(clean.lower(), "en")

        if i == 0:
            surp = float("nan")
        else:
            prefix = build_prefix(surface_words, i)
            surp = get_surprisal(backend, prefix, surface)

        rows.append((surface, clean, length, freq, surp))
        lengths.append(length)
        freqs.append(freq)
        if not math.isnan(surp):
            surprisals.append(surp)

    print("\nPer-word breakdown:")
    print(f"{'#':>3}  {'word':<20} {'len':>4} {'zipf':>6} {'surp':>7}")
    print("-" * 46)
    for i, (surface, clean, length, freq, surp) in enumerate(rows):
        surp_str = f"{surp:7.2f}" if not math.isnan(surp) else "    ---"
        print(f"{i+1:>3}  {clean:<20} {length:>4} {freq:>6.2f} {surp_str}")

    print("\n--- Summary statistics ---")
    summarize(lengths, "Word length (chars)")
    summarize(freqs, "Zipf frequency")
    summarize(surprisals, "Surprisal (bits, GPT-2, excl. word 1)")

    # Correlations (exclude word 1 which has no surprisal)
    paired = [(r[2], r[3], r[4]) for r in rows[1:] if not math.isnan(r[4])]
    ls = [r[0] for r in paired]
    fs = [r[1] for r in paired]
    ss = [r[2] for r in paired]

    print("\n--- Pearson correlations (words 2+) ---")
    print(f"  length ~ frequency:  r = {pearson_r(ls, fs):+.3f}")
    print(f"  length ~ surprisal:  r = {pearson_r(ls, ss):+.3f}")
    print(f"  frequency ~ surprisal: r = {pearson_r(fs, ss):+.3f}")


if __name__ == "__main__":
    main()
