import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import browser from "webextension-polyfill";


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

    private cloud_name: { [id: string] : string; } = {
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

    constructor(
    ) { }

    tabUpdate(url: string): void {
        browser.tabs.update({ url: url });
    }

    tabOpen(url: string): void {
        browser.tabs.create({ url: url });
    }
    tabOpenDoc(url: string): void {
        browser.tabs.create({ url: url })
    }

    issueOpen(): void {
        browser.tabs.create({ url: this.issue_url })
    }

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
    getCloud(host:string): string {
        var host_cleansed = host.replace("api.", "").replace("manage.", "");
        if (this.cloud_name.hasOwnProperty(host_cleansed)) {
            return this.cloud_name[host_cleansed]
        } 
        return null
    }
    
    getUrl = browser.tabs.query({ currentWindow: true, active: true })
        .then((tabs) => {
            const url: string = tabs[0].url;
            return url;
        }).catch(e => { console.log(e); return "" })

    getCookies(cb: () => void): void {
        this.sessionsSource.next([]);
        if (this._isFirefox()) {
            this._getFirefoxCookies()
                .then((cookies: browser.Cookies.Cookie[]) => this._processCookies(cookies, cb))
                .catch(err => console.error("getCookies failed:", err));
            return;
        }

        this._getAllCookies()
            .then((response: { cookies?: browser.Cookies.Cookie[] } | undefined) => {
                if (Array.isArray(response?.cookies)) {
                    return response.cookies;
                }
                console.warn("getCookies returned no cookies payload, falling back to direct cookies API");
                return this._getAllCookiesDirectly();
            })
            .catch(err => {
                console.warn("getCookies failed, falling back to direct cookies API:", err);
                return this._getAllCookiesDirectly();
            })
            .then((cookies: browser.Cookies.Cookie[]) => {
                this._processCookies(cookies, cb);
            })
            .catch(err => console.error("getCookies failed:", err));
    }

    hasCookieHostPermissions(): Promise<boolean> {
        return browser.permissions.contains({ origins: this.cookie_host_permissions });
    }

    requestCookieHostPermissions(): Promise<boolean> {
        return browser.permissions.request({ origins: this.cookie_host_permissions });
    }

    private _isFirefox(): boolean {
        return browser.runtime.getURL("").startsWith("moz-extension://");
    }

    private _processCookies(cookies: browser.Cookies.Cookie[], cb: () => void): void {
        console.log("BrowserService.getCookies:", (cookies || []).length, "cookies loaded");
        (cookies || []).forEach((cookie) => {
            if (!cookie || !cookie.domain) return;
            this._processCookie(cookie);
        });
        cb();
    }

    private _getFirefoxCookies(): Promise<browser.Cookies.Cookie[]> {
        return this.hasCookieHostPermissions()
            .then(granted => console.log("BrowserService.getFirefoxCookies: host permissions granted =", granted))
            .then(() => browser.cookies.getAllCookieStores())
            .then(stores => stores.length ? stores.map(store => store.id) : [undefined])
            .catch(err => {
                console.warn("cookies.getAllCookieStores failed:", err);
                return [undefined];
            })
            .then(storeIds => {
                const queries: browser.Cookies.GetAllDetailsType[] = [];
                storeIds.forEach(storeId => {
                    const storeQuery = storeId ? { storeId } : {};
                    queries.push(storeQuery);
                    queries.push({ ...storeQuery, firstPartyDomain: null });
                    queries.push({ ...storeQuery, partitionKey: {} });
                    queries.push({ ...storeQuery, firstPartyDomain: null, partitionKey: {} });
                });

                console.log("BrowserService.getFirefoxCookies:", queries.length, "cookie queries");

                return Promise.all(
                    queries.map(query =>
                        browser.cookies.getAll(query).catch(err => {
                            console.warn("cookies.getAll failed for", query, err);
                            return [];
                        })
                    )
                );
            })
            .then(results => {
                const cookiesByKey = new Map<string, browser.Cookies.Cookie>();
                results.reduce((cookies, result) => cookies.concat(result), []).forEach(cookie => {
                    const partitionKey = cookie.partitionKey ? JSON.stringify(cookie.partitionKey) : "";
                    const key = [cookie.storeId, cookie.domain, cookie.path, cookie.name, cookie.firstPartyDomain, partitionKey].join("|");
                    cookiesByKey.set(key, cookie);
                });
                return Array.from(cookiesByKey.values());
            });
    }

    private _getAllCookies(): Promise<{ cookies?: browser.Cookies.Cookie[] } | undefined> {
        return this._getAllCookiesDirectly()
            .then(cookies => {
                if (cookies.length) {
                    return { cookies };
                }
                return this._getCookiesFromBackground();
            })
            .catch(err => {
                console.warn("cookies.getAll({}) failed, falling back to background cookies API:", err);
                return this._getCookiesFromBackground();
            });
    }

    private _getAllCookiesDirectly(): Promise<browser.Cookies.Cookie[]> {
        return browser.cookies.getAll({});
    }

    private _getCookiesFromBackground(): Promise<{ cookies?: browser.Cookies.Cookie[] } | undefined> {
        const urls: string[] = [
            ...this.host_manage.map(h => `https://${h}/`),
            ...this.host_api.map(h => `https://${h}/`),
        ];

        return browser.runtime.sendMessage({ type: "getCookies", urls });
    }

    setStorage(k:string, v:string):void{
        var storage_key = {}
        storage_key[k]=v
        browser.storage.local.set(storage_key).catch(err => console.log(err))
    }

    getStorage(key:string, cb:(res)=>void) {
        browser.storage.local.get(key).then(
            data => {
            cb(data);
        }, err => {
            console.log(err)
        });
    }

    ////////////
    // SESSIONS
    ////////////
    private _processCookie(cookie: browser.Cookies.Cookie): void {
        // check if it's part of our domains
        if (this.domains.indexOf(cookie.domain) > -1) {
            // check if the cookie is still valid
            if (cookie.expirationDate > (Date.now() / 1000)) {
                let i: number = -1;
                // try to find this domain in the list of sessions
                const sessions: SessionElement[] = this.sessionsSource.getValue();
                sessions.forEach((session, index) => {
                    if (session.domain == cookie.domain) {
                        i = index;
                    }
                })
                // if the session already exists in the list, update it with the current cookie
                if (i > -1) {
                    if (cookie.name.startsWith("csrftoken")) sessions[i].csrftoken = cookie.value;
                    else if (cookie.name.startsWith("sessionid")) sessions[i].has_sessionid = true;
                    // if the current cookie has a shorter lifetime than the previous one, use its expirationDate instead
                    if (sessions[i].expires_at > cookie.expirationDate) sessions[i].expires_at = cookie.expirationDate
                    // otherwise, add a new entry in the list
                } else {
                    let domain = cookie.domain;
                    if (domain.includes("ai.juniper.net")) {
                        this.addSession(cookie, domain, "jsi", "jsi", ["dc"+domain, "jsi"+domain, "routing"+domain])
                    } else {
                        this.addSession(cookie, domain, "manage", "api", ["manage"+domain])
                    }
                }
            }
        }
    }

    private addSession(cookie: browser.Cookies.Cookie, domain: string, cloud: string, api: string, additional_cloud_hosts: string[]): void {
        var tmp = this.sessionsSource.getValue();

        if (cookie.name.startsWith("csrftoken")) tmp.push({
            domain: domain,
            cloud_host: cloud + domain,
            api_host: api + domain,
            email: null,
            two_factor_passed: false,
            csrftoken: cookie.value,
            has_sessionid: false,
            expires_at: cookie.expirationDate,
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
            expires_at: cookie.expirationDate,
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
