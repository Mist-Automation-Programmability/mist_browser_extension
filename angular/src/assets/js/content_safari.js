// Safari-only session bridge.
//
// Chrome/Firefox read the Mist session in the background via the cookies API.
// Safari can't (the csrftoken cookie is httpOnly and the popup can't send
// cross-site cookies), so the popup asks this content script to fetch /self
// from the page's first-party context via a "mist_get_session" message.
// Unsafe API writes are handled by opening the DRF API page and submitting the
// form from that tab.
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

    debugLog("Mist Safari content: content_safari.js loaded on", window.location.href);

    function getSessionFromPage() {
        if (!api || !api.runtime || !globalThis.MistHosts) {
            console.warn("Mist Safari content: host helper unavailable");
            return Promise.resolve({ ok: false, reason: "host_helper_unavailable" });
        }

        var hosts = globalThis.MistHosts.inferHostsFromLocation(window.location.href);
        if (!hosts) {
            debugLog("Mist Safari content: getSessionFromPage - unsupported host, skipping");
            return Promise.resolve({ ok: false, reason: "unsupported_host" });
        }
        debugLog("Mist Safari content: getSessionFromPage - fetching /self for", hosts.api_host);

        return fetch("https://" + hosts.api_host + "/api/v1/self", {
            method: "GET",
            credentials: "include",
            mode: "cors",
            headers: { "Accept": "application/json" },
        }).then(async function (res) {
            debugLog("Mist Safari content: /self response status", res.status, "for", hosts.api_host);
            if (res.status === 200) {
                var body = await res.json();
                debugLog("Mist Safari content: session parsed for", hosts.domain, "email:", body && body.email);
                return { ok: true, session: globalThis.MistHosts.buildSessionFromSelf(hosts, body) };
            }
            if (res.status === 429) {
                return { ok: true, session: globalThis.MistHosts.buildThrottledSession(hosts) };
            }
            console.warn("Mist Safari content: /self failed with status", res.status);
            return { ok: false, status: res.status };
        }).catch(function (err) {
            console.warn("Mist Safari content: /self fetch error:", err && err.message ? err.message : String(err));
            return { ok: false, error: err && err.message ? err.message : String(err) };
        });
    }

    if (!api || !api.runtime || !api.runtime.onMessage) {
        console.warn("Mist Safari content: runtime messaging API unavailable in this page context");
        return;
    }

    debugLog("Mist Safari content: registering mist_get_session listener");
    api.runtime.onMessage.addListener(function (request, sender, respond) {
        if (!request || request.type !== "mist_get_session") {
            return false;
        }

        debugLog("Mist Safari content: received mist_get_session, respond type:", typeof respond);
        var work = getSessionFromPage().catch(function (error) {
            return { ok: false, error: error && error.message ? error.message : String(error) };
        });

        // Safari/WebExtension implementations are inconsistent: some provide the
        // sendResponse callback, others rely on a returned Promise.
        if (typeof respond === "function") {
            work.then(function (res) {
                debugLog("Mist Safari content: responding via callback, ok:", res && res.ok);
                respond(res);
            });
            return true;
        }
        debugLog("Mist Safari content: responding via Promise return");
        return work;
    });
})();
