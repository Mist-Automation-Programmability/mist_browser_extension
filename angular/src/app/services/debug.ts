const DEBUG = false;

export function debugLog(...args: any[]): void {
    if (DEBUG) {
        console.log(...args);
    }
}
