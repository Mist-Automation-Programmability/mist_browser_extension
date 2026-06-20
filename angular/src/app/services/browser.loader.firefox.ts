import browser from "webextension-polyfill";
import type { SessionElement } from "./browser.service";
import { loadFirefoxSessions } from "./browser.firefox";

export interface BrowserSessionContext {
    domains: string[];
    hostManage: string[];
    hostApi: string[];
    hasCookieHostPermissions: () => Promise<boolean>;
    processCookies: (cookies: browser.Cookies.Cookie[]) => void;
    getParsedSessionCount: () => number;
    setSessions: (sessions: SessionElement[]) => void;
}

export function loadSessions(context: BrowserSessionContext, cb: () => void): void {
    loadFirefoxSessions(context, cb);
}
