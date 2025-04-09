
k = "id_links"
browser.storage.local
    .get({ k })
    .then(
        res => {
            if (res.k == "true") process_ids();
        }, err => {
            console.log(err);
        }
    );

//if (window.location.host == "api.mist.com") {
const uuid_re = /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/
const uuid_re_tail = /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/

function process_ids() {
    const domElements = document.getElementsByClassName("response-info")
    var domElement, finalElements;
    try {
        if (domElements.length > 0) {
            domElement = domElements[0].getElementsByClassName("prettyprint");
            if (domElement.length > 0) {
                //console.log(domElement[0].innerHTML);
                finalElements = domElement[0].getElementsByClassName("str");
                for (var i = 0; i < finalElements.length; i++) {
                    var baseURI = finalElements[i].baseURI.replace("/integration/", "/api/v1/").split("?")[0];
                    const elemId = finalElements[i].innerText.replaceAll("\"", "");
                    if (elemId == "next") {
                        inject_next(finalElements, i + 1, window.location.host);
                    } else if (elemId == "id") {
                        if (baseURI.includes("/api/v1/orgs") && baseURI.includes("/sites")) {
                            inject_common_link(finalElements, i + 1, "https://" + window.location.host + "/api/v1/sites");
                        } else {
                            inject_common_link(finalElements, i + 1, baseURI);
                        }
                    } else if (elemId == "site_id") {
                        inject_common_link(finalElements, i + 1, "https://" + window.location.host + "/api/v1/sites");
                    } else if (elemId == "org_id") {
                        inject_common_link(finalElements, i + 1, "https://" + window.location.host + "/api/v1/orgs");
                    } else if (elemId == "msp_id") {
                        inject_common_link(finalElements, i + 1, "https://" + window.location.host + "/api/v1/msps");
                    } else if (baseURI.includes("/api/v1/sites")) {
                        baseURI = baseURI.split("/").splice(0, 7).join("/");
                        if (elemId == "map_id") {
                            inject_common_link(finalElements, i + 1, baseURI + "/" + elemId.replace("_id", "s"));
                        }
                    } else if (baseURI.includes("/api/v1/orgs")) {
                        if (baseURI.includes("/nacrules") && (elemId == "nactags" || elemId == "apply_tags")) {
                            var index = i + 1;
                            var uuid;
                            while (uuid = uuid_re.exec(finalElements[index].innerText.replaceAll("\"", ""))) {
                                inject_common_link(finalElements, index, baseURI.split("nacrules")[0] + "nactags");
                                index += 1;
                            }
                        } else if (baseURI.includes("/sites") && elemId == "sitegroup_ids") {
                            var index = i + 1;
                            var uuid;
                            while (uuid = uuid_re.exec(finalElements[index].innerText.replaceAll("\"", ""))) {
                                inject_common_link(finalElements, index, baseURI.split("sites")[0] + "sitegroups");
                                index += 1;
                            }
                        } else if (baseURI.includes("/sitegroups") && elemId == "site_ids") {
                            var index = i + 1;
                            var uuid;
                            while (uuid = uuid_re.exec(finalElements[index].innerText.replaceAll("\"", ""))) {
                                inject_common_link(finalElements, index, "https://" + window.location.host + "/api/v1/sites");
                                index += 1;
                            }
                        }
                    }
                }
            }
        }
    } catch (e) {
        console.warn("Error in process_ids: ", e);
    }
}

function inject_next(finalElements, index, host) {
    const next_value = finalElements[index].innerText.replaceAll("\"", "")
    const url = "https://" + host + next_value;
    let cleanHTML = DOMPurify.sanitize("\"<a href=\"" + url + "\" style=\"text-decoration: underline;color: #D14;\">" + next_value + "</a>\"");
    finalElements[index].innerHTML = cleanHTML;
}

function inject_common_link(finalElements, index, baseUrl) {
    const id = get_id(finalElements, index)
    const url = get_url(baseUrl, id)
    if (url && id) {
        let cleanHTML = DOMPurify.sanitize("\"<a href=\"" + url + "\" style=\"text-decoration: underline;color: #D14;\">" + id + "</a>\"")
        finalElements[index].innerHTML = cleanHTML;
    }
    return id;
}

function get_url(baseUrl, id) {
    if (id && !baseUrl.endsWith(id)) {
        return baseUrl + "/" + id
    }
    return null
}

function get_id(finalElements, index) {
    var idElement = finalElements[index];
    var id = idElement.innerText.replaceAll("\"", "");
    if (id != "00000000-0000-0000-0000-000000000000" && !id.startsWith("00000000-0000-0000-1000")) {
        return id
    }
    return null;
}