var browser_name = "ffx";
if (typeof browser === "undefined") {
    var browser = chrome;
    browser_name = "chrome";
}

browser.runtime.onMessage.addListener((request, sender, respond) => {
    // Ignore typed messages so browser-specific content scripts can own them.
    if (request && request.type) {
        return;
    }

    const handler = new Promise((resolve, reject) => {
        if (request) {
            resolve(window.location.href);
        } else {
            reject('');
        }
    });

    handler
        .then(message => {
            console.log(message)
            respond(message)
        })
        .catch(error => respond(error));
    return true;
});

