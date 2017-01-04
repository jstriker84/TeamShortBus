
// a set of routes for getting and saving data to the db

// Requiring our models
var db = require("./../models");

// Routes
module.exports = function(app) {

  // Get all destinations
  app.get("/api/findDest", function(req, res) {
    db.Destination.findAll({})
    .then(function(dbDest) {
      res.json(dbDest);
      console.log(dbDest)
    });
  }); // end .get

  /*possible later functionality
  // Add a destination
  // Update destinations
  */

  // Add a review
  app.post("/api/newReview", function(req, res) {
    console.log("reviews Data:");
    console.log(req.body);
    console.log(req.body.review);
    db.Review.create({
      review: req.body.review,
    })
    .then(function(dbReview) {
      res.json(dbReview);
    });
  });  // end .post

}; //end module exports








