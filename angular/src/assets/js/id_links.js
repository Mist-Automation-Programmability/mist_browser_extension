
//if (window.location.host == "api.mist.com") {
    const uuid_re = /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/

    const domElements = document.getElementsByClassName("response-info")
    var domElement, finalElements;
    if (domElements.length > 0) {
        domElement = domElements[0].getElementsByClassName("prettyprint");
        if (domElement.length > 0) {
            console.log(domElement[0].innerHTML);
            finalElements = domElement[0].getElementsByClassName("str");
            for (var i = 0; i < finalElements.length; i++) {
                const baseURI = finalElements[i].baseURI;
                if (finalElements[i].innerText == "\"next\"") {
                    inject_next(finalElements, i+1, window.location.host);
                } else if (finalElements[i].innerText == "\"id\"") {
                    inject_common_link(finalElements, i + 1, baseURI);
                } else if (finalElements[i].innerHTML == "\"site_id\"") {
                    inject_common_link(finalElements, i + 1, "https://" + window.location.host + "/api/v1/sites");
                } else if (finalElements[i].innerHTML == "\"org_id\"") {
                    inject_common_link(finalElements, i + 1, "https://" + window.location.host + "/api/v1/orgs");
                } else if (baseURI.includes("nacrules") && (finalElements[i].innerText=="\"nactags\"" || finalElements[i].innerText=="\"apply_tags\"")){
                    var index = i+1;
                    var uuid;
                    while (uuid = uuid_re.exec(finalElements[index].innerText.replaceAll("\"", ""))){
                        inject_common_link(finalElements, index, baseURI.split("nacrules")[0]+"nactags");
                        index+=1;
                    }
                }
            }
        }
    }
//}

function inject_next(finalElements, index, host){
    const next_value = finalElements[index].innerText.replaceAll("\"", "")
    const url = "https://"+host+next_value;
    finalElements[index].innerHTML = "\"<a href=\"" + url + "\" style=\"text-decoration: underline;color: #D14;\">" + next_value + "</a>\"";
}

function inject_common_link(finalElements, index, baseUrl) {
    const id = get_id(finalElements, index)
    const url = get_url(baseUrl, id)
    if (url && id) {
        finalElements[index].innerHTML = "\"<a href=\"" + url + "\" style=\"text-decoration: underline;color: #D14;\">" + id + "</a>\"";
    }
    return id;
}

function get_url(baseUrl, id) {
    if (id && !baseUrl.endsWith(id)) {
        return baseUrl + "/" + id
    } else {
        return null
    }
}

function get_id(finalElements, index) {
    var idElement = finalElements[index];
    var id = idElement.innerText.replaceAll("\"", "");
    if (id != "00000000-0000-0000-0000-000000000000" && !id.startsWith("00000000-0000-0000-1000")) {
        return id
    }
    return null;
}