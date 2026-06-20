import browser from "webextension-polyfill";

export interface ChromeSessionLoaderContext {
    getAllCookiesDirectly: () => Promise<browser.Cookies.Cookie[]>;
    getCookiesFromBackground: () => Promise<browser.Cookies.Cookie[]>;
    processCookies: (cookies: browser.Cookies.Cookie[]) => void;
}

export function loadChromeSessions(context: ChromeSessionLoaderContext, cb: () => void): void {
    context.getAllCookiesDirectly()
        .catch(err => {
            console.warn("BrowserService.Chrome: direct getAll failed, falling back to SW:", err);
            return context.getCookiesFromBackground();
        })
        .then(cookies => {
            // getAll({}) resolves with [] (no reject) when host access isn't granted; fall back.
            if (!cookies || cookies.length === 0) {
                return context.getCookiesFromBackground();
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
