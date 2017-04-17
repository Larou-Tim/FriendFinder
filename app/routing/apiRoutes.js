
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var PORT = 4500;
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

app.get("/api/friends", function (req, res) {

    res.sendFile(path.join(__dirname, "home.html"));
});

app.post("/api/friends", function (req, res) {

//   var newRes = req.body;
//   if(tableData.length < 5) {
//       tableData.push(newRes);
//       res.send(true);
//   }
//   else {
//       waitlistData.push(newRes);
//       res.send(false);
      
//   }
});