import browser from "webextension-polyfill";

export interface FirefoxSessionLoaderContext {
    hasCookieHostPermissions: () => Promise<boolean>;
    processCookies: (cookies: browser.Cookies.Cookie[]) => void;
}

export function loadFirefoxSessions(context: FirefoxSessionLoaderContext, cb: () => void): void {
    getFirefoxCookies(context.hasCookieHostPermissions)
        .then(cookies => {
            context.processCookies(cookies);
            cb();
        })
        .catch(err => {
            console.error("BrowserService.Firefox: getCookies failed:", err);
            cb();
        });
}

function getFirefoxCookies(hasCookieHostPermissions: () => Promise<boolean>): Promise<browser.Cookies.Cookie[]> {
    return hasCookieHostPermissions()
        .then(granted => console.log("BrowserService.Firefox: host permissions granted =", granted))
        .then(() => browser.cookies.getAllCookieStores())
        .then(stores => stores.length ? stores.map(store => store.id) : [undefined])
        .catch(err => {
            console.warn("BrowserService.Firefox: getAllCookieStores failed:", err);
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

            console.log("BrowserService.Firefox:", queries.length, "cookie queries");

            return Promise.all(
                queries.map(query =>
                    browser.cookies.getAll(query).catch(err => {
                        console.warn("BrowserService.Firefox: getAll failed for", query, err);
                        return [];
                    })
                )
            );
        })
        .then(results => {
            const cookiesByKey = new Map<string, browser.Cookies.Cookie>();
            results.reduce((cookies, result) => cookies.concat(result), []).forEach(cookie => {
                if (!cookie || !cookie.domain) return;
                const partitionKey = cookie.partitionKey ? JSON.stringify(cookie.partitionKey) : "";
                const key = [cookie.storeId, cookie.domain, cookie.path, cookie.name, cookie.firstPartyDomain, partitionKey].join("|");
                cookiesByKey.set(key, cookie);
            });
            return Array.from(cookiesByKey.values());
        });
}
