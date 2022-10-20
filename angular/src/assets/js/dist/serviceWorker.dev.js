"use strict";

//import browser from "../browser/webextension-polyfill";
console.log('serviceWorker script loaded');
browser.tabs.onActivated.addListener(function (info) {
  getUrl(info.tabId);
});
browser.tabs.onUpdated.addListener(function (tab) {
  getUrl(tab);
});

function getUrl(tabId) {
  setTimeout(function () {
    browser.tabs.get(tabId).then(function (tab) {
      if (tab) {
        checkUrl(tab.url);
      } else {
        getUrl(tabId);
      }
    })["catch"](function (err) {
      return console.log(err);
    });
  }, 100);
}

function checkUrl(tabUrl) {
  var base_re = new RegExp("https:\\/\\/(manage|integration)\\.(?<host>[a-z0-9.]*(mist|mistsys)\\.com)\\/admin\\/\\?org_id=(?<org_id>[0-9a-f-]*)#!", "yis");
  var base = base_re.exec(tabUrl);
  var api_re = new RegExp("https:\\/\\/api\\.(?<host>[a-z0-9.]*(mist|mistsys)\\.com)\\/api\\/v1\\/(?<scope>const|installer|invite|login|logout|mobile|msps|orgs|recover|register|self|sites|utils)", "yis");
  var api = api_re.exec(tabUrl);

  if (base) {
    apiBadge(true, false);
  } else if (api) {
    apiBadge(false, true);
  } else {
    apiBadge(false, false);
  }
}

function apiBadge(showManage, showDjango) {
  if (showManage) {
    browser.browserAction.setBadgeBackgroundColor({
      color: "#4caf50"
    });
    browser.browserAction.setBadgeText({
      "text": "\u2713"
    });
  } else if (showDjango) {
    browser.browserAction.setBadgeBackgroundColor({
      color: "#f38019"
    });
    browser.browserAction.setBadgeText({
      "text": "\u2713"
    });
  } else {
    browser.browserAction.setBadgeText({
      "text": ""
    });
  }
}