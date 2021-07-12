console.log('serviceWorker script loaded');
//chrome.action.setBadgeBackgroundColor("#4caf50")


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

        const orgsle_re = /https:\/\/manage\.(?<host>[a-z0-1.]*mist\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!dashboard\/(?<scope>siteComparison|wiredSiteComparison|wanSiteComparison)\/(?<sle>[a-z-]*)\/(?<worstsle>[a-z-]*)\/([a-z-_]*)\/(?<period>[0-9a-z-]*)\/(?<start>[0-9]*)\/(?<stop>[0-9]*)/iys;
        const sle_re = /https:\/\/manage\.(?<host>[a-z0-1.]*mist\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!dashboard\/(?<detail>serviceLevels|wiredserviceLevels|wanserviceLevels)\/(?<scope>[a-z-]*)\/(?<scope_id>[a-f0-9-]*)\/(?<period>[0-9a-z-]*)\/(?<start>[0-9]*)\/(?<stop>[0-9]*)\/(?<site_id>[a-f0-9-]*)/iys;
        const insights_re = /https:\/\/(manage|integration)\.(?<host>[a-z0-1.]*mist\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!dashboard\/insights\/((?<obj>[a-z]+)\/)?((?<obj_id>[a-z0-9-]+)\/)((?<period>[a-z0-9]+)\/)?((?<start>[0-9]*)\/)?((?<stop>[0-9]*)\/)?(?<site_id>[0-9a-f-]*)?/iys;
        const alarm_re = /https:\/\/manage\.(?<host>[a-z0-1.]*mist\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!alerts\/?(?<scope>org|site)?\/?(?<uuid>[0-9a-z-]*)\/?(?<period>[0-9a-z]*)?\/?(?<start>[0-9]*)?\/?(?<end>[0-9]*)?\/?(?<show_ack>true|false)?\/?(?<group>[a-z%0-9]*)?\/?(?<show_crit>true|false)?\/?(?<show_warn>true|false)?\/?(?<show_info>true|false)?\/?(?<site_id>[0-9a-z-]*)?/iys;
        const common_re = /https:\/\/(manage|integration)\.(?<host>[a-z0-1.]*mist\.com)\/admin\/\?org_id=(?<org_id>[0-9a-f-]*)#!(?<obj>[a-z]+)\/?((?<detail>detail|template|site|rfTemplate|admin|edgedetail|clusterdetail|new|view)\/)?([0-9]\/)?((?<obj_id>[0-9a-z_-]*)\/)?(?<site_id>[0-9a-f-]*)?/yis;
        const common_objs = ["ap", "gateway", "switch", "assets", "wlan", "tags", "psk", "tunnels", "clients", "sdkclients", "wiredclients", "wxlan", "security", "switchconfig", "pcap", "orgtags", "misttunnels", "switchtemplate", "deviceprofiles", "org", "configuration", "rftemplates", "templates", "auditlogs", "apinventory", "adminconfig", "subscription", "edge"]

        const orgsle = orgsle_re.exec(tabUrl);
        const sle = sle_re.exec(tabUrl);
        const insights = insights_re.exec(tabUrl);
        const alarm = alarm_re.exec(tabUrl);
        const common = common_re.exec(tabUrl);

        if (orgsle) {
            apiBadge(true);            
        } else if (sle) {        
            apiBadge(true);            
        } else if (insights) {
            apiBadge(true);            
        } else if (common && common["groups"] && common_objs.includes(common["groups"]["obj"].toLowerCase())) {
            apiBadge(true);
        } else if (alarm) {
            apiBadge(true);
        } else {
            apiBadge(false);
        }
    }
    
    function apiBadge(show:boolean) {
        if (show){
            chrome.action.setBadgeBackgroundColor({color: "#4caf50"})
            chrome.action.setBadgeText({"text": "\u2713"});
        } else {
            chrome.action.setBadgeText({"text": ""});
        }
}