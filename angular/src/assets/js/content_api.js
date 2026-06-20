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
