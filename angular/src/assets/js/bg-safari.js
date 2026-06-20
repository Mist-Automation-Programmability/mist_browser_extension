importScripts("bg-common.js");

var safariApi = typeof browser !== "undefined" ? browser : chrome;
var mistSafariBg = MistBgCommon.create(safariApi, {
    usePromiseResponse: false,
    backfillMissingDomain: true,
});

mistSafariBg.start();
