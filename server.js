// Dependencies
// =============================================================
var express = require("express");

var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  
  res.sendFile(path.join(__dirname, "flightstats.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
