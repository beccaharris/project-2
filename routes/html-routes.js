// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  app.get("/", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/survey");
    }
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/survey", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // survey answers page
  app.get("/answer", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/answer.html"));
  });

};
