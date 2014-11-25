"use strict";

// Using jQuery here for the example's sake, feel free to remove it
window.$ = window.jQuery = require("jquery");
window.$.getJSON("/greeting/QiWeb Single Page Application", function (data) {
    window.$("#spa").append("<h1>" + data.message + "</h1>");
});
