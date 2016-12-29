// Dependencies
// =============================================================
var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

  // Index route loads index.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "../public/index.html"));
  });

// Index1 route loads index1.html
  app.get("/index1", function(req, res) {
    res.sendFile(path.join(__dirname + "../public/index1.html"));
  });

};

