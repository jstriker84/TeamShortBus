// Dependencies - destinations table
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all destinations
  app.get("/api/destination", function(req, res) {

    var dbQuery = "SELECT * FROM destinations";

    connection.query(dbQuery, function(err, result) {
      res.json(result);

//put 'matching' for loops in /public/js/etc

    });

  });

  /*
  // Add a destination
  app.post("/api/newDest", function(req, res) {

    console.log("Destination Data:");
    console.log(req.body);

    var dbQuery = "INSERT INTO destinations (author, body, created_at) VALUES (?,?,?)";

    connection.query(dbQuery, [req.body.author, req.body.body, req.body.created_at], function(err, result) {
      console.log("Destination Successfully Saved!");
      res.end();
    });

  });
*/

};

// Dependencies - reviews table
// =============================================================
var Review = require("../models/reviews.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get("/api/reviews", function(req, res) {

    // Finding all Chirps,
    
    Review.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });

  });

  // Add a reviews
  app.post("/api/newReview", function(req, res) {

    console.log("reviews Data:");
    console.log(req.body);

    Review.create({
      reviews: req.body.review,
      created_at: req.body.created_at
    }).then(function(results) {
      // `results` here would be the newly created reviews
      res.end();
    });

  });

};
