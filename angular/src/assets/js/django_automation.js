if (window.location.href.startsWith("https://api")) {
    browser.storage.local
        .get("post")
        .then(
            res => {
                if (res && res.post) {
                    var storageData = JSON.parse(res.post);
                    browser.storage.local.remove("post").then(
                        err => { console.log("not removed: " + err) }
                    )
                    var url = storageData.url;
                    var payload = storageData.payload;
                    var ts = storageData.ts;
                    if (window.location.href == url && Date.now() - ts < 5000) {
                        if (payload) {document.getElementById("id__content").value = JSON.stringify(payload);
                        console.log(payload)}
                        document.getElementById("post-generic-content-form").getElementsByClassName("btn btn-primary js-tooltip")[0].click()
                    }
                }
            }, err => {
                console.log(err);
            }
        );

    browser.storage.local
        .get("delete")
        .then(
            res => {
                if (res && res.delete) {
                    var storageData = JSON.parse(res.delete);
                    browser.storage.local.remove("delete").then(
                        err => { console.log("not removed: " + err) }
                    )
                    var url = storageData.url;
                    var ts = storageData.ts;
                    if (window.location.href == url && Date.now() - ts < 1000) {
                        document.getElementsByClassName("btn btn-danger button-form js-tooltip")[0].click()
                    }
                }
            }, err => {
                console.log(err);
            }
        );
}