(function () {
    // Defensive browser API detection (works across Chrome, Firefox, Safari)
    var _browser = (typeof browser !== "undefined") ? browser : (typeof chrome !== "undefined" ? chrome : null);
    var MIST_DEBUG = false;
    var ACTION_MAX_AGE_MS = 15000;

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

    // Wait for a DOM condition to be true, retrying up to maxTries times.
    function waitForValue(label, getValue, maxTries, delay, cb) {
        var value = getValue();
        if (value) {
            cb(value);
            return;
        }
        if (maxTries <= 0) {
            console.warn("django_automation: value not found after retries:", label);
            return;
        }
        setTimeout(function () {
            waitForValue(label, getValue, maxTries - 1, delay, cb);
        }, delay);
    }

    function copyPageCsrfIntoForm(form) {
        var existing = form && form.querySelector("input[name='csrfmiddlewaretoken']");
        if (existing && existing.value) return;

        var pageCsrf = null;
        var inputs = document.querySelectorAll("input[name='csrfmiddlewaretoken']");
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].value) {
                pageCsrf = inputs[i];
                break;
            }
        }
        if (!form || !pageCsrf) return;

        var input = existing || document.createElement("input");
        input.type = "hidden";
        input.name = "csrfmiddlewaretoken";
        input.value = pageCsrf.value;
        if (!existing) form.appendChild(input);
    }

    function getFormButton(form) {
        if (!form) return null;
        return form.querySelector(".btn.btn-primary.js-tooltip")
            || form.querySelector(".btn-primary")
            || form.querySelector("button[type='submit']")
            || form.querySelector("input[type='submit']");
    }

    function getPayloadTextarea(form) {
        return (form && (
            form.querySelector("#id__content")
            || form.querySelector("textarea[name='_content']")
            || form.querySelector("textarea")
        )) || document.getElementById("id__content");
    }

    function findBodyForm(method) {
        var lower = method.toLowerCase();
        var form = document.getElementById(lower + "-generic-content-form")
            || document.getElementById(lower + "-form")
            || document.querySelector("form[id*='" + lower + "'][id*='generic']")
            || document.querySelector("form[id*='" + lower + "']");
        var btn = getFormButton(form);
        if (!form || !btn) return null;
        return { form: form, btn: btn };
    }

    function findDeleteAction() {
        var btn = document.querySelector(".btn.btn-danger.button-form.js-tooltip")
            || document.querySelector(".button-form.btn-danger")
            || document.querySelector("form .btn-danger")
            || document.querySelector("form button[value='DELETE']")
            || document.querySelector("form input[value='DELETE']")
            || document.getElementsByClassName("btn btn-danger button-form js-tooltip")[0]
            || document.querySelector(".btn-danger");
        var form = btn && btn.closest ? btn.closest("form") : null;
        if (!btn) return null;
        return { form: form, btn: btn };
    }

    function fillPayload(form, payload) {
        if (payload === undefined) return;
        var textarea = getPayloadTextarea(form);
        if (!textarea) {
            console.warn("django_automation: payload provided but textarea not found");
            return;
        }
        textarea.value = JSON.stringify(payload);
        textarea.dispatchEvent(new Event("input", { bubbles: true }));
        textarea.dispatchEvent(new Event("change", { bubbles: true }));
        debugLog("django_automation: textarea filled with", payload);
    }

    function clickAfterPageSettles(storageKey, ready, method) {
        copyPageCsrfIntoForm(ready.form);
        setTimeout(function () {
            _browser.storage.local.remove(storageKey).catch(function (e) {
                console.warn("django_automation: remove " + storageKey + " failed:", e);
            });
            ready.btn.click();
            debugLog("django_automation: " + method + " button clicked");
        }, 1000);
    }

    function runApiAction(storageKey, storageData) {
        var method = (storageData.method || "").toUpperCase();
        var url = storageData.url;
        var payload = storageData.payload;
        var ts = storageData.ts;
        var currentUrl = normalizeUrl(window.location.href);
        var targetUrl = normalizeUrl(url);

        debugLog("django_automation:", method, "check - current:", currentUrl, "target:", targetUrl, "age:", Date.now() - ts, "ms");
        if (currentUrl !== targetUrl) {
            debugLog("django_automation: URL mismatch, skipping", method);
            return;
        }
        if (Date.now() - ts > ACTION_MAX_AGE_MS) {
            debugLog("django_automation:", method, "data too old, skipping");
            _browser.storage.local.remove(storageKey).catch(function (e) {
                console.warn("django_automation: remove stale " + storageKey + " failed:", e);
            });
            return;
        }

        if (["POST", "PUT", "PATCH"].indexOf(method) > -1) {
            waitForValue(method + " form", function () {
                return findBodyForm(method);
            }, 80, 250, function (ready) {
                debugLog("django_automation:", method, "form found, filling payload and submitting");
                try {
                    fillPayload(ready.form, payload);
                    clickAfterPageSettles(storageKey, ready, method);
                } catch (e) {
                    console.error("django_automation:", method, "action failed:", e);
                }
            });
            return;
        }

        if (method === "DELETE") {
            waitForValue("DELETE button", function () {
                return findDeleteAction();
            }, 80, 250, function (ready) {
                debugLog("django_automation: DELETE button found, submitting");
                try {
                    clickAfterPageSettles(storageKey, ready, method);
                } catch (e) {
                    console.error("django_automation: DELETE action failed:", e);
                }
            });
            return;
        }

        console.warn("django_automation: unsupported API action method:", method);
    }

    function readStoredAction(storageKey, defaultMethod) {
        _browser.storage.local.get(storageKey).then(function (res) {
            if (res && res[storageKey]) {
                try {
                    var storageData = JSON.parse(res[storageKey]);
                    storageData.method = storageData.method || defaultMethod;
                    runApiAction(storageKey, storageData);
                } catch (e) {
                    console.error("django_automation: failed to parse " + storageKey + " storage:", e);
                }
            } else {
                debugLog("django_automation: no pending " + storageKey + " found in storage");
            }
        }).catch(function (err) {
            console.error("django_automation: storage.get(" + storageKey + ") failed:", err);
        });
    }

    function tryPost(storageData) {
        storageData.method = "POST";
        runApiAction("post", storageData);
    }

    function tryDelete(storageData) {
        storageData.method = "DELETE";
        runApiAction("delete", storageData);
    }

    if (!window.location.href.startsWith("https://api")) {
        return;
    }

    debugLog("django_automation: running on", window.location.href);

    readStoredAction("api_action");

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
