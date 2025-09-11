
browser.storage.local
    .get("id_links")
    .then(
        res => {
            if (res && res.id_links == "true") process_ids();
        }, err => {
            console.log(err);
        }
    );

var uuids = new Map();

function _gen_id_org_common(org_id, element, element_type) {
    if (Array.isArray(element)) {
        element.forEach(function (element_id) {
            _gen_id_org_common(org_id, element_id, element_type)
        })
    } else {
        if (element && element != "00000000-0000-0000-0000-000000000000") {
            if (element_type == "sites") {
                uuids[element] = "https://" + window.location.host + "/api/v1/sites/" + element;
            } else if (element_type == "orgs") {
                uuids[element] = "https://" + window.location.host + "/api/v1/orgs/" + element;
            } else if (!["logs"].includes(element_type)) {
                uuids[element] = "https://" + window.location.host + "/api/v1/orgs/" + org_id + "/" + element_type + "/" + element;
            }
        }
    }
}


function _gen_id_site_common(site_id, element, element_type) {
    if (Array.isArray(element)) {
        element.forEach(function (element_id) {
            _gen_id_site_common(site_id, element_id, element_type)
        })
    } else {
        if (element && element != "00000000-0000-0000-0000-000000000000") {
            if (element_type == "sites") {
                uuids[element] = "https://" + window.location.host + "/api/v1/sites/" + element;
            } else {
                uuids[element] = "https://" + window.location.host + "/api/v1/sites/" + site_id + "/" + element_type + "/" + element;
            }
        }
    }
}

function process_element(org_id, site_id, self, element, element_type, element_scope, gen_self_id, stats) {
    var id;
    if (element.hasOwnProperty("id") && gen_self_id) {
        if (element.id && element.id != "00000000-0000-0000-0000-000000000000") {
            id = element.id
            if (self) {
                uuids[id] = "https://" + window.location.host + "/api/v1/self/" + element_type + "/" + id;
            } else if (element_type == "sites" && gen_self_id) {
                uuids[id] = "https://" + window.location.host + "/api/v1/sites/" + id;
            } else if (gen_self_id) {
                uuids[id] = "https://" + window.location.host + "/api/v1/sites/" + site_id + "/" + element_type + "/" + id;
            }
        }
    }

    if (element.hasOwnProperty("org_id")) {
        if (element.org_id && element.org_id != "00000000-0000-0000-0000-000000000000") {
            org_id = element.org_id;
            uuids[org_id] = "https://" + window.location.host + "/api/v1/orgs/" + org_id;

            if (element_scope == "orgs" && id && gen_self_id) {
                if (stats) {
                    uuids[id] = "https://" + window.location.host + "/api/v1/orgs/" + org_id + "/stats/" + element_type + "/" + id;
                } else {
                    uuids[id] = "https://" + window.location.host + "/api/v1/orgs/" + org_id + "/" + element_type + "/" + id;
                }
            }
        }
    }

    if (element.hasOwnProperty("site_id")) {
        if (element.site_id && element.site_id != "00000000-0000-0000-0000-000000000000") {
            site_id = element.site_id;
            uuids[site_id] = "https://" + window.location.host + "/api/v1/sites/" + site_id;

            if (element_scope == "sites" && id && gen_self_id) {
                uuids[id] = "https://" + window.location.host + "/api/v1/sites/" + site_id + "/" + element_type + "/" + id;
            }
        }
    }

    if (element.hasOwnProperty("site_ids")) {
        element.site_ids.forEach(function (site_id) {
            if (site_id && site_id != "00000000-0000-0000-0000-000000000000") {
                uuids[site_id] = "https://" + window.location.host + "/api/v1/sites/" + site_id;
            }
        });
    }



    if (org_id) {
        if (element.hasOwnProperty("admin_id")) _gen_id_org_common(org_id, element.admin_id, "admins");
        if (element.hasOwnProperty("alarmtemplate_id")) _gen_id_org_common(org_id, element.alarmtemplate_id, "alarmtemplates");
        if (element.hasOwnProperty("anchor_mxtunnel_ids")) _gen_id_org_common(org_id, element.anchor_mxtunnel_ids, "mxtunnels");
        if (element.hasOwnProperty("applies")) {
            if (element.applies.hasOwnProperty("site_ids")) _gen_id_org_common(org_id, element.applies.site_ids, "sites");
            if (element.applies.hasOwnProperty("sitegroup_ids")) _gen_id_org_common(org_id, element.applies.sitegroup_ids, "sitegroups");
        }
        if (element.hasOwnProperty("apply_tags")) _gen_id_org_common(org_id, element.apply_tags, "nactags");
        if (element.hasOwnProperty("aptemplate_id")) _gen_id_org_common(org_id, element.aptemplate_id, "aptemplates");
        if (element.hasOwnProperty("deviceprofile_id")) _gen_id_org_common(org_id, element.deviceprofile_id, "deviceprofiles");
        if (element.hasOwnProperty("deviceprofile_ids")) _gen_id_org_common(org_id, element.deviceprofile_ids, "deviceprofiles");
        if (element.hasOwnProperty("exceptions")) {
            if (element.exceptions.hasOwnProperty("site_ids")) _gen_id_org_common(org_id, element.exceptions.site_ids, "sites");
            if (element.exceptions.hasOwnProperty("sitegroup_ids")) _gen_id_org_common(org_id, element.exceptions.sitegroup_ids, "sitegroups");
        }
        if (element.hasOwnProperty("gatewaytemplate_id")) _gen_id_org_common(org_id, element.gatewaytemplate_id, "gatewaytemplates");
        if (element.hasOwnProperty("idp")) {
            if (element.idp.hasOwnProperty("idpprofile_id")) _gen_id_org_common(org_id, element.idp.idpprofile_id, "idpprofiles");
        }
        if (element.hasOwnProperty("last_nacrule_id")) _gen_id_org_common(org_id, element.last_nacrule_id, "nactags")
        if (element.hasOwnProperty("mist_nac") && element.mist_nac.hasOwnProperty("idps")) {
            element.mist_nac.idps.forEach(function (idp) {
                if (idp.hasOwnProperty("id")) _gen_id_org_common(org_id, idp.id, "ssos");
            });
        }
        if (element.hasOwnProperty("matching")) {
            if (element.matching.hasOwnProperty("nactags")) _gen_id_org_common(org_id, element.matching.nactags, "nactags");
        }
        if (element.hasOwnProperty("mxcluster_id")) _gen_id_org_common(org_id, element.mxcluster_id, "mxclusters");
        if (element.hasOwnProperty("mxcluster_ids")) _gen_id_org_common(org_id, element.mxcluster_ids, "mxclusters");
        if (element.hasOwnProperty("mxedge_id")) _gen_id_org_common(org_id, element.mxedge_id, "mxedges");
        if (element.hasOwnProperty("nacrule_id")) _gen_id_org_common(org_id, element.nacrule_id, "nacrules");
        if (element.hasOwnProperty("nactag_id")) _gen_id_org_common(org_id, element.nactag_id, "nactags");
        if (element.hasOwnProperty("networktemplate_id")) _gen_id_org_common(org_id, element.networktemplate_id, "networktemplates");
        if (element.hasOwnProperty("privileges")) {
            element.privileges.forEach(function (privilege) {
                if (privilege.hasOwnProperty("org_id")) _gen_id_org_common(org_id, privilege.org_id, "orgs");
                if (privilege.hasOwnProperty("site_id")) _gen_id_org_common(org_id, privilege.org_id, "sites");
                if (privilege.hasOwnProperty("sitegroup_id")) _gen_id_org_common(org_id, privilege.org_id, "sitegroup_id");
            });
        }
        if (element.hasOwnProperty("rftemplate_id")) _gen_id_org_common(org_id, element.rftemplate_id, "rftemplates");
        if (element.hasOwnProperty("secpolicy_id")) _gen_id_org_common(org_id, element.secpolicy_id, "secpolicies");
        if (element.hasOwnProperty("sitegroup_ids")) _gen_id_org_common(org_id, element.sitegroup_ids, "sitegroups");
        if (element.hasOwnProperty("sitetemplate_id")) _gen_id_org_common(org_id, element.sitetemplate_id, "sitetemplates");
        if (element.hasOwnProperty("template_id")) _gen_id_org_common(org_id, element.template_id, "templates");
        if (element.hasOwnProperty("webhook_id")) _gen_id_org_common(org_id, element.webhook_id, "webhooks");
        if (element.hasOwnProperty("wlan_id")) _gen_id_org_common(org_id, element.wlan_id, "wlans");
        if (element.hasOwnProperty("wxtunnel_id")) _gen_id_org_common(org_id, element.wxtunnel_id, "mxtunnels");
    }

    if (site_id) {
        if (element.hasOwnProperty("device_id")) _gen_id_site_common(site_id, element.device_id, "devices");
        if (element.hasOwnProperty("dst_allow_wxtags")) _gen_id_site_common(site_id, element.dst_allow_wxtags, "wxtags");
        if (element.hasOwnProperty("dst_deny_wxtags")) _gen_id_site_common(site_id, element.dst_deny_wxtags, "wxtags");
        if (element.hasOwnProperty("src_wxtags")) _gen_id_site_common(site_id, element.src_wxtags, "wxtags");
        if (element.hasOwnProperty("webhook_id")) _gen_id_site_common(org_id, element.webhook_id, "webhooks");
    }


}

function process_ids() {
    const domElements = document.getElementsByClassName("response-info")
    var domElement;
    try {
        if (domElements.length > 0) {
            domElement = domElements[0].getElementsByClassName("prettyprint");
            if (domElement.length > 0) {
                var baseUri = window.location.href.replace("/integration/", "/api/v1/").split("?")[0];;
                var element_type = baseUri.split("/")[7];
                var element_scope = baseUri.split("/")[5];
                var stats = false;
                var gen_self_id = true;
                var cloneElements = domElement[0].cloneNode(true);
                var site_id, org_id, self;
                if (element_scope == "orgs") {
                    org_id = baseUri.split("/")[6];
                } else if (element_scope == "sites") {
                    site_id = baseUri.split("/")[6];
                } else if (element_scope == "self") {
                    self = true;
                    var element_type = baseUri.split("/")[6];
                }
                if (baseUri.includes("/events/search")) {
                    gen_self_id = false;
                } else if (baseUri.includes("/alarms/")) {
                    gen_self_id = false;
                } else if (baseUri.includes("/logs")) {
                    gen_self_id = false;
                } else if (baseUri.includes("/devices/upgrade")){
                    element_type = "devices/upgrade"
                }
                switch (element_type) {
                    case "inventory":
                        element_scope = "sites";
                        element_type = "devices";
                        break;
                    case "sites":
                        element_scope = "";
                        element_type = "sites";
                        break;
                    default:
                        element_scope = baseUri.split("/")[5];
                        if (element_type == "stats") {
                            stats = true
                            element_type = baseUri.split("/")[8];;
                        }
                        break;
                }
                cloneElements.removeChild(cloneElements.childNodes[0]);
                var cloneElements_json = JSON.parse(cloneElements.innerHTML.replace(/<\/*span[^>]*>/gm, "").replace(/<\/*a[^>]*>/gm, ""));
                if (Array.isArray(cloneElements_json)) {
                    cloneElements_json.forEach(function (element) {
                        process_element(org_id, site_id, self, element, element_type, element_scope, gen_self_id, stats);
                    })
                } else if (cloneElements_json.hasOwnProperty("results")) {
                    cloneElements_json.results.forEach(function (element) {
                        process_element(org_id, site_id, self, element, element_type, element_scope, gen_self_id, stats);
                    })
                    if (cloneElements_json.hasOwnProperty("next")) {
                        uuids[cloneElements_json.next] = "https://" + window.location.host + cloneElements_json.next;
                    }
                } else {
                    process_element(org_id, site_id, self, cloneElements_json, element_type, element_scope, false, stats);
                }
                for (const [key, value] of Object.entries(uuids)) {
                    var cleanHTML = DOMPurify.sanitize("\"<a href=\"" + value + "\" style=\"text-decoration: underline;color: #D14;\">" + key + "</a>\"")
                    domElement[0].innerHTML = domElement[0].innerHTML.replaceAll("\"" + key + "\"", cleanHTML);
                }

            }
        }
    } catch (e) {
        console.warn("Error in process_ids: ", e);
    }
}
