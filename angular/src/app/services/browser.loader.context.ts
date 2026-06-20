import browser from "webextension-polyfill";
import type { SessionElement } from "./browser.service";

export interface BrowserSessionContext {
    domains: string[];
    hostManage: string[];
    hostApi: string[];
    hasCookieHostPermissions: () => Promise<boolean>;
    processCookies: (cookies: browser.Cookies.Cookie[]) => void;
    getParsedSessionCount: () => number;
    setSessions: (sessions: SessionElement[]) => void;
}
