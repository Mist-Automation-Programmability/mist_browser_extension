// Compatibility loader. New manifests point to browser-specific background
// entrypoints (bg-firefox.js, bg-chrome.js, bg-safari.js).
importScripts("bg-common.js");

var legacyApi = typeof browser !== "undefined" ? browser : chrome;
var legacyUsePromise = typeof browser !== "undefined";
var legacyBackfill = typeof navigator !== "undefined" && /Safari\//.test(navigator.userAgent) && !/Chrome\//.test(navigator.userAgent);

MistBgCommon.create(legacyApi, {
    usePromiseResponse: legacyUsePromise,
    backfillMissingDomain: legacyBackfill,
}).start();


