#!/usr/bin/env bash
# Build a single JavaScript file for CHS from experiment_chs.js.
# Run from the repo root: bash build_chs.sh [--short]
#   --short  Omit the passage stories (consent → practice → debrief → surveys only).
#            Use this build for quick end-to-end testing on CHS.
# Output: chs_output/experiment.js — upload this file to CHS as the experiment script.
# CHS handles the HTML page itself; do not wrap in HTML.

set -euo pipefail

SHORT_BUILD=false
for arg in "$@"; do
  case "$arg" in
    --short) SHORT_BUILD=true ;;
    *) echo "Unknown argument: $arg" >&2; exit 1 ;;
  esac
done

REPO_ROOT="$(cd "$(dirname "$0")" && pwd)"
EXP_DIR="$REPO_ROOT/experiment"
OUT_DIR="$REPO_ROOT/chs_output"
OUT_JS="$OUT_DIR/experiment.js"

mkdir -p "$OUT_DIR"
rm -f "$OUT_DIR"/*.js "$OUT_DIR"/*.html "$OUT_DIR"/*.css

# Step 1: compile CSS via jspsych-builder (handles the ~jspsych SCSS import).
# The JS bundle produced here is discarded; we only need the CSS to inline.
echo "==> [1/3] Compiling CSS via jspsych-builder..."
(cd "$EXP_DIR" && npm run build)

# Step 2: bundle the CHS entry point with esbuild.
echo "==> [2/3] Bundling JavaScript via esbuild (SHORT_BUILD=$SHORT_BUILD)..."
"$EXP_DIR/node_modules/.bin/esbuild" \
  "$EXP_DIR/src/experiment_chs.js" \
  --bundle \
  --format=iife \
  --define:SHORT_BUILD="$SHORT_BUILD" \
  --outfile="$OUT_JS"

# Step 3: prepend an inline <style> block so the CSS travels with the JS.
# CHS injects the script into its own page, so we inject styles via JS.
# Python handles all file I/O to avoid bash quoting issues with large CSS strings.
echo "==> [3/3] Injecting CSS into JS bundle..."
python3 - "$EXP_DIR/.jspsych-builder/css/main.css" "$OUT_JS" <<'PYEOF'
import sys, json, re

css_file = sys.argv[1]
js_file = sys.argv[2]

with open(css_file) as f:
    css = f.read()

# Strip @font-face blocks (they contain huge base64 woff2 data that blows the
# file size past CHS's 413 limit).  Open Sans is loaded from Google Fonts CDN
# via a <link> injected below.
css = re.sub(r'@font-face\s*\{[^}]*\}', '', css, flags=re.DOTALL)

# Scope all rules to .study-active so our styles don't bleed into the CHS
# consent/assent plugins.  experiment_chs.js adds this class to <body> once
# the post-consent portion of the study begins.
#
# Special case: "body" selectors become "body.study-active" rather than
# ".study-active body" (body cannot be a descendant of itself).
def prefix_selector(sel):
    sel = sel.strip()
    if not sel:
        return sel
    if re.match(r'^body\b', sel):
        return 'body.study-active' + sel[4:]
    return '.study-active ' + sel

def prefix_css_block(css):
    result = []
    i = 0
    n = len(css)
    while i < n:
        ch = css[i]
        if ch in ' \t\n\r':
            result.append(ch)
            i += 1
            continue
        if css[i:i+2] == '/*':
            end = css.find('*/', i + 2)
            end = n if end == -1 else end + 2
            result.append(css[i:end])
            i = end
            continue
        if ch == '@':
            m = re.match(r'@([\w-]+)', css[i:])
            at_name = m.group(1) if m else ''
            brace = css.find('{', i)
            if brace == -1:
                result.append(css[i:])
                break
            if at_name in ('media', 'supports', 'layer'):
                result.append(css[i:brace + 1])
                i = brace + 1
                depth = 1
                inner_start = i
                while i < n and depth > 0:
                    if css[i] == '{': depth += 1
                    elif css[i] == '}': depth -= 1
                    i += 1
                result.append(prefix_css_block(css[inner_start:i - 1]))
                result.append('}')
            else:
                # @keyframes and any other at-rules: copy verbatim
                depth = 0
                while i < n:
                    c = css[i]
                    result.append(c)
                    if c == '{': depth += 1
                    elif c == '}':
                        depth -= 1
                        if depth == 0:
                            i += 1
                            break
                    i += 1
            continue
        # Regular rule: selector up to {, then block
        brace = css.find('{', i)
        if brace == -1:
            result.append(css[i:])
            break
        selectors = css[i:brace].split(',')
        result.append(', '.join(prefix_selector(s) for s in selectors))
        result.append('{')
        i = brace + 1
        depth = 1
        while i < n and depth > 0:
            c = css[i]
            if c == '{': depth += 1
            elif c == '}': depth -= 1
            if depth > 0:
                result.append(c)
            i += 1
        result.append('}')
    return ''.join(result)

css = prefix_css_block(css)

with open(js_file) as f:
    js = f.read()

style_injection = (
    "(function(){var s=document.createElement('style');s.textContent="
    + json.dumps(css)
    + ";document.head.appendChild(s);})();\n"
)

with open(js_file, 'w') as f:
    f.write(style_injection)
    f.write(js)
PYEOF

echo ""
echo "Done! CHS script: $OUT_JS (SHORT_BUILD=$SHORT_BUILD)"
echo "  - Upload experiment.js to CHS as the experiment script"
if [ "$SHORT_BUILD" = "true" ]; then
  echo "  - SHORT BUILD: passage stories omitted; use for end-to-end flow testing only"
fi
