// MAIN SERVER FILE

//Main requirements for express and mongo
const express = require("express");
const mongojs = require("mongojs");
const cheerio = require("cheerio");
const axios = require("axios");
const hbs = require("express-handlebars");
const mongoose = require("mongoose");

const app = express();

app.use(express.static("public"));

// DATABASE SETUP
mongoose.connect("mongodb+srv://appuser:appuser@cluster0-8odn4.gcp.mongodb.net/test?retryWrites=true", { useNewUrlParser: true});
// variable setup
// let databaseUrl = "news";
// let collections = ["articles"];
// let db = mongojs(databaseUrl, collections);
// // Check for errors
// db.on("error", function(error) {
//   console.log("Database Error:", error);
// });

// Main Route
// sending "server is working" to the DOM as a test
app.get("/", function(req,res){
  res.send("Server is Working!");
});


// Express Start on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});