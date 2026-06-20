importScripts("bg-common.js");

var chromeApi = typeof browser !== "undefined" ? browser : chrome;
var mistChromeBg = MistBgCommon.create(chromeApi, {
    usePromiseResponse: false,
    backfillMissingDomain: false,
});

mistChromeBg.start();
