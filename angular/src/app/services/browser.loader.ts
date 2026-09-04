import { loadFirefoxSessions } from "./browser.firefox";
import type { BrowserSessionContext } from "./browser.loader.context";

export function loadSessions(context: BrowserSessionContext, cb: () => void): void {
    loadFirefoxSessions(context, cb);
}
