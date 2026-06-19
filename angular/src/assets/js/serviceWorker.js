console.log("[mist-sw] service worker file loaded at", new Date().toISOString());

var extensionApi = typeof browser !== "undefined" ? browser : chrome;
var browser_name = typeof browser !== "undefined" ? "browser" : "chrome";
var extensionAction = extensionApi.action || extensionApi.browserAction;
var isFirefox = typeof navigator !== "undefined" && /Firefox\//.test(navigator.userAgent);
console.log("[mist-sw] browser global =", browser_name);

function callApi(apiFunction, args) {
    if (typeof browser !== "undefined") {
        return Promise.resolve(apiFunction.apply(null, args));
    }

    return new Promise((resolve, reject) => {
        apiFunction.apply(null, [
            ...args,
            response => {
                const runtimeError = extensionApi.runtime && extensionApi.runtime.lastError;
                if (runtimeError) {
                    reject(runtimeError);
                } else {
                    resolve(response);
                }
            }
        ]);
    });
}

function getCookieStoreQueries() {
    if (!extensionApi.cookies.getAllCookieStores) {
        return Promise.resolve([{}]);
    }

    return callApi(extensionApi.cookies.getAllCookieStores, [])
        .then(stores => stores.length ? stores.map(store => ({ storeId: store.id })) : [{}])
        .catch(err => {
            console.warn("cookies.getAllCookieStores failed:", err);
            return [{}];
        });
}

function getCookiesFromUrls(urls) {
    return getCookieStoreQueries().then(storeQueries => {
        const queries = [];
        const errors = [];
        urls.forEach(url => {
            storeQueries.forEach(storeQuery => {
                queries.push(Object.assign({ url }, storeQuery));
            });
        });

        return Promise.all(
            queries.map(query =>
                callApi(extensionApi.cookies.getAll, [query])
                    .then(cookies => cookies.map(cookie => {
                        if (cookie && !cookie.domain) {
                            return Object.assign({}, cookie, { domain: new URL(query.url).hostname });
                        }
                        return cookie;
                    }))
                    .catch(err => {
                        const errorMessage = err && err.message ? err.message : String(err);
                        errors.push({ url: query.url, storeId: query.storeId || "default", message: errorMessage });
                        console.warn("cookies.getAll failed for", query.url, query.storeId || "default", err);
                        return [];
                    })
            )
        ).then(results => ({
            cookies: [].concat(...results),
            debug: {
                urls: urls.length,
                queries: queries.length,
                stores: storeQueries.map(storeQuery => storeQuery.storeId || "default"),
                emptyQueries: results.filter(cookies => !cookies.length).length,
                errorCount: errors.length,
                errors: errors.slice(0, 10),
            }
        }));
    });
}

extensionApi.tabs.onActivated.addListener(info => {
    getUrl(info.tabId);
})

extensionApi.tabs.onUpdated.addListener(tabId => {
    getUrl(tabId);
})

function getUrl(tabId) {
    setTimeout(() => {
        callApi(extensionApi.tabs.get, [tabId])
            .then(tab => {
                if (tab) {
                    checkUrl(tab.url);
                } else {
                    getUrl(tabId);
                }
            })
            .catch(err => console.log(err))
    }, 100);
}

function checkUrl(tabUrl) {
    const org_re = /https:\/\/(manage|integration|manage-staging)\.(?<host>[a-z0-9.]*(mist|mistsys|mist-federal)\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!/yis;
    const org = org_re.exec(tabUrl);
    const msp_re = /https:\/\/(manage|integration|manage-staging)\.(?<host>[a-z0-9.]*(mist|mistsys|mist-federal)\.com)\/msp\/\?msp=(?<msp_id>[0-9a-f-]*)#!/yis;
    const msp = msp_re.exec(tabUrl);
    const api_re = /https:\/\/api\.(?<host>[a-z0-9.]*(mist|mistsys|mist-federal)\.com)\/api\/v1\/(?<scope>const|installer|invite|login|logout|mobile|msps|orgs|recover|register|self|sites|utils)/yis;
    const api = api_re.exec(tabUrl);
    const juniper_re = /https:\/\/(dc|jsi|routing)(\.stage)?\.ai\.juniper\.net\/+admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!/yis;
    const juniper = juniper_re.exec(tabUrl);

    if (org || msp) {
        apiBadge("#4caf50");
    } else if (api) {
        apiBadge("#f38019");
    } else if (juniper) {
        apiBadge("#0095a9" );
    } else {
        apiBadge(null);
    }
}

function apiBadge(color) {
    if (color) {
        extensionAction.setBadgeBackgroundColor({ color: color })
        extensionAction.setBadgeText({ "text": "\u2713" });
    } else {
        extensionAction.setBadgeText({ "text": "" });
    }
}

extensionApi.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message && message.type === "getCookies") {
        const urls = Array.isArray(message.urls) ? message.urls : [];
        const getCookiesPromise = getCookiesFromUrls(urls).then(response => {
            console.log("serviceWorker.getCookies:", response.cookies.length, "cookies across", urls.length, "URLs", response.debug);
            return response;
        }).catch(err => {
            console.warn("serviceWorker.getCookies failed:", err);
            return { cookies: [], debug: { urls: urls.length, queries: 0, stores: [], emptyQueries: 0, errorCount: 1, errors: [{ message: err && err.message ? err.message : String(err) }] } };
        });

        if (isFirefox) {
            return getCookiesPromise;
        }

        getCookiesPromise.then(sendResponse);
        return true;
    }
});


