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

    const base_re = /https:\/\/(manage|integration)\.(?<host>[a-z0-1.]*(mist|mistsys)\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!/yis;
    const base = base_re.exec(tabUrl);

    if (base) {
        apiBadge(true);
    } else {
        apiBadge(false);
    }
}

function apiBadge(show: boolean) {
    if (show) {
        chrome.action.setBadgeBackgroundColor({ color: "#4caf50" })
        chrome.action.setBadgeText({ "text": "\u2713" });
    } else {
        chrome.action.setBadgeText({ "text": "" });
    }
}