const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
// const mdb = require("mdb-ui-kit");
// const input = require("mdb-ui-kit");

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("home");
});

app.get("/contact", function(req, res){
  res.render("contact");
});

app.get("/about", function(req, res){
  res.render("about");
});

app.get("/profile", function(req, res){
  res.render("profile");
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
