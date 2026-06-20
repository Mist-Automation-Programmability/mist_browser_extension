export interface MistHostConfig {
    domain: string;
    api_host: string;
    cloud_host: string;
    additional_cloud_hosts: string[];
}

export const MIST_DOMAINS: string[] = [
    ".mistsys.com",
    ".mist.com",
    ".eu.mist.com",
    ".gc1.mist.com",
    ".gc2.mist.com",
    ".gc3.mist.com",
    ".gc4.mist.com",
    ".gc5.mist.com",
    ".gc6.mist.com",
    ".gc7.mist.com",
    ".ac2.mist.com",
    ".ac5.mist.com",
    ".ac6.mist.com",
    ".us.mist-federal.com",
    ".staging.mist-federal.com",
    ".ai.juniper.net",
    ".stage.ai.juniper.net",
];

export const MIST_MANAGE_HOSTS: string[] = [
    "manage-staging.mistsys.com",
    "integration.mistsys.com",
    "manage.mist.com",
    "integration.mist.com",
    "manage.eu.mist.com",
    "manage.gc1.mist.com",
    "integration.gc1.mist.com",
    "manage.gc2.mist.com",
    "manage.gc3.mist.com",
    "manage.gc4.mist.com",
    "manage.gc5.mist.com",
    "manage.gc6.mist.com",
    "manage.gc7.mist.com",
    "manage.ac2.mist.com",
    "manage.ac5.mist.com",
    "manage.ac6.mist.com",
    "manage.us.mist-federal.com",
    "manage.staging.mist-federal.com",
    "dc.ai.juniper.net",
    "dc.stage.ai.juniper.net",
    "jsi.ai.juniper.net",
    "jsi.stage.ai.juniper.net",
    "routing.ai.juniper.net",
    "routing.stage.ai.juniper.net",
];

export const MIST_API_HOSTS: string[] = [
    "api.mist.com",
    "api.eu.mist.com",
    "api.gc1.mist.com",
    "api.gc2.mist.com",
    "api.gc3.mist.com",
    "api.gc4.mist.com",
    "api.gc5.mist.com",
    "api.gc6.mist.com",
    "api.gc7.mist.com",
    "api.ac2.mist.com",
    "api.ac5.mist.com",
    "api.ac6.mist.com",
    "api.us.mist-federal.com",
    "dc.ai.juniper.net",
    "dc.stage.ai.juniper.net",
    "jsi.ai.juniper.net",
    "jsi.stage.ai.juniper.net",
    "routing.ai.juniper.net",
    "routing.stage.ai.juniper.net",
    "api.mistsys.com",
    "api.staging.mist-federal.com",
];

export const MIST_COOKIE_HOST_PERMISSIONS: string[] = [
    "https://*.mist.com/*",
    "https://*.mistsys.com/*",
    "https://*.mist-federal.com/*",
    "https://*.ai.juniper.net/*",
];

const MANAGE_PREFIXES = ["manage", "integration", "manage-staging"];
const JUNIPER_MANAGE_PREFIXES = ["dc", "jsi", "routing"];

export function getCloudDomainFromHost(host: string): string {
    const parts = (host || "").toLowerCase().split(".");
    if (parts.length < 3) {
        return (host || "").toLowerCase();
    }
    return parts.slice(1).join(".");
}

export function isMistManageUrl(url: string): boolean {
    return !!extractMistManageDomainFromUrl(url, null);
}

export function extractMistManageDomainFromUrl(url: string, allowedDomains: string[] | null = null): string | null {
    if (!url || !url.startsWith("https://")) {
        return null;
    }
    try {
        const host = new URL(url).hostname.toLowerCase();
        const labels = host.split(".");
        const prefix = labels[0] || "";

        if (host.endsWith(".ai.juniper.net")) {
            if (!JUNIPER_MANAGE_PREFIXES.includes(prefix)) {
                return null;
            }
            const domain = host.includes(".stage.ai.juniper.net") ? ".stage.ai.juniper.net" : ".ai.juniper.net";
            return !allowedDomains || allowedDomains.includes(domain) ? domain : null;
        }

        if (!MANAGE_PREFIXES.includes(prefix) || labels.length < 3) {
            return null;
        }

        const domain = "." + labels.slice(1).join(".");
        if ((!allowedDomains || allowedDomains.includes(domain)) && isMistDomain(domain)) {
            return domain;
        }
        return null;
    } catch (e) {
        return null;
    }
}

export function resolveMistHostsFromDomain(domain: string, allowedDomains: string[] | null = null): MistHostConfig | null {
    const normalizedDomain = normalizeDomain(domain);
    if (allowedDomains && !allowedDomains.includes(normalizedDomain)) {
        return null;
    }

    if (normalizedDomain.includes("ai.juniper.net")) {
        if (normalizedDomain !== ".ai.juniper.net" && normalizedDomain !== ".stage.ai.juniper.net") {
            return null;
        }
        return {
            domain: normalizedDomain,
            api_host: "jsi" + normalizedDomain,
            cloud_host: "jsi" + normalizedDomain,
            additional_cloud_hosts: ["dc" + normalizedDomain, "jsi" + normalizedDomain, "routing" + normalizedDomain],
        };
    }

    if (!isMistDomain(normalizedDomain)) {
        return null;
    }

    return {
        domain: normalizedDomain,
        api_host: "api" + normalizedDomain,
        cloud_host: "manage" + normalizedDomain,
        additional_cloud_hosts: ["manage" + normalizedDomain],
    };
}

export function getConfiguredMistDomainFromHost(host: string): string | null {
    const normalizedHost = (host || "").replace(/^\./, "").toLowerCase();
    const domains = MIST_DOMAINS.slice().sort((a, b) => b.length - a.length);
    return domains.find(domain => {
        const cleanDomain = domain.replace(/^\./, "").toLowerCase();
        return normalizedHost === cleanDomain || normalizedHost.endsWith(domain.toLowerCase());
    }) || null;
}

function normalizeDomain(domain: string): string {
    if (!domain) {
        return "";
    }
    return domain.startsWith(".") ? domain.toLowerCase() : "." + domain.toLowerCase();
}

function isMistDomain(domain: string): boolean {
    return domain.endsWith(".mist.com")
        || domain.endsWith(".mistsys.com")
        || domain.endsWith(".mist-federal.com");
}
