import browser from "webextension-polyfill";

export function getCookiesFromBackground(hostManage: string[], hostApi: string[]): Promise<browser.Cookies.Cookie[]> {
    const urls: string[] = [
        ...hostManage.map(h => `https://${h}/`),
        ...hostApi.map(h => `https://${h}/`),
    ];

    console.log("BrowserService.Bg: sending to SW for", urls.length, "URLs");
    return browser.runtime.sendMessage({ type: "getCookies", urls })
        .then((response: { cookies?: browser.Cookies.Cookie[] } | browser.Cookies.Cookie[] | undefined) => {
            if (Array.isArray(response)) {
                return response;
            }
            if (Array.isArray(response?.cookies)) {
                return response.cookies;
            }
            console.warn("BrowserService.Bg: unexpected SW response shape");
            return [];
        })
        .catch(err => {
            console.error("BrowserService.Bg: SW sendMessage failed:", err);
            return [];
        });
}
