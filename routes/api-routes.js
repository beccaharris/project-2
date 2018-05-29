// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {
   
    // ============= //
    // SURVEY ROUTES //
    // ============= //

    
    // ================== //
    // PASSPORT.JS Routes //
    // ================== //

    // Route for logging user in //
    app.post("/api/login", passport.authenticate("local"), function (req, res) {
      res.json("/survey");
    });

    // Route for signing up user //
    app.post("/api/signup", function (req, res) {
      db.user.create({
        email: req.body.email,
        password: req.body.password
      }).then(function () {
        res.redirect(307, "/api/login");
      }).catch(function (err) {
        console.log(err);
        res.json(err);
      });
    });

    // Route for logging user out //
    app.get("/logout", function (req, res) {
      req.logout();
      res.redirect("/");
    });

    // Route for getting some data about our user to be used client side
    app.get("/api/user_data", function (req, res) {
      if (!req.user) {
        res.json({});
      }
      else {
        res.json({
          email: req.user.email,
          id: req.user.id
        });
      }
    });

  };
