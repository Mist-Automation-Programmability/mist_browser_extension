import browser from "webextension-polyfill";
import type { SessionElement } from "./browser.service";
import { getCookiesFromBackground } from "./browser.background";

const DEBUG = false;
function debugLog(...args: any[]): void {
    if (DEBUG) {
        console.log(...args);
    }
}

export interface SafariSessionLoaderContext {
    domains: string[];
    hostManage: string[];
    hostApi: string[];
    processCookies: (cookies: browser.Cookies.Cookie[]) => void;
    getParsedSessionCount: () => number;
    setSessions: (sessions: SessionElement[]) => void;
}

export function loadSafariSessions(context: SafariSessionLoaderContext, cb: () => void): void {
    getCookiesFromBackground(context.hostManage, context.hostApi)
        .then(cookies => {
            debugLog("BrowserService.Safari: SW returned", (cookies || []).length, "cookies");
            context.processCookies(cookies || []);
            return context.getParsedSessionCount();
        })
        .then(parsedCount => {
            if (parsedCount > 0) {
                debugLog("BrowserService.Safari:", parsedCount, "session(s) parsed from cookies");
                cb();
                return Promise.resolve();
            }

            return probeSafariSessionsFromTabs().then(tabProbe => {
                if (tabProbe.sessions.length > 0) {
                    context.setSessions(tabProbe.sessions);
                    debugLog("BrowserService.Safari:", tabProbe.sessions.length, "active session(s) detected via tab probe");
                    cb();
                    return Promise.resolve();
                }

                if (tabProbe.matchingTabs > 0 && tabProbe.noResponseCount === tabProbe.matchingTabs) {
                    console.warn("BrowserService.Safari: no responses from content scripts on", tabProbe.matchingTabs, "matching tab(s). Safari website access is likely not granted for this site/profile. Use Safari > Settings > Extensions > Mist Extension > Websites and set this site to Allow.");
                    context.setSessions([]);
                    cb();
                    return Promise.resolve();
                }

                return getMistDomainsFromOpenTabs(context.domains).then(candidateDomains => {
                    debugLog("BrowserService.Safari: no parseable cookie sessions, probing /api/v1/self for", candidateDomains.length, "candidate domain(s)");
                    return probeSafariSessionsByApi(candidateDomains)
                        .then(sessions => {
                            context.setSessions(sessions);
                            debugLog("BrowserService.Safari:", sessions.length, "active session(s) detected via /self probe");
                            cb();
                        });
                });
            });
        })
        .catch(err => {
            console.error("BrowserService.Safari: session load failed:", err);
            cb();
        });
}

interface SafariTabProbeResult {
    sessions: SessionElement[];
    matchingTabs: number;
    noResponseCount: number;
}

function probeSafariSessionsFromTabs(): Promise<SafariTabProbeResult> {
    return browser.tabs.query({})
        .then(tabs => tabs.filter(tab => typeof tab.id === "number" && isMistManageUrl(tab.url || "")))
        .then(tabs => {
            debugLog("BrowserService.Safari: tab probe found", tabs.length, "matching tab(s)");
            return Promise.all(
                tabs.map(tab =>
                    browser.tabs.sendMessage(tab.id as number, { type: "mist_get_session" })
                        .then(res => ({
                            tabId: tab.id,
                            res: res === undefined
                                ? { ok: false, error: "no_response" }
                                : res
                        }))
                        .catch(err => ({
                            tabId: tab.id,
                            res: {
                                ok: false,
                                error: err && err.message ? err.message : String(err),
                            }
                        }))
                )
            );
        })
        .then(entries => {
            const failures = entries
                .map(entry => entry.res)
                .filter((res: any) => !res || !res.ok)
                .slice(0, 5);
            if (failures.length > 0) {
                debugLog("BrowserService.Safari: tab probe failures", failures);
            }

            const sessions = entries
                .map(entry => entry.res as any)
                .map((res: any) => res?.session as SessionElement | undefined)
                .filter((session): session is SessionElement => !!session && !!session.domain);
            const byDomain = new Map<string, SessionElement>();
            sessions.forEach(session => byDomain.set(session.domain, session));
            const noResponseCount = entries
                .map(entry => entry.res as any)
                .filter((res: any) => res && res.error === "no_response")
                .length;
            return {
                sessions: Array.from(byDomain.values()),
                matchingTabs: entries.length,
                noResponseCount,
            };
        })
        .catch(err => {
            console.warn("BrowserService.Safari: tab probe failed:", err);
            return {
                sessions: [],
                matchingTabs: 0,
                noResponseCount: 0,
            };
        });
}

function isMistManageUrl(url: string): boolean {
    if (!url || !url.startsWith("https://")) {
        return false;
    }
    try {
        const host = new URL(url).hostname.toLowerCase();
        if (host.endsWith(".ai.juniper.net")) {
            return host.startsWith("dc.") || host.startsWith("jsi.") || host.startsWith("routing.");
        }
        return host.startsWith("manage.")
            || host.startsWith("integration.")
            || host.startsWith("manage-staging.");
    } catch (e) {
        return false;
    }
}

function getMistDomainsFromOpenTabs(fallbackDomains: string[]): Promise<string[]> {
    const allowedDomains = new Set(fallbackDomains);
    return browser.tabs.query({})
        .then(tabs => {
            const domains = new Set<string>();
            tabs.forEach(tab => {
                const domain = extractMistDomain(tab.url || "", allowedDomains);
                if (domain && allowedDomains.has(domain)) {
                    domains.add(domain);
                }
            });
            const resolved = Array.from(domains.values());
            return resolved.length > 0 ? resolved : fallbackDomains;
        })
        .catch(() => fallbackDomains);
}

function extractMistDomain(url: string, allowedDomains: Set<string>): string | null {
    if (!url || !url.startsWith("https://")) {
        return null;
    }
    try {
        const host = new URL(url).hostname.toLowerCase();
        const labels = host.split(".");
        const prefix = labels[0] || "";

        if (host.endsWith(".ai.juniper.net")) {
            if (!(host.startsWith("dc.") || host.startsWith("jsi.") || host.startsWith("routing."))) {
                return null;
            }
            const domain = host.includes(".stage.ai.juniper.net") ? ".stage.ai.juniper.net" : ".ai.juniper.net";
            return allowedDomains.has(domain) ? domain : null;
        }

        // Do not derive domains from API tabs.
        if (!["manage", "integration", "manage-staging"].includes(prefix)) {
            return null;
        }

        if (labels.length < 3) {
            return null;
        }
        const domain = "." + labels.slice(1).join(".");
        if ((domain.endsWith(".mist.com") || domain.endsWith(".mistsys.com") || domain.endsWith(".mist-federal.com")) && allowedDomains.has(domain)) {
            return domain;
        }
        return null;
    } catch (e) {
        return null;
    }
}

function probeSafariSessionsByApi(domains: string[]): Promise<SessionElement[]> {
    return Promise.all(domains.map(domain => probeSafariCloud(domain)))
        .then(results => results.filter(s => s !== null) as SessionElement[]);
}

function probeSafariCloud(domain: string): Promise<SessionElement | null> {
    const isAi = domain.includes("ai.juniper.net");
    const apiHost = (isAi ? "jsi" : "api") + domain;
    const cloudHost = (isAi ? "jsi" : "manage") + domain;
    const additionalCloudHosts = isAi
        ? ["dc" + domain, "jsi" + domain, "routing" + domain]
        : ["manage" + domain];

    return fetch(`https://${apiHost}/api/v1/self`, {
        method: "GET",
        credentials: "include",
        mode: "cors",
        headers: { Accept: "application/json" },
    })
        .then(res => {
            if (res.status === 200) {
                return res.json().then(body => buildSafariSession(domain, apiHost, cloudHost, additionalCloudHosts, body));
            }
            if (res.status === 429) {
                return buildSafariThrottledSession(domain, apiHost, cloudHost, additionalCloudHosts);
            }
            return null;
        })
        .catch(err => {
            console.warn("BrowserService.Safari: probe failed for", apiHost, err && err.message ? err.message : err);
            return null;
        });
}

function buildSafariSession(
    domain: string,
    apiHost: string,
    cloudHost: string,
    additionalCloudHosts: string[],
    body: any,
): SessionElement {
    const twoFactorRequired = !!body?.two_factor_required;
    const twoFactorPassed = !!body?.two_factor_passed;
    const requests = body?.api_request_count ?? -1;
    const request_limit = body?.api_request_limit ?? -1;
    debugLog('browser.safari.buildSafariSession:', domain,
        'api_request_count=', body?.api_request_count,
        'api_request_limit=', body?.api_request_limit,
        '=> requests=', requests, 'request_limit=', request_limit);
    const request_percentage = request_limit > 0 ? Math.round((requests / request_limit) * 100) : 0;
    return {
        domain,
        cloud_host: cloudHost,
        api_host: apiHost,
        email: body?.email ?? null,
        two_factor_passed: twoFactorRequired ? twoFactorPassed : true,
        csrftoken: null,
        has_sessionid: true,
        expires_at: (Date.now() / 1000) + 86400,
        privileges: body?.privileges ?? [],
        additional_cloud_hosts: additionalCloudHosts,
        requests,
        request_limit,
        request_percentage,
        api_threshold_reached: false,
    };
}

function buildSafariThrottledSession(
    domain: string,
    apiHost: string,
    cloudHost: string,
    additionalCloudHosts: string[],
): SessionElement {
    return {
        domain,
        cloud_host: cloudHost,
        api_host: apiHost,
        email: "threshold_reached",
        two_factor_passed: false,
        csrftoken: null,
        has_sessionid: true,
        expires_at: (Date.now() / 1000) + 86400,
        privileges: [],
        additional_cloud_hosts: additionalCloudHosts,
        requests: 5000,
        request_limit: 5000,
        request_percentage: 100,
        api_threshold_reached: true,
    };
}
