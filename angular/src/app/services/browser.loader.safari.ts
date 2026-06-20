import { loadSafariSessions } from "./browser.safari";
import type { BrowserSessionContext } from "./browser.loader.context";

export function loadSessions(context: BrowserSessionContext, cb: () => void): void {
    loadSafariSessions(context, cb);
}
