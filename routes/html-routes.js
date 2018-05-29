var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  app.get("/", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/survey");
    }
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/pets", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pets.html"));
  });

  // if a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/survey", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // survey answers page
  app.get("/answer", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/answer.html"));
  });

};
