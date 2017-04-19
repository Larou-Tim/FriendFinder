// ---------------------------------------
//I've used this as entry point.
//It calls the express app and pushes it to routing
// ---------------------------------------

var htmlPath = require("./app/routing/htmlRoutes.js");
var apiPath = require("./app/routing/apiRoutes.js");
var PORT = 4000;

// express.static
var express = require("express");
var app = express();

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

var apiRoutes = new apiPath(app);
var htmlRoutes = new htmlPath(app);

