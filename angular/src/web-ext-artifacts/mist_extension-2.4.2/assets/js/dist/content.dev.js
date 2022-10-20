"use strict";

var browser = require("webextension-polyfill");

browser.runtime.onMessage.addListener(function (request, sender, respond) {
  var handler = new Promise(function (resolve, reject) {
    if (request) {
      resolve(window.location.href);
    } else {
      reject('');
    }
  });
  handler.then(function (message) {
    console.log(message);
    respond(message);
  })["catch"](function (error) {
    return respond(error);
  });
  return true;
});