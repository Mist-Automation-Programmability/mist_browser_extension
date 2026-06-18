console.log("[mist-sw] service worker file loaded at", new Date().toISOString());

var extensionApi = typeof browser !== "undefined" ? browser : chrome;
var browser_name = typeof browser !== "undefined" ? "browser" : "chrome";
var extensionAction = extensionApi.action || extensionApi.browserAction;
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
        Promise.all(
            urls.map(url =>
                callApi(extensionApi.cookies.getAll, [{ url }]).catch(err => {
                    console.warn("cookies.getAll failed for", url, err);
                    return [];
                })
            )
        ).then(results => {
            const cookies = [].concat(...results);
            console.log("serviceWorker.getCookies:", cookies.length, "cookies across", urls.length, "URLs");
            sendResponse({ cookies });
        });
        return true;
    }
});


