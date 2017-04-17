
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var PORT = 4000;
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

app.get("/", function (req, res) {

    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});