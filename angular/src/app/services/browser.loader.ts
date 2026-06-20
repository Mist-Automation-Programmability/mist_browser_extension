import browser from "webextension-polyfill";
import type { SessionElement } from "./browser.service";
import { loadChromeSessions } from "./browser.chrome";

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
    loadChromeSessions(context, cb);
}
