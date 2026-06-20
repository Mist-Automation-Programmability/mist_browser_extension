import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import browser from "webextension-polyfill";
import { loadSafariSessions } from "./browser.safari";
import { loadFirefoxSessions } from "./browser.firefox";
import { loadChromeSessions } from "./browser.chrome";
import { detectBrowserKind } from "./browser.detect";


export interface SessionElement {
    domain: string,
    csrftoken: string | null,
    email: string | null,
    two_factor_passed: boolean,
    has_sessionid: boolean,
    expires_at: number,
    privileges: [],
    cloud_host: string,
    api_host: string,
    additional_cloud_hosts: string[],
    requests: number,
    request_limit: number,
    request_percentage: number,
    api_threshold_reached: boolean,
}

export interface CloudName {
    string
}

@Injectable({
    providedIn: 'root'
})
export class BrowserService {
    private sessionsSource = new BehaviorSubject<SessionElement[]>([]);
    sessions = this.sessionsSource.asObservable();

    private domains: string[] = [
        ".mistsys.com",
        ".mist.com",
        ".eu.mist.com",
        ".gc1.mist.com",
        ".gc2.mist.com",
        ".gc3.mist.com",
        ".gc4.mist.com",
        ".gc5.mist.com",
        ".gc6.mist.com",
        ".gc7.mist.com",
        ".ac2.mist.com",
        ".ac5.mist.com",
        ".ac6.mist.com",
        ".us.mist-federal.com",
        ".staging.mist-federal.com",
        ".ai.juniper.net",
        ".stage.ai.juniper.net",
    ]

    private host_manage: string[] = [
        "manage-staging.mistsys.com",
        "integration.mistsys.com",
        "manage.mist.com",
        "integration.mist.com",
        "manage.eu.mist.com",
        "manage.gc1.mist.com",
        "integration.gc1.mist.com",
        "manage.gc2.mist.com",
        "manage.gc3.mist.com",
        "manage.gc4.mist.com",
        "manage.gc5.mist.com",
        "manage.gc6.mist.com",
        "manage.gc7.mist.com",
        "manage.ac2.mist.com",
        "manage.ac5.mist.com",
        "manage.ac6.mist.com",
        "manage.us.mist-federal.com",
        "manage.staging.mist-federal.com",
        "dc.ai.juniper.net",
        "dc.stage.ai.juniper.net",
        "jsi.ai.juniper.net",
        "jsi.stage.ai.juniper.net",
        "routing.ai.juniper.net",
        "routing.stage.ai.juniper.net",
    ]

    private host_api: string[] = [
        "api.mist.com",
        "api.eu.mist.com",
        "api.gc1.mist.com",
        "api.gc2.mist.com",
        "api.gc3.mist.com",
        "api.gc4.mist.com",
        "api.gc5.mist.com",
        "api.gc6.mist.com",
        "api.gc7.mist.com",
        "api.ac2.mist.com",
        "api.ac5.mist.com",
        "api.ac6.mist.com",
        "api.us.mist-federal.com",
        "dc.ai.juniper.net",
        "dc.stage.ai.juniper.net",
        "jsi.ai.juniper.net",
        "jsi.stage.ai.juniper.net",
        "routing.ai.juniper.net",
        "routing.stage.ai.juniper.net",
        "api.mistsys.com",
        "api.staging.mist-federal.com",
    ]

    private cloud_name: { [id: string]: string; } = {
        "mist.com": "Global 01",
        "gc1.mist.com": "Global 02",
        "ac2.mist.com": "Global 03",
        "gc2.mist.com": "Global 04",
        "gc4.mist.com": "Global 05",
        "gc5.mist.com": "APAC 02",
        "gc6.mist.com": "EMEA 04",
        "gc7.mist.com": "APAC 03",
        "eu.mist.com": "EMEA 01",
        "gc3.mist.com": "EMEA 02",
        "ac6.mist.com": "EMEA 03",
        "ac5.mist.com": "APAC 01",
        "us.mist-federal.com": "GOV"
    }


    private issue_url: string = "https://github.com/tmunzer/mist_browser_extension/issues/new";

    private cookie_host_permissions: string[] = [
        "https://*.mist.com/*",
        "https://*.mistsys.com/*",
        "https://*.mist-federal.com/*",
        "https://*.ai.juniper.net/*",
    ];

    constructor() { }

    // ========================================================================
    // Tabs / navigation (common)
    // ========================================================================
    tabUpdate(url: string): void {
        browser.tabs.update({ url: url });
    }

    tabOpen(url: string): void {
        browser.tabs.create({ url: url });
    }

    tabOpenDoc(url: string): void {
        browser.tabs.create({ url: url });
    }

    issueOpen(): void {
        browser.tabs.create({ url: this.issue_url });
    }

    getUrl = browser.tabs.query({ currentWindow: true, active: true })
        .then((tabs) => {
            const url: string = tabs[0].url;
            return url;
        }).catch(e => { console.log(e); return "" })

    // ========================================================================
    // Config / manifest getters (common)
    // ========================================================================
    getVersion(): string {
        return browser.runtime.getManifest().version;
    }

    getDomains(): string[] {
        return this.domains;
    }

    getHostManage(): string[] {
        return this.host_manage;
    }

    getHostApi(): string[] {
        return this.host_api;
    }

    getCloud(host: string): string {
        var host_cleansed = host.replace("api.", "").replace("manage.", "");
        if (this.cloud_name.hasOwnProperty(host_cleansed)) {
            return this.cloud_name[host_cleansed]
        }
        return null
    }

    // ========================================================================
    // Storage (common)
    // ========================================================================
    setStorage(k: string, v: string): void {
        var storage_key = {}
        storage_key[k] = v
        browser.storage.local.set(storage_key).catch(err => console.log(err))
    }

    getStorage(key: string, cb: (res) => void) {
        browser.storage.local.get(key).then(
            data => {
                cb(data);
            }, err => {
                console.log(err)
            });
    }

    // ========================================================================
    // Permissions (common)
    // ========================================================================
    hasCookieHostPermissions(): Promise<boolean> {
        return browser.permissions.contains({ origins: this.cookie_host_permissions });
    }

    requestCookieHostPermissions(): Promise<boolean> {
        return browser.permissions.request({ origins: this.cookie_host_permissions });
    }

    // ========================================================================
    // Sessions entry point
    // ========================================================================
    // Keeps the historical `getCookies` name so callers don't change, but the
    // Safari path doesn't actually read cookies — Safari sandboxes the cookie
    // jar away from this extension, so it probes /api/v1/self instead.
    getCookies(cb: () => void): void {
        this.sessionsSource.next([]);
        const browserKind = detectBrowserKind();
        if (browserKind === "firefox") {
            loadFirefoxSessions({
                hasCookieHostPermissions: () => this.hasCookieHostPermissions(),
                processCookies: (cookies) => this._processCookies(cookies, () => { }),
            }, cb);
        } else if (browserKind === "safari") {
            loadSafariSessions({
                domains: this.domains,
                hostManage: this.host_manage,
                hostApi: this.host_api,
                processCookies: (cookies) => this._processCookies(cookies, () => { }),
                getParsedSessionCount: () => this.sessionsSource.getValue().length,
                setSessions: (sessions) => this.sessionsSource.next(sessions),
            }, cb);
        } else {
            loadChromeSessions({
                hostManage: this.host_manage,
                hostApi: this.host_api,
                processCookies: (cookies) => this._processCookies(cookies, () => { }),
            }, cb);
        }
    }

    // ========================================================================
    // Cookie -> session translation (Firefox / Chrome)
    // ========================================================================
    private _processCookies(cookies: browser.Cookies.Cookie[], cb: () => void): void {
        console.log("BrowserService:", (cookies || []).length, "cookies loaded");
        (cookies || []).forEach(cookie => this._processCookie(cookie));
        console.log("BrowserService:", this.sessionsSource.getValue().length, "sessions parsed");
        cb();
    }

    private _processCookie(cookie: browser.Cookies.Cookie): void {
        if (!cookie || !cookie.domain || !cookie.name) return;
        const domain = this._getSessionDomain(cookie.domain);
        if (!domain) return;
        const expirationDate = this._getCookieExpiration(cookie);
        if (this.domains.indexOf(domain) === -1) return;
        if (expirationDate <= (Date.now() / 1000)) return;

        const sessions: SessionElement[] = this.sessionsSource.getValue();
        const existingIndex = sessions.findIndex(s => s.domain == domain);

        if (existingIndex > -1) {
            if (cookie.name.startsWith("csrftoken")) sessions[existingIndex].csrftoken = cookie.value;
            else if (cookie.name.startsWith("sessionid")) sessions[existingIndex].has_sessionid = true;
            // if the current cookie has a shorter lifetime than the previous one, use its expirationDate instead
            if (sessions[existingIndex].expires_at > expirationDate) sessions[existingIndex].expires_at = expirationDate;
            return;
        }

        if (domain.includes("ai.juniper.net")) {
            this.addSession(cookie, domain, expirationDate, "jsi", "jsi", ["dc" + domain, "jsi" + domain, "routing" + domain]);
        } else {
            this.addSession(cookie, domain, expirationDate, "manage", "api", ["manage" + domain]);
        }
    }

    private _getSessionDomain(cookieDomain: string): string | null {
        const host = cookieDomain.replace(/^\./, "").toLowerCase();
        const domains = this.domains
            .slice()
            .sort((a, b) => b.length - a.length);
        return domains.find(domain => {
            const cleanDomain = domain.replace(/^\./, "").toLowerCase();
            return host === cleanDomain || host.endsWith(domain.toLowerCase());
        }) || null;
    }

    private _getCookieExpiration(cookie: browser.Cookies.Cookie): number {
        return cookie.expirationDate || ((Date.now() / 1000) + 86400);
    }

    private addSession(cookie: browser.Cookies.Cookie, domain: string, expirationDate: number, cloud: string, api: string, additional_cloud_hosts: string[]): void {
        var tmp = this.sessionsSource.getValue();

        if (cookie.name.startsWith("csrftoken")) tmp.push({
            domain: domain,
            cloud_host: cloud + domain,
            api_host: api + domain,
            email: null,
            two_factor_passed: false,
            csrftoken: cookie.value,
            has_sessionid: false,
            expires_at: expirationDate,
            privileges: [],
            additional_cloud_hosts: additional_cloud_hosts,
            requests: -1,
            request_limit: -1,
            request_percentage: 0,
            api_threshold_reached: false,
        });
        else if (cookie.name.startsWith("sessionid")) tmp.push({
            domain: domain,
            cloud_host: cloud + domain,
            api_host: api + domain,
            email: null,
            two_factor_passed: false,
            csrftoken: null,
            has_sessionid: true,
            expires_at: expirationDate,
            privileges: [],
            additional_cloud_hosts: additional_cloud_hosts,
            requests: -1,
            request_limit: -1,
            request_percentage: 0,
            api_threshold_reached: false,
        });
        this.sessionsSource.next(tmp);
    }
}
