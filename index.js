// MAIN SERVER FILE

//Main requirements for express and mongo
const express = require("express");
const mongojs - require("mongojs");

const app = express();

app.use(express.static("public"));

// DATABASE SETUP
// variable setup
let databaseUrl = "news";
let collections = ["articles"];
let db = mongojs(databaseUrl, collections);
// Check for errors
db.on("error", function(error) {
  console.log("Database Error:", error);
});



// Express Start on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});