function htmlRoutes() {
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

        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("/styles/cyborgcss", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/cyborg.css"));
    });

    app.get("/styles/stylecss", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/style.css"));
    });

    app.get("/styles/chosencss", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/chosen.css"));
    });

    	

  app.get("/styles/chosen-sprite@2x.png", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/chosen-sprite@2x.png"));
    });

    app.get("/styles/chosenjquery", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/chosen.jquery.min.js"));
    });
}

module.exports = htmlRoutes;