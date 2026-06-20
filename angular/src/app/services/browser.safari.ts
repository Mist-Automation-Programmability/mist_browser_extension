import browser from "webextension-polyfill";
import type { SessionElement } from "./browser.service";
import { getCookiesFromBackground } from "./browser.background";
import { extractMistManageDomainFromUrl, isMistManageUrl, MIST_DOMAINS, resolveMistHostsFromDomain } from "./mist.hosts";
import { buildSessionFromSelf, buildThrottledSession } from "./browser.session";
import { debugLog } from "./debug";

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

function getMistDomainsFromOpenTabs(fallbackDomains: string[]): Promise<string[]> {
    const allowedDomains = new Set(fallbackDomains);
    return browser.tabs.query({})
        .then(tabs => {
            const domains = new Set<string>();
            tabs.forEach(tab => {
                const domain = extractMistManageDomainFromUrl(tab.url || "", fallbackDomains);
                if (domain && allowedDomains.has(domain)) {
                    domains.add(domain);
                }
            });
            const resolved = Array.from(domains.values());
            return resolved.length > 0 ? resolved : fallbackDomains;
        })
        .catch(() => fallbackDomains);
}

function probeSafariSessionsByApi(domains: string[]): Promise<SessionElement[]> {
    return Promise.all(domains.map(domain => probeSafariCloud(domain)))
        .then(results => results.filter(s => s !== null) as SessionElement[]);
}

function probeSafariCloud(domain: string): Promise<SessionElement | null> {
    const hosts = resolveMistHostsFromDomain(domain, MIST_DOMAINS);
    if (!hosts) {
        return Promise.resolve(null);
    }

    return fetch(`https://${hosts.api_host}/api/v1/self`, {
        method: "GET",
        credentials: "include",
        mode: "cors",
        headers: { Accept: "application/json" },
    })
        .then(res => {
            if (res.status === 200) {
                return res.json().then(body => buildSessionFromSelf(hosts, body));
            }
            if (res.status === 429) {
                return buildThrottledSession(hosts);
            }
            return null;
        })
        .catch(err => {
            console.warn("BrowserService.Safari: probe failed for", hosts.api_host, err && err.message ? err.message : err);
            return null;
        });
}
