import { loadChromeSessions } from "./browser.chrome";
import type { BrowserSessionContext } from "./browser.loader.context";

export function loadSessions(context: BrowserSessionContext, cb: () => void): void {
    loadChromeSessions(context, cb);
}
