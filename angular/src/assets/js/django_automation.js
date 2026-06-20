(function () {
    // Defensive browser API detection (works across Chrome, Firefox, Safari)
    var _browser = (typeof browser !== "undefined") ? browser : (typeof chrome !== "undefined" ? chrome : null);
    var MIST_DEBUG = false;

    function debugLog() {
        if (MIST_DEBUG) {
            console.log.apply(console, arguments);
        }
    }

    if (!_browser || !_browser.storage || !_browser.storage.local) {
        console.warn("django_automation: browser.storage.local not available, skipping");
        return;
    }

    // Normalize URL for comparison (strip trailing slash)
    function normalizeUrl(url) {
        return url ? url.replace(/\/+$/, "") : "";
    }

    // Wait for a DOM element to appear, retrying up to maxTries times with delay ms between tries
    function waitForElement(selector, isFn, maxTries, delay, cb) {
        var el = isFn ? isFn() : document.querySelector(selector);
        if (el) {
            cb(el);
            return;
        }
        if (maxTries <= 0) {
            console.warn("django_automation: element not found after retries:", selector);
            return;
        }
        setTimeout(function () {
            waitForElement(selector, isFn, maxTries - 1, delay, cb);
        }, delay);
    }

    function tryPost(storageData) {
        var url = storageData.url;
        var payload = storageData.payload;
        var ts = storageData.ts;
        var currentUrl = normalizeUrl(window.location.href);
        var targetUrl = normalizeUrl(url);
        debugLog("django_automation: POST check — current:", currentUrl, "target:", targetUrl, "age:", Date.now() - ts, "ms");
        if (currentUrl !== targetUrl) {
            debugLog("django_automation: URL mismatch, skipping POST");
            return;
        }
        if (Date.now() - ts > 10000) {
            debugLog("django_automation: POST data too old, skipping");
            return;
        }
        _browser.storage.local.remove("post").catch(function (e) { console.warn("django_automation: remove post failed:", e); });

        // Wait for the form to render (Django REST Framework renders asynchronously in Safari)
        waitForElement(null, function () { return document.getElementById("post-generic-content-form"); }, 20, 200, function (form) {
            debugLog("django_automation: form found, filling payload and submitting");
            try {
                var textarea = document.getElementById("id__content");
                if (textarea && payload) {
                    textarea.value = JSON.stringify(payload);
                    debugLog("django_automation: textarea filled with", payload);
                }
                var btn = form.getElementsByClassName("btn btn-primary js-tooltip")[0];
                if (btn) {
                    btn.click();
                    debugLog("django_automation: POST button clicked");
                } else {
                    console.warn("django_automation: submit button not found in form");
                }
            } catch (e) {
                console.error("django_automation: POST action failed:", e);
            }
        });
    }

    function tryDelete(storageData) {
        var url = storageData.url;
        var ts = storageData.ts;
        var currentUrl = normalizeUrl(window.location.href);
        var targetUrl = normalizeUrl(url);
        debugLog("django_automation: DELETE check — current:", currentUrl, "target:", targetUrl, "age:", Date.now() - ts, "ms");
        if (currentUrl !== targetUrl) {
            debugLog("django_automation: URL mismatch, skipping DELETE");
            return;
        }
        if (Date.now() - ts > 5000) {
            debugLog("django_automation: DELETE data too old, skipping");
            return;
        }
        _browser.storage.local.remove("delete").catch(function (e) { console.warn("django_automation: remove delete failed:", e); });

        waitForElement(".btn.btn-danger.button-form.js-tooltip", null, 20, 200, function (btn) {
            debugLog("django_automation: DELETE button found, clicking");
            try {
                btn.click();
                debugLog("django_automation: DELETE button clicked");
            } catch (e) {
                console.error("django_automation: DELETE action failed:", e);
            }
        });
    }

    if (!window.location.href.startsWith("https://api")) {
        return;
    }

    debugLog("django_automation: running on", window.location.href);

    _browser.storage.local.get("post").then(function (res) {
        if (res && res.post) {
            try {
                var storageData = JSON.parse(res.post);
                tryPost(storageData);
            } catch (e) {
                console.error("django_automation: failed to parse post storage:", e);
            }
        } else {
            debugLog("django_automation: no pending POST found in storage");
        }
    }).catch(function (err) {
        console.error("django_automation: storage.get(post) failed:", err);
    });

    _browser.storage.local.get("delete").then(function (res) {
        if (res && res.delete) {
            try {
                var storageData = JSON.parse(res.delete);
                tryDelete(storageData);
            } catch (e) {
                console.error("django_automation: failed to parse delete storage:", e);
            }
        } else {
            debugLog("django_automation: no pending DELETE found in storage");
        }
    }).catch(function (err) {
        console.error("django_automation: storage.get(delete) failed:", err);
    });
}());