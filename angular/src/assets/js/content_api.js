// Safari GET fallback bridge.
//
// Unsafe API methods are intentionally handled by opening the DRF API page and
// letting django_automation.js submit the form there.
(function () {
    var api = (typeof globalThis !== "undefined" && (globalThis.browser || globalThis.chrome))
        || (typeof browser !== "undefined" ? browser : undefined)
        || (typeof chrome !== "undefined" ? chrome : undefined);

    var DEBUG = false;
    function debugLog() {
        if (DEBUG) {
            console.log.apply(console, arguments);
        }
    }

    // Base domains this bridge is allowed to fetch from — mirrors the manifest
    // host_permissions. Keep in sync with mist.hosts.ts / mist_hosts.js.
    var MIST_HOST_SUFFIXES = [".mist.com", ".mistsys.com", ".mist-federal.com", ".ai.juniper.net"];

    function isAllowedMistUrl(url) {
        try {
            var parsed = new URL(url);
            if (parsed.protocol !== "https:") return false;
            var host = parsed.hostname.toLowerCase();
            return MIST_HOST_SUFFIXES.some(function (suffix) {
                return host === suffix.slice(1) || host.endsWith(suffix);
            });
        } catch (e) {
            return false;
        }
    }

    // onMessage only fires for same-extension contexts (no externally_connectable
    // is declared); verify the sender id defensively so a future manifest change
    // can't silently expose this credentialed-fetch bridge. Tolerate runtimes that
    // omit sender.id by only rejecting an explicit mismatch.
    function isInternalSender(sender) {
        var selfId = api && api.runtime && api.runtime.id;
        return !sender || !sender.id || !selfId || sender.id === selfId;
    }

    function buildApiHeaders(request) {
        return Object.assign({ "Accept": "application/json" }, request.headers || {});
    }

    function sendApiRequest(request) {
        var method = (request.method || "GET").toUpperCase();
        return fetch(request.url, {
            method: method,
            credentials: "include",
            mode: "cors",
            headers: buildApiHeaders(request),
        }).then(async function (res) {
            var contentType = res.headers.get("content-type");
            var data = null;
            if (contentType && contentType.includes("application/json")) {
                try {
                    data = await res.json();
                } catch (e) {
                    console.warn("Mist content API: failed to parse JSON response:", e.message);
                }
            }
            debugLog("Mist content API: response status", res.status, "for", request.url);
            return {
                ok: res.ok,
                status: res.status,
                statusText: res.statusText,
                data: data,
                error: res.ok ? undefined : (data && (data.detail || data.message || data.error) ? (data.detail || data.message || data.error) : ("HTTP " + res.status + " " + res.statusText)),
            };
        }).catch(function (err) {
            console.warn("Mist content API: request error:", err && err.message ? err.message : String(err));
            return {
                ok: false,
                error: err && err.message ? err.message : String(err),
            };
        });
    }

    function performApiRequest(request) {
        var method = (request.method || "GET").toUpperCase();
        if (method !== "GET") {
            return Promise.resolve({
                ok: false,
                error: "Mist content API only supports GET; open the API tab for writes",
            });
        }
        if (!isAllowedMistUrl(request.url)) {
            return Promise.resolve({
                ok: false,
                error: "Mist content API: refused non-Mist URL",
            });
        }
        return sendApiRequest(request);
    }

    if (!api || !api.runtime || !api.runtime.onMessage) {
        console.warn("Mist content API: runtime messaging API unavailable in this page context");
        return;
    }

    debugLog("Mist content API: registering mist_api_request listener");
    api.runtime.onMessage.addListener(function (request, sender, respond) {
        if (!request || request.type !== "mist_api_request") {
            return false;
        }
        if (!isInternalSender(sender)) {
            console.warn("Mist content API: rejected message from unexpected sender");
            return false;
        }

        var work = performApiRequest(request);

        // Chrome/Firefox use the sendResponse callback; some Safari builds rely
        // on a returned Promise instead.
        if (typeof respond === "function") {
            work.then(function (res) {
                debugLog("Mist content API: responding via callback, ok:", res && res.ok);
                respond(res);
            });
            return true;
        }
        debugLog("Mist content API: responding via Promise return");
        return work;
    });
})();
