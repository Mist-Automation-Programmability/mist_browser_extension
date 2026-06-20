var safariBrowser = (typeof globalThis !== "undefined" && (globalThis.browser || globalThis.chrome))
    || (typeof browser !== "undefined" ? browser : undefined)
    || (typeof chrome !== "undefined" ? chrome : undefined);

var MIST_DEBUG = false;
function debugLog() {
    if (MIST_DEBUG) {
        console.log.apply(console, arguments);
    }
}

debugLog("Mist Safari content: content_safari.js loaded on", window.location.href);

function getSessionFromPage() {
    if (!safariBrowser || !safariBrowser.runtime || !globalThis.MistHosts) {
        console.warn("Mist Safari content: host helper unavailable");
        return Promise.resolve({ ok: false, reason: "host_helper_unavailable" });
    }

    const hosts = globalThis.MistHosts.inferHostsFromLocation(window.location.href);
    if (!hosts) {
        debugLog("Mist Safari content: getSessionFromPage - unsupported host, skipping");
        return Promise.resolve({ ok: false, reason: "unsupported_host" });
    }
    debugLog("Mist Safari content: getSessionFromPage - fetching /self for", hosts.api_host);

    return fetch(`https://${hosts.api_host}/api/v1/self`, {
        method: "GET",
        credentials: "include",
        mode: "cors",
        headers: { "Accept": "application/json" },
    }).then(async res => {
        debugLog("Mist Safari content: /self response status", res.status, "for", hosts.api_host);
        if (res.status === 200) {
            const body = await res.json();
            debugLog("Mist Safari content: session parsed for", hosts.domain, "email:", body?.email);
            return { ok: true, session: globalThis.MistHosts.buildSessionFromSelf(hosts, body) };
        }
        if (res.status === 429) {
            return {
                ok: true,
                session: globalThis.MistHosts.buildThrottledSession(hosts),
            };
        }
        console.warn("Mist Safari content: /self failed with status", res.status);
        return { ok: false, status: res.status };
    }).catch(err => {
        console.warn("Mist Safari content: /self fetch error:", err && err.message ? err.message : String(err));
        return { ok: false, error: err && err.message ? err.message : String(err) };
    });
}
if (!safariBrowser || !safariBrowser.runtime || !safariBrowser.runtime.onMessage) {
    console.warn("Mist Safari content: runtime messaging API unavailable in this page context");
} else {
    debugLog("Mist Safari content: runtime messaging API available, registering onMessage listener");
    safariBrowser.runtime.onMessage.addListener((request, sender, respond) => {
        if (!request || !request.type) {
            return false;
        }

        if (request.type === "mist_get_session") {
            debugLog("Mist Safari content: received mist_get_session, respond type:", typeof respond);

            const work = getSessionFromPage()
                .catch(error => ({ ok: false, error: error && error.message ? error.message : String(error) }));

            // Safari/WebExtension implementations are inconsistent here: some provide
            // sendResponse callback, others rely on Promise return values.
            if (typeof respond === "function") {
                work.then(res => {
                    debugLog("Mist Safari content: responding via callback, ok:", res && res.ok);
                    respond(res);
                });
                return true;
            }
            debugLog("Mist Safari content: responding via Promise return");
            return work;
        }

        if (request.type === "mist_api_request") {
            debugLog("Mist Safari content: received mist_api_request", request.method, request.url);

            const work = fetch(request.url, {
                method: request.method || "GET",
                credentials: "include",
                mode: "cors",
                headers: request.headers || { "Accept": "application/json" },
                body: request.body ? JSON.stringify(request.body) : undefined,
            }).then(async res => {
                const contentType = res.headers.get("content-type");
                let data = null;
                if (contentType && contentType.includes("application/json")) {
                    try {
                        data = await res.json();
                    } catch (e) {
                        console.warn("Mist Safari content: failed to parse JSON response:", e.message);
                    }
                }
                debugLog("Mist Safari content: API response status", res.status, "for", request.url);
                return {
                    ok: res.ok,
                    status: res.status,
                    statusText: res.statusText,
                    data: data,
                    error: res.ok ? undefined : (data && (data.detail || data.message || data.error) ? (data.detail || data.message || data.error) : ("HTTP " + res.status + " " + res.statusText)),
                };
            }).catch(err => {
                console.warn("Mist Safari content: API request error:", err && err.message ? err.message : String(err));
                return {
                    ok: false,
                    error: err && err.message ? err.message : String(err),
                };
            });

            if (typeof respond === "function") {
                work.then(res => {
                    debugLog("Mist Safari content: API response callback, ok:", res && res.ok);
                    respond(res);
                });
                return true;
            }
            debugLog("Mist Safari content: API response via Promise return");
            return work;
        }

        return false;
    });
}
