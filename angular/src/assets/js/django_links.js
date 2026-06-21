/*
 * django_links.js — Django (DRF browsable API) page augmenter.
 * Opt-in via Tools toggles (read from storage on load):
 *   id_links  — turn known Mist IDs into API hyperlinks
 *   ts_human  — annotate epoch timestamps with a human-readable date
 *   copy_json — inject a "Copy JSON" button for the raw response
 * Non-destructive node-level augmentation (no innerHTML rewrite); raw JSON
 * cached before mutation.
 * Dual-mode: content script auto-runs (guarded); Node exports pure functions.
 */

// google-code-prettify token classes (confirmed via Task 1 captures):
//   str = strings — keys AND values (quotes included in the text)
//   lit = numbers (also wraps some non-numeric header values; the epoch check filters them)
var TOK = { str: "str", lit: "lit" };

var uuids = new Map();

function _gen_id_org_common(org_id, element, element_type) {
    if (Array.isArray(element)) {
        element.forEach(function (element_id) {
            _gen_id_org_common(org_id, element_id, element_type)
        })
    } else {
        if (element && element != "00000000-0000-0000-0000-000000000000") {
            if (element_type == "sites") {
                uuids[element] = "https://" + window.location.host + "/api/v1/sites/" + element;
            } else if (element_type == "orgs") {
                uuids[element] = "https://" + window.location.host + "/api/v1/orgs/" + element;
            } else if (!["logs"].includes(element_type)) {
                uuids[element] = "https://" + window.location.host + "/api/v1/orgs/" + org_id + "/" + element_type + "/" + element;
            }
        }
    }
}


function _gen_id_site_common(site_id, element, element_type) {
    if (Array.isArray(element)) {
        element.forEach(function (element_id) {
            _gen_id_site_common(site_id, element_id, element_type)
        })
    } else {
        if (element && element != "00000000-0000-0000-0000-000000000000") {
            if (element_type == "sites") {
                uuids[element] = "https://" + window.location.host + "/api/v1/sites/" + element;
            } else {
                uuids[element] = "https://" + window.location.host + "/api/v1/sites/" + site_id + "/" + element_type + "/" + element;
            }
        }
    }
}

function process_element(org_id, site_id, self, element, element_type, element_scope, gen_self_id, stats) {
    var id;
    if (element.hasOwnProperty("id") && gen_self_id) {
        if (element.id && element.id != "00000000-0000-0000-0000-000000000000") {
            id = element.id
            if (self) {
                uuids[id] = "https://" + window.location.host + "/api/v1/self/" + element_type + "/" + id;
            } else if (element_type == "sites" && gen_self_id) {
                uuids[id] = "https://" + window.location.host + "/api/v1/sites/" + id;
            } else if (gen_self_id) {
                uuids[id] = "https://" + window.location.host + "/api/v1/sites/" + site_id + "/" + element_type + "/" + id;
            }
        }
    }

    if (element.hasOwnProperty("org_id")) {
        if (element.org_id && element.org_id != "00000000-0000-0000-0000-000000000000") {
            org_id = element.org_id;
            uuids[org_id] = "https://" + window.location.host + "/api/v1/orgs/" + org_id;

            if (element_scope == "orgs" && id && gen_self_id) {
                if (stats) {
                    uuids[id] = "https://" + window.location.host + "/api/v1/orgs/" + org_id + "/stats/" + element_type + "/" + id;
                } else {
                    uuids[id] = "https://" + window.location.host + "/api/v1/orgs/" + org_id + "/" + element_type + "/" + id;
                }
            }
        }
    }

    if (element.hasOwnProperty("site_id")) {
        if (element.site_id && element.site_id != "00000000-0000-0000-0000-000000000000") {
            site_id = element.site_id;
            uuids[site_id] = "https://" + window.location.host + "/api/v1/sites/" + site_id;

            if (element_scope == "sites" && id && gen_self_id) {
                uuids[id] = "https://" + window.location.host + "/api/v1/sites/" + site_id + "/" + element_type + "/" + id;
            }
        }
    }

    if (element.hasOwnProperty("site_ids")) {
        element.site_ids.forEach(function (site_id) {
            if (site_id && site_id != "00000000-0000-0000-0000-000000000000") {
                uuids[site_id] = "https://" + window.location.host + "/api/v1/sites/" + site_id;
            }
        });
    }



    if (org_id) {
        if (element.hasOwnProperty("admin_id")) _gen_id_org_common(org_id, element.admin_id, "admins");
        if (element.hasOwnProperty("alarmtemplate_id")) _gen_id_org_common(org_id, element.alarmtemplate_id, "alarmtemplates");
        if (element.hasOwnProperty("anchor_mxtunnel_ids")) _gen_id_org_common(org_id, element.anchor_mxtunnel_ids, "mxtunnels");
        if (element.hasOwnProperty("applies")) {
            if (element.applies.hasOwnProperty("site_ids")) _gen_id_org_common(org_id, element.applies.site_ids, "sites");
            if (element.applies.hasOwnProperty("sitegroup_ids")) _gen_id_org_common(org_id, element.applies.sitegroup_ids, "sitegroups");
        }
        if (element.hasOwnProperty("apply_tags")) _gen_id_org_common(org_id, element.apply_tags, "nactags");
        if (element.hasOwnProperty("aptemplate_id")) _gen_id_org_common(org_id, element.aptemplate_id, "aptemplates");
        if (element.hasOwnProperty("deviceprofile_id")) _gen_id_org_common(org_id, element.deviceprofile_id, "deviceprofiles");
        if (element.hasOwnProperty("deviceprofile_ids")) _gen_id_org_common(org_id, element.deviceprofile_ids, "deviceprofiles");
        if (element.hasOwnProperty("exceptions")) {
            if (element.exceptions.hasOwnProperty("site_ids")) _gen_id_org_common(org_id, element.exceptions.site_ids, "sites");
            if (element.exceptions.hasOwnProperty("sitegroup_ids")) _gen_id_org_common(org_id, element.exceptions.sitegroup_ids, "sitegroups");
        }
        if (element.hasOwnProperty("gatewaytemplate_id")) _gen_id_org_common(org_id, element.gatewaytemplate_id, "gatewaytemplates");
        if (element.hasOwnProperty("idp")) {
            if (element.idp.hasOwnProperty("idpprofile_id")) _gen_id_org_common(org_id, element.idp.idpprofile_id, "idpprofiles");
        }
        if (element.hasOwnProperty("last_nacrule_id")) _gen_id_org_common(org_id, element.last_nacrule_id, "nactags")
        if (element.hasOwnProperty("mist_nac") && element.mist_nac.hasOwnProperty("idps")) {
            element.mist_nac.idps.forEach(function (idp) {
                if (idp.hasOwnProperty("id")) _gen_id_org_common(org_id, idp.id, "ssos");
            });
        }
        if (element.hasOwnProperty("matching")) {
            if (element.matching.hasOwnProperty("nactags")) _gen_id_org_common(org_id, element.matching.nactags, "nactags");
        }
        if (element.hasOwnProperty("mxcluster_id")) _gen_id_org_common(org_id, element.mxcluster_id, "mxclusters");
        if (element.hasOwnProperty("mxcluster_ids")) _gen_id_org_common(org_id, element.mxcluster_ids, "mxclusters");
        if (element.hasOwnProperty("mxedge_id")) _gen_id_org_common(org_id, element.mxedge_id, "mxedges");
        if (element.hasOwnProperty("nacrule_id")) _gen_id_org_common(org_id, element.nacrule_id, "nacrules");
        if (element.hasOwnProperty("nactag_id")) _gen_id_org_common(org_id, element.nactag_id, "nactags");
        if (element.hasOwnProperty("networktemplate_id")) _gen_id_org_common(org_id, element.networktemplate_id, "networktemplates");
        if (element.hasOwnProperty("privileges")) {
            element.privileges.forEach(function (privilege) {
                if (privilege.hasOwnProperty("org_id")) _gen_id_org_common(org_id, privilege.org_id, "orgs");
                if (privilege.hasOwnProperty("site_id")) _gen_id_org_common(org_id, privilege.org_id, "sites");
                if (privilege.hasOwnProperty("sitegroup_id")) _gen_id_org_common(org_id, privilege.org_id, "sitegroup_id");
            });
        }
        if (element.hasOwnProperty("rftemplate_id")) _gen_id_org_common(org_id, element.rftemplate_id, "rftemplates");
        if (element.hasOwnProperty("secpolicy_id")) _gen_id_org_common(org_id, element.secpolicy_id, "secpolicies");
        if (element.hasOwnProperty("sitegroup_ids")) _gen_id_org_common(org_id, element.sitegroup_ids, "sitegroups");
        if (element.hasOwnProperty("sitetemplate_id")) _gen_id_org_common(org_id, element.sitetemplate_id, "sitetemplates");
        if (element.hasOwnProperty("template_id")) _gen_id_org_common(org_id, element.template_id, "templates");
        if (element.hasOwnProperty("upgrade_id")) _gen_id_org_common(org_id, element.upgrade_id, "devices/upgrade");
        if (element.hasOwnProperty("webhook_id")) _gen_id_org_common(org_id, element.webhook_id, "webhooks");
        if (element.hasOwnProperty("wlan_id")) _gen_id_org_common(org_id, element.wlan_id, "wlans");
        if (element.hasOwnProperty("wxtunnel_id")) _gen_id_org_common(org_id, element.wxtunnel_id, "mxtunnels");
    }

    if (site_id) {
        if (element.hasOwnProperty("device_id")) _gen_id_site_common(site_id, element.device_id, "devices");
        if (element.hasOwnProperty("dst_allow_wxtags")) _gen_id_site_common(site_id, element.dst_allow_wxtags, "wxtags");
        if (element.hasOwnProperty("dst_deny_wxtags")) _gen_id_site_common(site_id, element.dst_deny_wxtags, "wxtags");
        if (element.hasOwnProperty("src_wxtags")) _gen_id_site_common(site_id, element.src_wxtags, "wxtags");
        if (element.hasOwnProperty("upgrade_id")) _gen_id_site_common(site_id, element.upgrade_id, "devices/upgrade");
        if (element.hasOwnProperty("webhook_id")) _gen_id_site_common(org_id, element.webhook_id, "webhooks");
    }


}

// Build the { idString: url } map from parsed JSON. Context derived from
// window.location, exactly as the original process_ids did.
function buildIdMap(rootJson) {
    uuids = new Map();
    var baseUri = window.location.href.replace("/integration/", "/api/v1/").split("?")[0];
    var element_type = baseUri.split("/")[7];
    var element_scope = baseUri.split("/")[5];
    var stats = false;
    var gen_self_id = true;
    var site_id, org_id, self;
    if (element_scope == "orgs") {
        org_id = baseUri.split("/")[6];
    } else if (element_scope == "sites") {
        site_id = baseUri.split("/")[6];
    } else if (element_scope == "self") {
        self = true;
        element_type = baseUri.split("/")[6];
    }
    if (baseUri.includes("/events/search")) {
        gen_self_id = false;
    } else if (baseUri.includes("/alarms/")) {
        gen_self_id = false;
    } else if (baseUri.includes("/logs")) {
        gen_self_id = false;
    } else if (baseUri.includes("/devices/upgrade")) {
        element_type = "devices/upgrade";
    }
    switch (element_type) {
        case "inventory":
            element_scope = "sites";
            element_type = "devices";
            break;
        case "sites":
            element_scope = "";
            element_type = "sites";
            break;
        default:
            element_scope = baseUri.split("/")[5];
            if (element_type == "stats") {
                stats = true;
                element_type = baseUri.split("/")[8];
            }
            break;
    }
    if (Array.isArray(rootJson)) {
        rootJson.forEach(function (element) {
            process_element(org_id, site_id, self, element, element_type, element_scope, gen_self_id, stats);
        });
    } else if (rootJson && rootJson.hasOwnProperty("results")) {
        rootJson.results.forEach(function (element) {
            process_element(org_id, site_id, self, element, element_type, element_scope, gen_self_id, stats);
        });
        if (rootJson.hasOwnProperty("next")) {
            uuids[rootJson.next] = "https://" + window.location.host + rootJson.next;
        }
    } else if (rootJson) {
        process_element(org_id, site_id, self, rootJson, element_type, element_scope, false, stats);
    }
    return uuids;
}

function _tryParse(s) {
    try { return { ok: true, value: JSON.parse(s) }; } catch (e) { return { ok: false }; }
}

// Parse the DRF response JSON from the .prettyprint element. Returns
// { data, raw } or null. Handles a possible leading status/header prefix.
function parseResponse(preEl) {
    var text = (preEl.textContent || "");
    var start = text.search(/[\[{]/);
    var candidate = (start >= 0 ? text.slice(start) : text).trim();
    var p = _tryParse(candidate);
    if (p.ok) return { data: p.value, raw: candidate };
    var whole = _tryParse(text.trim());
    if (whole.ok) return { data: whole.value, raw: text.trim() };
    return null;
}

// Wrap string tokens whose decoded value is in the id map. Keys are excluded
// naturally — field names aren't in the map — so no key/value class split needed.
function applyIdLinks(preEl, idMap) {
    var doc = preEl.ownerDocument;
    var spans = preEl.querySelectorAll("span." + TOK.str);
    for (var i = 0; i < spans.length; i++) {
        var span = spans[i];
        if (span.dataset.mistLinked) continue;        // idempotent
        if (span.closest("a")) continue;              // already linked
        var decoded;
        try { decoded = JSON.parse(span.textContent); } catch (e) { continue; }
        if (typeof decoded !== "string") continue;
        if (!Object.prototype.hasOwnProperty.call(idMap, decoded)) continue;
        var a = doc.createElement("a");
        a.href = idMap[decoded];
        a.textContent = decoded;                      // textContent only — no innerHTML
        a.style.textDecoration = "underline";
        a.style.color = "#D14";
        span.textContent = "";
        span.appendChild(doc.createTextNode('"'));
        span.appendChild(a);
        span.appendChild(doc.createTextNode('"'));
        span.dataset.mistLinked = "1";
    }
}

var TS_KEY_OK = /(_time|_at)$|^expire|^(last_seen|last_used|last_flapped|timestamp)$/;
var TS_KEY_EXCLUDE = /^uptime$|_timeout$|^duration$|^interval$|_age$/;
var TS_MIN = 946684800;    // 2000-01-01
var TS_MAX = 4102444800;   // 2100-01-01

function isTimestampKey(key) {
    return TS_KEY_OK.test(key) && !TS_KEY_EXCLUDE.test(key);
}
function isEpoch(n) {
    return typeof n === "number" && isFinite(n) && n >= TS_MIN && n <= TS_MAX;
}
function _pad(n) { return (n < 10 ? "0" : "") + n; }
function fmtLocal(d) {
    return d.getFullYear() + "-" + _pad(d.getMonth() + 1) + "-" + _pad(d.getDate()) +
        " " + _pad(d.getHours()) + ":" + _pad(d.getMinutes()) + ":" + _pad(d.getSeconds());
}
function precedingKey(numSpan) {
    var el = numSpan.previousElementSibling, steps = 0;
    while (el && steps < 6) {
        if (el.classList && el.classList.contains(TOK.str)) {
            try { return JSON.parse(el.textContent); }
            catch (e) { return el.textContent.replace(/^"|"$/g, ""); }
        }
        el = el.previousElementSibling; steps++;
    }
    return null;
}
function applyTimestamps(preEl) {
    var doc = preEl.ownerDocument;
    var nodes = preEl.querySelectorAll("span." + TOK.lit);
    for (var i = 0; i < nodes.length; i++) {
        var num = nodes[i];
        if (num.dataset.mistTs) continue;             // idempotent
        var key = precedingKey(num);
        if (!key || !isTimestampKey(key)) continue;
        var val = Number(num.textContent);
        if (!isEpoch(val)) continue;
        var d = new Date(val * 1000);
        var ann = doc.createElement("span");
        ann.className = "mist-ts";
        ann.textContent = " → " + fmtLocal(d);
        ann.title = d.toISOString();                  // UTC
        ann.style.opacity = "0.6";
        num.insertAdjacentElement("afterend", ann);
        num.dataset.mistTs = "1";
    }
}

// "Copy JSON" button — the copy-code affordance developers know: icon-led,
// anchored to the response block's top-right, quiet at rest, Mist-blue on hover,
// green check on success. Styles ride an injected <style> since the DRF page has
// no access to the extension's CSS.
var COPY_STYLE_ID = "mist-copy-json-style";
var SVG_NS = "http://www.w3.org/2000/svg";

// Build an SVG icon from trusted static descriptors (no innerHTML / no page data).
function _svgIcon(doc, cls, strokeWidth, children) {
    var svg = doc.createElementNS(SVG_NS, "svg");
    svg.setAttribute("class", cls);
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", strokeWidth);
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");
    svg.setAttribute("aria-hidden", "true");
    for (var i = 0; i < children.length; i++) {
        var el = doc.createElementNS(SVG_NS, children[i].tag);
        var attrs = children[i].attrs;
        for (var attr in attrs) { el.setAttribute(attr, attrs[attr]); }
        svg.appendChild(el);
    }
    return svg;
}

function _injectCopyStyle(doc) {
    if (doc.getElementById(COPY_STYLE_ID)) return;
    var style = doc.createElement("style");
    style.id = COPY_STYLE_ID;
    // .is-copied / .is-error are declared after :hover so the success/error
    // colour wins while the cursor is still on the just-clicked button.
    style.textContent =
        ".mist-copy-json{position:absolute;top:8px;right:8px;z-index:5;display:inline-flex;" +
        "align-items:center;gap:6px;padding:5px 10px;border-radius:6px;cursor:pointer;" +
        "font:500 12px/1 -apple-system,BlinkMacSystemFont,'Segoe UI',system-ui,sans-serif;" +
        "color:#5a6b7b;background:rgba(255,255,255,.92);border:1px solid #d4dae0;" +
        "transition:color .15s ease,border-color .15s ease,background .15s ease;}" +
        ".mist-copy-json:hover{color:#2b8fdb;border-color:#63b4ee;background:#f4faff;}" +
        ".mist-copy-json:active{transform:translateY(1px);}" +
        ".mist-copy-json:focus-visible{outline:2px solid rgba(99,180,238,.55);outline-offset:2px;}" +
        ".mist-copy-json .mist-ico{width:13px;height:13px;flex:none;}" +
        ".mist-copy-json .mist-ico-check{display:none;}" +
        ".mist-copy-json.is-copied{color:#15a849;border-color:#41d27f;background:#f1fcf5;}" +
        ".mist-copy-json.is-copied .mist-ico-copy{display:none;}" +
        ".mist-copy-json.is-copied .mist-ico-check{display:inline;}" +
        ".mist-copy-json.is-error{color:#d23f3f;border-color:#f0a3a3;background:#fdf3f3;}" +
        "@media (prefers-reduced-motion:reduce){.mist-copy-json{transition:none;}}";
    (doc.head || doc.documentElement).appendChild(style);
}

function setupCopyButton(preEl, rawJson, container) {
    if (container.querySelector("button.mist-copy-json")) return;   // idempotent
    var doc = preEl.ownerDocument;
    _injectCopyStyle(doc);
    // Anchor the button to the response block's top-right corner.
    var view = doc.defaultView;
    if (view && view.getComputedStyle(container).position === "static") {
        container.style.position = "relative";
    }
    var btn = doc.createElement("button");
    btn.className = "mist-copy-json";
    btn.type = "button";
    btn.setAttribute("aria-label", "Copy JSON response");
    btn.appendChild(_svgIcon(doc, "mist-ico mist-ico-copy", "2", [
        { tag: "rect", attrs: { x: "9", y: "9", width: "13", height: "13", rx: "2" } },
        { tag: "path", attrs: { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" } }
    ]));
    btn.appendChild(_svgIcon(doc, "mist-ico mist-ico-check", "2.6", [
        { tag: "polyline", attrs: { points: "20 6 9 17 4 12" } }
    ]));
    var label = doc.createElement("span");
    label.className = "mist-copy-label";
    label.textContent = "Copy JSON";
    btn.appendChild(label);
    var resetTimer = null;
    function flash(stateClass, text) {
        btn.classList.remove("is-copied", "is-error");
        if (stateClass) { btn.classList.add(stateClass); }
        label.textContent = text;
        if (resetTimer) { clearTimeout(resetTimer); }
        resetTimer = setTimeout(function () {
            btn.classList.remove("is-copied", "is-error");
            label.textContent = "Copy JSON";
        }, 1400);
    }
    btn.addEventListener("click", function () {
        if (typeof navigator !== "undefined" && navigator.clipboard) {
            navigator.clipboard.writeText(rawJson).then(
                function () { flash("is-copied", "Copied"); },
                function () { flash("is-error", "Copy failed"); });
        } else {
            flash("is-error", "Copy failed");
        }
    });
    container.insertBefore(btn, container.firstChild);
}

function runAugment(opts) {
    var info = document.querySelector(".response-info");
    if (!info) return;
    var pre = info.querySelector(".prettyprint");
    if (!pre) return;
    var parsed = parseResponse(pre);
    if (!parsed) {
        console.warn("django_links: could not parse response JSON; leaving page untouched");
        return;
    }
    if (opts.id_links) {
        try { applyIdLinks(pre, buildIdMap(parsed.data)); }
        catch (e) { console.warn("django_links: id-link augmentation failed", e); }
    }
    if (opts.ts_human) {
        try { applyTimestamps(pre); }
        catch (e) { console.warn("django_links: timestamp augmentation failed", e); }
    }
    if (opts.copy_json) {
        try { setupCopyButton(pre, parsed.raw, info); }
        catch (e) { console.warn("django_links: copy button failed", e); }
    }
}

if (typeof browser !== "undefined" && browser.storage && browser.storage.local) {
    browser.storage.local.get(["id_links", "ts_human", "copy_json"]).then(function (res) {
        var opts = {
            id_links: !!res && res.id_links === "true",
            ts_human: !!res && res.ts_human === "true",
            copy_json: !!res && res.copy_json === "true",
        };
        if (opts.id_links || opts.ts_human || opts.copy_json) runAugment(opts);
    }, function (err) { console.log(err); });
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = { TOK, parseResponse, buildIdMap, applyIdLinks, applyTimestamps, isTimestampKey, isEpoch, fmtLocal, precedingKey, setupCopyButton, runAugment };
}
