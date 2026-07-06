/*
 * content_dark.js — opt-in dark theme for the Mist manage dashboard.
 *
 * The theme itself is assets/css/mist_dark.css, injected via the manifest and
 * inert until <html data-mist-dark> is set. This script runs at document_start
 * and:
 *   1. gates on manage-style hosts (manage.*, integration.*, dc.*, jsi.*) so the
 *      Django API pages are never touched;
 *   2. sets the html attribute BEFORE first paint using a page-localStorage
 *      mirror of the toggle (extension storage is async and would lose the
 *      race), then confirms against the "dark_manage" storage key — the source
 *      of truth — and tracks later toggles live (no reload needed);
 *   3. runs a small "fixer" pass for the newer Emotion-built pages whose class
 *      names are hashed and colours hardcoded: any element whose computed
 *      background is a literal light NEUTRAL gets data-md-lit, and dark neutral
 *      text on a darkened surface gets data-md-dim. Chromatic (status/brand)
 *      colours never match the neutral test, so greens/reds/oranges survive.
 *      A MutationObserver queues newly-added subtrees and a leading-edge
 *      throttle processes them within ~0-250ms — scanning only what changed,
 *      not the whole document, so late-rendered cards darken near-instantly.
 */
(function () {
    var _browser = (typeof browser !== "undefined") ? browser : (typeof chrome !== "undefined" ? chrome : null);
    if (!_browser || !_browser.storage || !_browser.storage.local) {
        return;
    }

    // Dashboard hosts only (mirrors MIST_MANAGE_HOSTS; manifest matches already
    // restrict the domains, this restricts the host role).
    if (!/^(manage|manage-staging|integration|dc|jsi)\./i.test(window.location.hostname)) {
        return;
    }

    var STORAGE_KEY = "dark_manage";
    var MIRROR_KEY = "__mistExtDarkManage"; // page localStorage: pre-paint hint only
    var THROTTLE_MS = 250;

    var enabled = false;
    var observer = null;
    var pendingTimer = null;
    var lastRun = 0;
    var fullScan = true;   // next pass scans the whole body
    var dirty = [];        // otherwise: only these newly-added subtree roots

    function parseColor(value) {
        var m = (value || "").match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
        if (!m) { return null; }
        return { r: +m[1], g: +m[2], b: +m[3], a: m[4] === undefined ? 1 : +m[4] };
    }
    function luma(c) { return 0.2126 * c.r + 0.7152 * c.g + 0.0722 * c.b; }
    function chroma(c) { return Math.max(c.r, c.g, c.b) - Math.min(c.r, c.g, c.b); }

    // Nearest opaque ancestor background — true when the element now sits on a
    // dark surface (ours or Mist's own). A fully transparent chain proves
    // nothing (theme CSS may not have applied yet), so it must NOT tag.
    function onDarkSurface(el) {
        var n = el;
        while (n && n !== document.documentElement) {
            var c = parseColor(getComputedStyle(n).backgroundColor);
            if (c && c.a >= 0.9) { return luma(c) < 110; }
            n = n.parentElement;
        }
        return false;
    }

    // Stateful controls change colour in place (a selected tab turns blue), so
    // interactive elements get the special tag value "b": its CSS rule carries
    // :not(.selected)/:not(.active)/:not([aria-selected]) guards, so the sticky
    // tag stops applying the moment Mist marks the element selected.
    var INTERACTIVE_TAGS = { BUTTON: 1, A: 1, INPUT: 1, SELECT: 1, TEXTAREA: 1, OPTION: 1, LABEL: 1 };
    var INTERACTIVE_ROLES = /^(tab|button|option|combobox|menuitem|switch|checkbox|radio|listbox)$/i;
    function interactive(el) {
        return INTERACTIVE_TAGS[el.tagName] || INTERACTIVE_ROLES.test(el.getAttribute("role") || "");
    }

    // Components the static stylesheet already styles (with its own state and
    // variant handling) — tagging them would out-specificity those rules.
    var STATIC_STYLED = ".uikit-button, .btn, .dropdown-DropdownButton, .component-Button, " +
        ".component-ToggleButtons-item, .component-Tabs-item, .chakra-tabs__tab, " +
        ".DeprecatedInput, .mc-Input, select";
    function staticStyled(el) {
        return el.matches && el.matches(STATIC_STYLED);
    }

    function skip(el) {
        // elements INSIDE an svg are chart marks — never touch them. The svg
        // ROOT itself stays eligible: chart types carry light CSS backgrounds
        // on the root (mma-chart, multi-line-chart, …) that must go dark.
        var svgAnc = el.closest("svg");
        if (svgAnc && svgAnc !== el) { return true; }
        // map widgets: one grouped closest() rather than three separate
        // ancestor walks (this runs for every element, twice per full pass).
        return el.closest(".leaflet-container, .mapboxgl-map, [class*='gm-']") ||
            el.tagName === "IMG" ||
            // label chips (.tag-text) carry semantic colours — leave them light
            (el.classList && el.classList.contains("tag-text")) ||
            staticStyled(el);
    }

    var SIDES = ["Top", "Right", "Bottom", "Left"];

    function tagBackground(el) {
        if (skip(el)) { return; }
        var cs = getComputedStyle(el);
        if (!el.hasAttribute("data-md-lit")) {
            var bg = parseColor(cs.backgroundColor);
            if (bg && bg.a >= 0.9 && luma(bg) >= 205 && cs.backgroundImage === "none") {
                if (chroma(bg) <= 14) {
                    // Panel-sized elements are surfaces no matter their grey:
                    // the "c" (control) tag carries a :hover wash, and a modal
                    // container tagged "c" would lighten whenever hovered.
                    var box = el.getBoundingClientRect();
                    var panelSized = box.width > 350 && box.height > 260;
                    el.setAttribute("data-md-lit", (interactive(el) && !panelSized) ? "b"
                        : ((luma(bg) >= 245 || panelSized) ? "s" : "c"));
                } else if (chroma(bg) <= 30 && bg.b >= bg.g && bg.g > bg.r) {
                    // pale BLUE-tinted wash = Mist's selection/hover highlight
                    // (e.g. #ebf8ff, #e4effa) — keep it a highlight, not a surface
                    el.setAttribute("data-md-lit", "h");
                }
            }
        }
        // bright neutral borders/outlines: either literal light greys or
        // `border: 1px solid` without a colour, which resolves to currentColor
        // and turned near-white when the theme lifted the text colour.
        // (Outlines matter too — e.g. the chakra-tabs panel frame is an
        // outline, invisible to border-color overrides.)
        // Tag values are property-specific: "b" recolours borders only, "o"
        // outlines only. Never combined — Chakra buttons carry an invisible
        // `outline: 2px solid transparent` focus placeholder, and recolouring
        // it because the element had a light BORDER paints phantom boxes.
        if (!el.hasAttribute("data-md-bord")) {
            for (var i = 0; i < 4; i++) {
                var s = SIDES[i];
                if (parseFloat(cs["border" + s + "Width"]) > 0 && cs["border" + s + "Style"] !== "none") {
                    var bc = parseColor(cs["border" + s + "Color"]);
                    if (bc && bc.a > 0.4 && luma(bc) >= 150 && chroma(bc) <= 30) {
                        el.setAttribute("data-md-bord", "b");
                        break;
                    }
                }
            }
            if (!el.hasAttribute("data-md-bord") &&
                parseFloat(cs.outlineWidth) > 0 && cs.outlineStyle !== "none") {
                var oc = parseColor(cs.outlineColor);
                if (oc && oc.a > 0.4 && luma(oc) >= 150 && chroma(oc) <= 30) {
                    el.setAttribute("data-md-bord", "o");
                }
            }
        }
    }

    // Text lifting also covers interactive elements: the neutral test
    // (chroma <= 24) means blue/red/white button labels are never touched.
    function tagText(el) {
        if (el.hasAttribute("data-md-dim") || skip(el)) { return; }
        var hasText = false;
        for (var node = el.firstChild; node; node = node.nextSibling) {
            if (node.nodeType === 3 && node.textContent.trim()) { hasText = true; break; }
        }
        if (!hasText) { return; }
        var fg = parseColor(getComputedStyle(el).color);
        if (!fg || luma(fg) >= 135 || !onDarkSurface(el)) { return; }
        if (chroma(fg) <= 24) {
            // true neutral dark text: near-black -> primary, mid-grey -> secondary
            el.setAttribute("data-md-dim", luma(fg) < 90 ? "0" : "1");
        } else if (chroma(fg) <= 34) {
            // slightly blue-tinted muted greys (Chakra gray.600/700, used for
            // small sub-labels like "EX / QFX") -> secondary, never bright.
            // >34 chroma is a real accent colour and is left alone.
            el.setAttribute("data-md-dim", "1");
        }
    }

    function fixPass() {
        if (!enabled || !document.body) { return; }
        var roots = fullScan ? [document.body] : dirty;
        fullScan = false;
        dirty = [];
        var i, j, els;
        // backgrounds first, then text: the text check reads effective
        // backgrounds, which already reflect this pass's data-md-lit tags.
        for (i = 0; i < roots.length; i++) {
            if (!roots[i].isConnected) { continue; }
            tagBackground(roots[i]);
            els = roots[i].querySelectorAll("*");
            for (j = 0; j < els.length; j++) { tagBackground(els[j]); }
        }
        for (i = 0; i < roots.length; i++) {
            if (!roots[i].isConnected) { continue; }
            tagText(roots[i]);
            els = roots[i].querySelectorAll("*");
            for (j = 0; j < els.length; j++) { tagText(els[j]); }
        }
    }

    // Leading-edge throttle: the first change after a quiet period is processed
    // almost immediately; during bursts it runs every THROTTLE_MS instead of
    // waiting for the burst to end (a trailing debounce would add ~1s lag).
    function scheduleFix() {
        if (!enabled || pendingTimer) { return; }
        var wait = Math.max(0, THROTTLE_MS - (Date.now() - lastRun));
        pendingTimer = setTimeout(function () {
            pendingTimer = null;
            lastRun = Date.now();
            fixPass();
        }, wait);
    }

    function requestFullScan() {
        fullScan = true;
        scheduleFix();
    }

    function setDark(on) {
        if (on) { document.documentElement.setAttribute("data-mist-dark", ""); }
        else { document.documentElement.removeAttribute("data-mist-dark"); }
        try { window.localStorage.setItem(MIRROR_KEY, on ? "true" : "false"); } catch (e) { }
    }

    function enable() {
        if (enabled) { return; }
        enabled = true;
        setDark(true);
        if (!observer && typeof MutationObserver !== "undefined") {
            // childList only: our own data-md-* attribute writes never re-trigger it.
            observer = new MutationObserver(function (mutations) {
                if (!enabled) { return; }
                if (!fullScan) {
                    for (var i = 0; i < mutations.length; i++) {
                        var added = mutations[i].addedNodes;
                        for (var j = 0; j < added.length; j++) {
                            if (added[j].nodeType === 1) { dirty.push(added[j]); }
                        }
                    }
                    if (dirty.length > 300) { fullScan = true; dirty = []; }
                }
                scheduleFix();
            });
            observer.observe(document.documentElement, { subtree: true, childList: true });
        }
        window.addEventListener("hashchange", requestFullScan);
        if (document.body) { requestFullScan(); }
        else { document.addEventListener("DOMContentLoaded", requestFullScan, { once: true }); }
    }

    function disable() {
        if (!enabled) { return; }
        enabled = false;
        clearTimeout(pendingTimer);
        pendingTimer = null;
        dirty = [];
        fullScan = true;
        // Tagged data-md-* attributes stay behind but are inert without the flag.
        setDark(false);
        if (observer) { observer.disconnect(); observer = null; }
        window.removeEventListener("hashchange", requestFullScan);
    }

    // ---- startup (document_start: documentElement exists, body may not) ----
    // Pre-paint: apply the last known state synchronously from the mirror so an
    // enabled theme never flashes light; extension storage then confirms.
    var mirrored = null;
    try { mirrored = window.localStorage.getItem(MIRROR_KEY); } catch (e) { }
    if (mirrored === "true") {
        document.documentElement.setAttribute("data-mist-dark", "");
    }

    _browser.storage.local.get(STORAGE_KEY).then(function (res) {
        if (res && res[STORAGE_KEY] === "true") { enable(); }
        else { setDark(false); }
    }).catch(function () { });

    _browser.storage.onChanged.addListener(function (changes, area) {
        if (area !== "local" || !changes[STORAGE_KEY]) { return; }
        if (changes[STORAGE_KEY].newValue === "true") { enable(); } else { disable(); }
    });
}());
