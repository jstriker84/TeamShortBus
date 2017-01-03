
// Dependencies
var path = require("path");

// Routes
module.exports = function(app) {

	// Index route 
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname + "./../public/index.html"));
	});

	// Survey route loads index1.html
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname + "./../public/survey.html"));
	});

	// Index1 route loads index1.html
	app.get("/page3", function(req, res) {
		res.sendFile(path.join(__dirname + "./../public/page3.html"));
	});  

	// Index1 route loads index1.html
	app.get("/home", function(req, res) {
		res.sendFile(path.join(__dirname + "./../public/index.html"));
	});  	

};

