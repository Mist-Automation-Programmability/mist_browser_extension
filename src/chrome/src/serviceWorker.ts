console.log('serviceWorker script loaded');

chrome.tabs.onActivated.addListener(info => {
    getUrl(info.tabId);
})

chrome.tabs.onUpdated.addListener((tab) => {
    getUrl(tab);

})

function getUrl(tabId: number) {
    setTimeout(() => {
        chrome.tabs.get(tabId, (tab) => {
            if (tab) {
                checkUrl(tab.url);
            } else {
                getUrl(tabId);
            }
        })
    }, 100);
}

function checkUrl(tabUrl: string) {

    const base_re = /https:\/\/(manage|integration)\.(?<host>[a-z0-9.]*(mist|mistsys)\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!/yis;
    const base = base_re.exec(tabUrl);
    const api_re = /https:\/\/api\.(?<host>[a-z0-9.]*(mist|mistsys)\.com)\/api\/v1\/(?<scope>const|installer|invite|login|logout|mobile|msps|orgs|recover|register|self|sites|utils)/yis;
    const api = api_re.exec(tabUrl);

    if (base) {
        apiBadge(true, false);
    } else if (api) {
        apiBadge(false, true);
    } else {
        apiBadge(false, false);
    }
}

function apiBadge(showManage: boolean, showDjango: boolean) {
    if (showManage) {
        chrome.action.setBadgeBackgroundColor({ color: "#4caf50" })
        chrome.action.setBadgeText({ "text": "\u2713" });
    } else if (showDjango) {
        chrome.action.setBadgeBackgroundColor({ color: "#f38019" })
        chrome.action.setBadgeText({ "text": "\u2713" });
    } else {
        chrome.action.setBadgeText({ "text": "" });
    }
}