
var browser_name = "ffx";
if (typeof browser === "undefined") {
    var browser = chrome;
    browser_name = "chrome";
}

browser.tabs.onActivated.addListener(info => {
    getUrl(info.tabId);
})

browser.tabs.onUpdated.addListener((tab) => {
    getUrl(tab);
})

function getUrl(tabId) {
    setTimeout(() => {
        browser.tabs.get(tabId)
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
        browser.action.setBadgeBackgroundColor({ color: color })
        browser.action.setBadgeText({ "text": "\u2713" });
    } else {
        browser.action.setBadgeText({ "text": "" });
    }
}
