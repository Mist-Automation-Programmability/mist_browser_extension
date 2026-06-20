import browser from "webextension-polyfill";
import { getCookiesFromBackground } from "./browser.background";

export interface ChromeSessionLoaderContext {
    hostManage: string[];
    hostApi: string[];
    processCookies: (cookies: browser.Cookies.Cookie[]) => void;
}

export function loadChromeSessions(context: ChromeSessionLoaderContext, cb: () => void): void {
    browser.cookies.getAll({})
        .catch(err => {
            console.warn("BrowserService.Chrome: direct getAll failed, falling back to SW:", err);
            return getCookiesFromBackground(context.hostManage, context.hostApi);
        })
        .then(cookies => {
            // getAll({}) resolves with [] (no reject) when host access isn't granted; fall back.
            if (!cookies || cookies.length === 0) {
                return getCookiesFromBackground(context.hostManage, context.hostApi);
            }
            return cookies;
        })
        .then(cookies => {
            context.processCookies(cookies);
            cb();
        })
        .catch(err => {
            console.error("BrowserService.Chrome: getCookies failed:", err);
            cb();
        });
}
