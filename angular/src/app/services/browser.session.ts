import type { SessionElement } from "./browser.service";
import type { MistHostConfig } from "./mist.hosts";

export function getRequestPercentage(requests: number, requestLimit: number, rounded = false): number {
    const percentage = requestLimit > 0 ? (requests / requestLimit) * 100 : 0;
    return rounded ? Math.round(percentage) : percentage;
}

export function buildSessionFromSelf(hosts: MistHostConfig, body: any): SessionElement {
    const twoFactorRequired = !!body?.two_factor_required;
    const twoFactorPassed = !!body?.two_factor_passed;
    const requests = body?.api_request_count ?? -1;
    const requestLimit = body?.api_request_limit ?? -1;

    return {
        domain: hosts.domain,
        cloud_host: hosts.cloud_host,
        api_host: hosts.api_host,
        email: body?.email ?? null,
        two_factor_passed: twoFactorRequired ? twoFactorPassed : true,
        csrftoken: null,
        has_sessionid: true,
        expires_at: (Date.now() / 1000) + 86400,
        privileges: body?.privileges ?? [],
        additional_cloud_hosts: hosts.additional_cloud_hosts,
        requests,
        request_limit: requestLimit,
        request_percentage: getRequestPercentage(requests, requestLimit, true),
        api_threshold_reached: false,
    };
}

export function buildThrottledSession(hosts: MistHostConfig): SessionElement {
    return {
        domain: hosts.domain,
        cloud_host: hosts.cloud_host,
        api_host: hosts.api_host,
        email: "threshold_reached",
        two_factor_passed: false,
        csrftoken: null,
        has_sessionid: true,
        expires_at: (Date.now() / 1000) + 86400,
        privileges: [],
        additional_cloud_hosts: hosts.additional_cloud_hosts,
        requests: 5000,
        request_limit: 5000,
        request_percentage: 100,
        api_threshold_reached: true,
    };
}

export function markSessionThresholdReached(session: SessionElement): void {
    session.email = "threshold_reached";
    session.api_threshold_reached = true;
    session.requests = 5000;
    session.request_limit = 5000;
    session.request_percentage = 100;
}
