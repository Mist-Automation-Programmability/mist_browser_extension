#!/usr/bin/env bash
# Regenerate the Safari containing-app AppIcon from the vector mist-icon.svg.
#
# `safari-web-extension-converter` builds the macOS app icon by upscaling the
# 128px extension favicon, so it is soft at 512/1024. This renders a crisp 1024
# master from the SVG (via headless Chrome — qlmanage/WebKit clip the rounded
# rect) and downsamples it to every size the AppIcon set needs.
#
# Run from the repo root. Invoked by `make webext-safari` after the converter
# (which --force-regenerates the asset catalog each build). Non-fatal: if Chrome
# is unavailable it leaves the converter's icons in place and warns.
set -euo pipefail

SVG="angular/src/assets/mist-icon.svg"
ICONSET="angular/Mist Extension/Mist Extension/Assets.xcassets/AppIcon.appiconset"

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
if [ ! -x "$CHROME" ]; then
  CHROME="$(command -v google-chrome 2>/dev/null || command -v chromium 2>/dev/null || true)"
fi
if [ -z "${CHROME:-}" ] || [ ! -e "$CHROME" ]; then
  echo "WARN: Google Chrome not found; keeping converter-generated (soft) app icons." >&2
  exit 0
fi
if [ ! -f "$SVG" ] || [ ! -d "$ICONSET" ]; then
  echo "WARN: '$SVG' or '$ICONSET' missing; skipping app-icon regeneration." >&2
  exit 0
fi

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

# Zero-margin wrapper so the SVG fills the viewport (a bare SVG gets an 8px body
# margin, which clips the right/bottom rounded corners at an exact-size window).
{
  printf '<!doctype html><html><head><meta charset="utf-8"><style>html,body{margin:0;padding:0;background:transparent}svg{display:block;width:1024px;height:1024px}</style></head><body>'
  cat "$SVG"
  printf '</body></html>'
} > "$TMP/wrap.html"

"$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
  --default-background-color=00000000 --window-size=1024,1024 \
  --screenshot="$TMP/icon1024.png" "file://$TMP/wrap.html" >/dev/null 2>&1 || true

if [ ! -f "$TMP/icon1024.png" ]; then
  echo "WARN: headless Chrome produced no screenshot; keeping converter icons." >&2
  exit 0
fi

gen() { # <pixels> <dest-filename>
  sips -z "$1" "$1" "$TMP/icon1024.png" --out "$ICONSET/$2" >/dev/null 2>&1
}
gen 1024 "mac-icon-512@2x.png"
gen 512  "mac-icon-512@1x.png"
gen 512  "mac-icon-256@2x.png"
gen 256  "mac-icon-256@1x.png"
gen 256  "mac-icon-128@2x.png"
gen 128  "mac-icon-128@1x.png"
gen 64   "mac-icon-32@2x.png"
gen 32   "mac-icon-32@1x.png"
gen 32   "mac-icon-16@2x.png"
gen 16   "mac-icon-16@1x.png"

echo "Regenerated AppIcon from $SVG (crisp, 16–1024)."
