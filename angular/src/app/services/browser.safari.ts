import type { SessionElement } from "./browser.service";

export interface SafariSessionLoaderContext {
    domains: string[];
    getCookiesFromBackground: () => Promise<any[]>;
    processCookies: (cookies: any[]) => void;
    getParsedSessionCount: () => number;
    setSessions: (sessions: SessionElement[]) => void;
}

export function loadSafariSessions(context: SafariSessionLoaderContext, cb: () => void): void {
    context.getCookiesFromBackground()
        .then(cookies => {
            console.log("BrowserService.Safari: SW returned", (cookies || []).length, "cookies");
            context.processCookies(cookies || []);
            return context.getParsedSessionCount();
        })
        .then(parsedCount => {
            if (parsedCount > 0) {
                console.log("BrowserService.Safari:", parsedCount, "session(s) parsed from cookies");
                cb();
                return Promise.resolve();
            }

            console.log("BrowserService.Safari: no parseable cookie sessions, probing /api/v1/self per cloud");
            return probeSafariSessionsByApi(context.domains)
                .then(sessions => {
                    context.setSessions(sessions);
                    console.log("BrowserService.Safari:", sessions.length, "active session(s) detected via /self probe");
                    cb();
                });
        })
        .catch(err => {
            console.error("BrowserService.Safari: session load failed:", err);
            cb();
        });
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
        requests: -1,
        request_limit: -1,
        request_percentage: 0,
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
