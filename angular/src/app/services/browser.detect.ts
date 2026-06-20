import browser from "webextension-polyfill";

export type BrowserKind = "firefox" | "safari" | "chrome";

export function detectBrowserKind(): BrowserKind {
    const extensionUrl = browser.runtime.getURL("");
    if (extensionUrl.startsWith("moz-extension://")) {
        return "firefox";
    }
    if (extensionUrl.startsWith("safari-web-extension://")) {
        return "safari";
    }
    return "chrome";
}
