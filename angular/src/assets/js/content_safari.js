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

function inferMistHostsFromLocation(href) {
    try {
        const url = new URL(href);
        const host = url.hostname.toLowerCase();
        const labels = host.split(".");
        const prefix = labels[0] || "";

        if (host.endsWith(".ai.juniper.net")) {
            const domain = host.includes(".stage.ai.juniper.net") ? ".stage.ai.juniper.net" : ".ai.juniper.net";
            return {
                domain: domain,
                api_host: "jsi" + domain,
                cloud_host: "jsi" + domain,
                additional_cloud_hosts: ["dc" + domain, "jsi" + domain, "routing" + domain],
            };
        }

        // Only use manage-like pages as identity sources; do not probe API tabs.
        if (!["manage", "integration", "manage-staging"].includes(prefix)) {
            debugLog("Mist Safari content: unsupported host prefix", prefix, "- not a manage tab, skipping");
            return null;
        }

        if (labels.length < 3) return null;
        const domain = "." + labels.slice(1).join(".");
        if (!(domain.endsWith(".mist.com") || domain.endsWith(".mistsys.com") || domain.endsWith(".mist-federal.com"))) {
            return null;
        }
        return {
            domain: domain,
            api_host: "api" + domain,
            cloud_host: "manage" + domain,
            additional_cloud_hosts: ["manage" + domain],
        };
    } catch (e) {
        return null;
    }
}

function buildSessionFromSelf(hosts, body) {
    const twoFactorRequired = !!body?.two_factor_required;
    const twoFactorPassed = !!body?.two_factor_passed;
    const requests = body?.api_request_count ?? -1;
    const request_limit = body?.api_request_limit ?? -1;
    const request_percentage = request_limit > 0 ? Math.round((requests / request_limit) * 100) : 0;
    return {
        domain: hosts.domain,
        cloud_host: hosts.cloud_host,
        api_host: hosts.api_host,
        email: body?.email || null,
        two_factor_passed: twoFactorRequired ? twoFactorPassed : true,
        csrftoken: null,
        has_sessionid: true,
        expires_at: (Date.now() / 1000) + 86400,
        privileges: body?.privileges || [],
        additional_cloud_hosts: hosts.additional_cloud_hosts,
        requests,
        request_limit,
        request_percentage,
        api_threshold_reached: false,
    };
}

function getSessionFromPage() {
    const hosts = inferMistHostsFromLocation(window.location.href);
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
            return { ok: true, session: buildSessionFromSelf(hosts, body) };
        }
        if (res.status === 429) {
            return {
                ok: true,
                session: {
                    domain: hosts.domain,
                    cloud_host: hosts.cloud_host,
                    api_host: hosts.api_host,
                    email: "threshold_reached",
                    two_factor_passed: false,
                    csrftoken: null,
                    has_sessionid: true,
                    expires_at: (Date.now() / 1000) + 86400,
                    privileges: [],
                    additional_cloud_hosts: hosts.additional_cloud_hosts,
                    requests: 5000,
                    request_limit: 5000,
                    request_percentage: 100,
                    api_threshold_reached: true,
                },
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
