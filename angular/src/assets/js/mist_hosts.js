(function (globalScope) {
    var MIST_DOMAINS = [
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
    var MANAGE_PREFIXES = ["manage", "integration", "manage-staging"];
    var JUNIPER_MANAGE_PREFIXES = ["dc", "jsi", "routing"];

    function normalizeDomain(domain) {
        if (!domain) return "";
        domain = domain.toLowerCase();
        return domain.charAt(0) === "." ? domain : "." + domain;
    }

    function isMistDomain(domain) {
        return domain.endsWith(".mist.com")
            || domain.endsWith(".mistsys.com")
            || domain.endsWith(".mist-federal.com");
    }

    function extractMistManageDomainFromUrl(href, allowedDomains) {
        try {
            var url = new URL(href);
            if (url.protocol !== "https:") return null;

            var host = url.hostname.toLowerCase();
            var labels = host.split(".");
            var prefix = labels[0] || "";

            if (host.endsWith(".ai.juniper.net")) {
                if (JUNIPER_MANAGE_PREFIXES.indexOf(prefix) === -1) return null;
                var aiDomain = host.indexOf(".stage.ai.juniper.net") > -1 ? ".stage.ai.juniper.net" : ".ai.juniper.net";
                return !allowedDomains || allowedDomains.indexOf(aiDomain) > -1 ? aiDomain : null;
            }

            if (MANAGE_PREFIXES.indexOf(prefix) === -1 || labels.length < 3) return null;
            var domain = "." + labels.slice(1).join(".");
            if ((!allowedDomains || allowedDomains.indexOf(domain) > -1) && isMistDomain(domain)) return domain;
            return null;
        } catch (e) {
            return null;
        }
    }

    function resolveHostsFromDomain(domain, allowedDomains) {
        domain = normalizeDomain(domain);
        if (allowedDomains && allowedDomains.indexOf(domain) === -1) return null;

        if (domain.indexOf("ai.juniper.net") > -1) {
            if (domain !== ".ai.juniper.net" && domain !== ".stage.ai.juniper.net") return null;
            return {
                domain: domain,
                api_host: "jsi" + domain,
                cloud_host: "jsi" + domain,
                additional_cloud_hosts: ["dc" + domain, "jsi" + domain, "routing" + domain],
            };
        }

        if (!isMistDomain(domain)) return null;

        return {
            domain: domain,
            api_host: "api" + domain,
            cloud_host: "manage" + domain,
            additional_cloud_hosts: ["manage" + domain],
        };
    }

    function inferHostsFromLocation(href) {
        var domain = extractMistManageDomainFromUrl(href);
        return domain ? resolveHostsFromDomain(domain) : null;
    }

    function getRequestPercentage(requests, requestLimit) {
        return requestLimit > 0 ? Math.round((requests / requestLimit) * 100) : 0;
    }

    function buildSessionFromSelf(hosts, body) {
        var twoFactorRequired = !!(body && body.two_factor_required);
        var twoFactorPassed = !!(body && body.two_factor_passed);
        var requests = body && body.api_request_count != null ? body.api_request_count : -1;
        var requestLimit = body && body.api_request_limit != null ? body.api_request_limit : -1;

        return {
            domain: hosts.domain,
            cloud_host: hosts.cloud_host,
            api_host: hosts.api_host,
            email: body && body.email != null ? body.email : null,
            two_factor_passed: twoFactorRequired ? twoFactorPassed : true,
            csrftoken: null,
            has_sessionid: true,
            expires_at: (Date.now() / 1000) + 86400,
            privileges: body && body.privileges != null ? body.privileges : [],
            additional_cloud_hosts: hosts.additional_cloud_hosts,
            requests: requests,
            request_limit: requestLimit,
            request_percentage: getRequestPercentage(requests, requestLimit),
            api_threshold_reached: false,
        };
    }

    function buildThrottledSession(hosts) {
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

    globalScope.MistHosts = {
        domains: MIST_DOMAINS,
        extractMistManageDomainFromUrl: extractMistManageDomainFromUrl,
        resolveHostsFromDomain: resolveHostsFromDomain,
        inferHostsFromLocation: inferHostsFromLocation,
        buildSessionFromSelf: buildSessionFromSelf,
        buildThrottledSession: buildThrottledSession,
    };
})(typeof globalThis !== "undefined" ? globalThis : this);
