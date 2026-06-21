import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import browser from "webextension-polyfill";
import { loadSessions } from "./browser.loader";
import type { BrowserSessionContext } from "./browser.loader.context";
import {
    getConfiguredMistDomainFromHost,
    MIST_API_HOSTS,
    MIST_COOKIE_HOST_PERMISSIONS,
    MIST_DOMAINS,
    MIST_MANAGE_HOSTS,
    MistHostConfig,
    resolveMistHostsFromDomain,
} from "./mist.hosts";


export interface SessionElement {
    domain: string,
    csrftoken: string | null,
    email: string | null,
    two_factor_passed: boolean,
    has_sessionid: boolean,
    expires_at: number | null,
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

    private domains: string[] = MIST_DOMAINS;
    private host_manage: string[] = MIST_MANAGE_HOSTS;
    private host_api: string[] = MIST_API_HOSTS;

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

    private cookie_host_permissions: string[] = MIST_COOKIE_HOST_PERMISSIONS;

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

    openApiAction(method: string, url: string, payload: any = undefined): void {
        const action: any = {
            method: method.toUpperCase(),
            url: url,
            ts: Date.now(),
        };
        if (payload !== undefined) {
            action.payload = payload;
        }
        browser.storage.local.remove(["post", "delete"]).catch(err => console.log(err))
            .then(() => this.setStorage("api_action", JSON.stringify(action)))
            .then(() => this.tabOpen(url))
            .catch(() => this.tabOpen(url));
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
    setStorage(k: string, v: string): Promise<void> {
        var storage_key = {}
        storage_key[k] = v
        return browser.storage.local.set(storage_key).catch(err => console.log(err))
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
    getCookies(cb: () => void): void {
        this.sessionsSource.next([]);
        const context: BrowserSessionContext = {
            domains: this.domains,
            hostManage: this.host_manage,
            hostApi: this.host_api,
            hasCookieHostPermissions: () => this.hasCookieHostPermissions(),
            processCookies: (cookies) => this._processCookies(cookies, () => { }),
            getParsedSessionCount: () => this.sessionsSource.getValue().length,
            setSessions: (sessions) => this.sessionsSource.next(sessions),
        };
        loadSessions(context, cb);
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
        const domain = getConfiguredMistDomainFromHost(cookie.domain);
        if (!domain) return;
        const expirationDate = this._getCookieExpiration(cookie);
        if (this.domains.indexOf(domain) === -1) return;
        if (expirationDate !== null && expirationDate <= (Date.now() / 1000)) return;

        const sessions: SessionElement[] = this.sessionsSource.getValue();
        const existingIndex = sessions.findIndex(s => s.domain == domain);

        if (existingIndex > -1) {
            if (cookie.name.startsWith("csrftoken")) sessions[existingIndex].csrftoken = cookie.value;
            else if (cookie.name.startsWith("sessionid")) sessions[existingIndex].has_sessionid = true;
            this.updateSessionExpiration(sessions[existingIndex], expirationDate);
            return;
        }

        const hosts = resolveMistHostsFromDomain(domain, this.domains);
        if (!hosts) return;
        this.addSession(cookie, expirationDate, hosts);
    }

    private _getCookieExpiration(cookie: browser.Cookies.Cookie): number | null {
        return cookie.expirationDate ?? null;
    }

    private updateSessionExpiration(session: SessionElement, expirationDate: number | null): void {
        if (expirationDate === null) {
            session.expires_at = null;
        } else if (session.expires_at !== null && session.expires_at > expirationDate) {
            session.expires_at = expirationDate;
        }
    }

    private addSession(cookie: browser.Cookies.Cookie, expirationDate: number | null, hosts: MistHostConfig): void {
        var tmp = this.sessionsSource.getValue();

        if (cookie.name.startsWith("csrftoken")) tmp.push({
            domain: hosts.domain,
            cloud_host: hosts.cloud_host,
            api_host: hosts.api_host,
            email: null,
            two_factor_passed: false,
            csrftoken: cookie.value,
            has_sessionid: false,
            expires_at: expirationDate,
            privileges: [],
            additional_cloud_hosts: hosts.additional_cloud_hosts,
            requests: -1,
            request_limit: -1,
            request_percentage: 0,
            api_threshold_reached: false,
        });
        else if (cookie.name.startsWith("sessionid")) tmp.push({
            domain: hosts.domain,
            cloud_host: hosts.cloud_host,
            api_host: hosts.api_host,
            email: null,
            two_factor_passed: false,
            csrftoken: null,
            has_sessionid: true,
            expires_at: expirationDate,
            privileges: [],
            additional_cloud_hosts: hosts.additional_cloud_hosts,
            requests: -1,
            request_limit: -1,
            request_percentage: 0,
            api_threshold_reached: false,
        });
        this.sessionsSource.next(tmp);
    }
}
