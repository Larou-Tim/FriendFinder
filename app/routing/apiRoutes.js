function apiRoutes(app) {
    // ---------------------------------------
    // App setup - requirments
    // ---------------------------------------
    var express = require("express");
    var bodyParser = require("body-parser");
    var path = require("path");

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.text());
    app.use(bodyParser.json({
        type: "application/vnd.api+json"
    }));

    // ---------------------------------------
    //Call friends and make a dummy constructor for get api
    // ---------------------------------------
    var friendsMaker = require("../data/friends.js");
    var friends = new friendsMaker();

    // ---------------------TEST---------------
    var bob = new friendsMaker("Bob", "none", [5, 3, 4, 4, 5, 1, 2, 2, 4, 1]);
    bob.newFriend();
    console.log(bob.closestMatch);
    // ---------------------------------------

    // ---------------------------------------
    //get call to show all friends included
    // ---------------------------------------
    app.get("/api/friends", function (req, res) {

        res.json(friends.showFriends());
    });

    // ---------------------------------------
    //post calls constructor in friends.js and displays match
    // ---------------------------------------
    app.post("/api/friends", function (req, res) {

        // i need to call this when button is pressed
        var newRequest = req.body;
        // console.log(newNew);

        var newFriend = new friendsMaker(newRequest.name, newRequest.picture, newRequest.survey);
        newFriend.newFriend();
        console.log(newFriend.closestMatch);
        res.send(newFriend.closestMatch);
    });
}

module.exports = apiRoutes;