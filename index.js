// MAIN SERVER FILE

//Main requirements for express, mongo, mongoose(some others probably do not need to be added)
const express = require("express");
const mongojs = require("mongojs");
const cheerio = require("cheerio");
const axios = require("axios");
const hbs = require("express-handlebars");
const mongoose = require("mongoose");
// Initialize Express
const app = express();
// Port for Heroku
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

// DATABASE SETUP
// Using MongoDB Atlas free hosting to try and avoid a lot of problems with Heroku, plus play to the home team and host on GCP
mongoose.connect("mongodb+srv://appuser:appuser@cluster0-8odn4.gcp.mongodb.net/test?retryWrites=true", { useNewUrlParser: true});
console.log(mongoose.connection.readyState);



// Main Route
// sending "server is working" to the DOM as a test
app.get("/", function(req,res){
  res.send("Server is Working!");
});


// Express Start on port 3000
app.listen(PORT, function() {
  console.log("App running on port: " + PORT);
});