"use strict";

// Using jQuery here for the example's sake, feel free to remove it
var $ = require("jquery");

$.getJSON("/greeting/QiWeb Single Page Application", function (data) {
    $("#spa").append("<h1>" + data.message + "</h1>");
});
