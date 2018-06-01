var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  app.get("/", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/dash");
    }
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/pets", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pets.html"));
  });

  // if a user who is not logged in tries to access these routes they will be redirected to the signup page
  app.get("/survey", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // survey answers page
  app.get("/results", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/result.html"));
  });
  
  app.get("/dash", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/dash.html"))
  })

};
