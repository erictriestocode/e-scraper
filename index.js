// ***** MAIN SERVER FILE *****

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
mongoose.connect("mongodb+srv://appuser:appuser@cluster0-8odn4.gcp.mongodb.net/test?retryWrites=true", { useNewUrlParser: true });
console.log(mongoose.connection.readyState);



// ***** ROUTING *****
// Main Route
// sending "server is working" to the DOM as a test
app.get("/", function (req, res) {
  res.send("Server is Working!");
});

// Scrape Route
// Taken heavily from the Scrape exercise in Section 18
app.get("/scrape", function (req, res) {
  const newsURL = "http://lite.cnn.io/en"

  axios.get(newsURL).then(function (response) {

    // Load the Response into cheerio and save it to a variable
    // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
    var $ = cheerio.load(response.data);

    // An empty array to save the data that we'll scrape
    var results = [];

    // With cheerio, find each p-tag with the "title" class
    // (i: iterator. element: the current element)
    $("li").each(function (i, element) {

      // Save the text of the element in a "title" variable
      var title = $(element).text();

      // In the currently selected element, look at its child elements (i.e., its a-tags),
      // then save the values for any "href" attributes that the child elements may have
      var link = $(element).children().attr("href");

      // Save these results in an object that we'll push into the results array we defined earlier
      results.push({
        title: title,
        link: newsURL + link
      });
    })
    console.log(newsURL);
    // console.log(response.data)
    console.log(results);

  });
});

// ***** END ROUTING *****

// Express Start on port 3000
app.listen(PORT, function () {
  console.log("App running on port: " + PORT);
});