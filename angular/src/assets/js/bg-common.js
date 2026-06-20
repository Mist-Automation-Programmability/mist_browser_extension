(function (globalScope) {
    function create(api, options) {
        var extensionAction = api.action || api.browserAction;
        var usePromiseResponse = !!(options && options.usePromiseResponse);
        var backfillMissingDomain = !!(options && options.backfillMissingDomain);

        function callApi(apiFunction, args) {
            if (typeof browser !== "undefined") {
                return Promise.resolve(apiFunction.apply(null, args));
            }

            return new Promise((resolve, reject) => {
                apiFunction.apply(null, [
                    ...args,
                    response => {
                        var runtimeError = api.runtime && api.runtime.lastError;
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
            if (!api.cookies.getAllCookieStores) {
                return Promise.resolve([{}]);
            }

            return callApi(api.cookies.getAllCookieStores, [])
                .then(stores => stores.length ? stores.map(store => ({ storeId: store.id })) : [{}])
                .catch(err => {
                    console.warn("cookies.getAllCookieStores failed:", err);
                    return [{}];
                });
        }

        function getCookiesFromUrls(urls) {
            return getCookieStoreQueries().then(storeQueries => {
                var queries = [];
                urls.forEach(url => {
                    storeQueries.forEach(storeQuery => {
                        queries.push(Object.assign({ url: url }, storeQuery));
                    });
                });

                return Promise.all(
                    queries.map(query =>
                        callApi(api.cookies.getAll, [query])
                            .then(cookies => {
                                if (!Array.isArray(cookies)) {
                                    return [];
                                }
                                if (!backfillMissingDomain) {
                                    return cookies;
                                }
                                return cookies.map(cookie => {
                                    if (cookie && !cookie.domain) {
                                        return Object.assign({}, cookie, { domain: new URL(query.url).hostname });
                                    }
                                    return cookie;
                                });
                            })
                            .catch(err => {
                                console.warn("cookies.getAll failed for", query.url, query.storeId || "default", err);
                                return [];
                            })
                    )
                ).then(results => [].concat(...results));
            });
        }

        function apiBadge(color) {
            if (color) {
                extensionAction.setBadgeBackgroundColor({ color: color });
                extensionAction.setBadgeText({ text: "\u2713" });
            } else {
                extensionAction.setBadgeText({ text: "" });
            }
        }

        function checkUrl(tabUrl) {
            var org_re = /https:\/\/(manage|integration|manage-staging)\.(?<host>[a-z0-9.]*(mist|mistsys|mist-federal)\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!/yis;
            var org = org_re.exec(tabUrl);
            var msp_re = /https:\/\/(manage|integration|manage-staging)\.(?<host>[a-z0-9.]*(mist|mistsys|mist-federal)\.com)\/msp\/\?msp=(?<msp_id>[0-9a-f-]*)#!/yis;
            var msp = msp_re.exec(tabUrl);
            var api_re = /https:\/\/api\.(?<host>[a-z0-9.]*(mist|mistsys|mist-federal)\.com)\/api\/v1\/(?<scope>const|installer|invite|login|logout|mobile|msps|orgs|recover|register|self|sites|utils)/yis;
            var apiMatch = api_re.exec(tabUrl);
            var juniper_re = /https:\/\/(dc|jsi|routing)(\.stage)?\.ai\.juniper\.net\/+admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!/yis;
            var juniper = juniper_re.exec(tabUrl);

            if (org || msp) {
                apiBadge("#4caf50");
            } else if (apiMatch) {
                apiBadge("#f38019");
            } else if (juniper) {
                apiBadge("#0095a9");
            } else {
                apiBadge(null);
            }
        }

        function getUrl(tabId) {
            setTimeout(() => {
                callApi(api.tabs.get, [tabId])
                    .then(tab => {
                        if (tab) {
                            checkUrl(tab.url);
                        } else {
                            getUrl(tabId);
                        }
                    })
                    .catch(err => console.log(err));
            }, 100);
        }

        function registerTabListeners() {
            api.tabs.onActivated.addListener(info => {
                getUrl(info.tabId);
            });

            api.tabs.onUpdated.addListener(tabId => {
                getUrl(tabId);
            });
        }

        function registerCookieMessageHandler() {
            api.runtime.onMessage.addListener((message, sender, sendResponse) => {
                if (!message || message.type !== "getCookies") {
                    return;
                }

                var urls = Array.isArray(message.urls) ? message.urls : [];
                var getCookiesPromise = getCookiesFromUrls(urls)
                    .then(cookies => ({ cookies: cookies }))
                    .catch(err => {
                        console.warn("background.getCookies failed:", err);
                        return { cookies: [] };
                    });

                if (usePromiseResponse) {
                    return getCookiesPromise;
                }

                getCookiesPromise.then(sendResponse);
                return true;
            });
        }

        function start() {
            registerTabListeners();
            registerCookieMessageHandler();
        }

        return { start: start };
    }

    globalScope.MistBgCommon = {
        create: create,
    };
})(typeof self !== "undefined" ? self : this);
