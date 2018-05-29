var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {

  // Route for saving a new survey //
  app.post('/api/survey/', function (req, res) {
    db.survey.create({
      name: req.body.name,
      activity_level: req.body.activity_level,
      barking_level: req.body.barking_level,
      good_with_kids: req.body.good_with_kids,
      good_with_dogs: req.body.good_with_dogs,
      trainability: req.body.trainability,
      shedding: req.body.shedding,
      size: req.body.size,
      hypoallergenic: req.body.hypoallergenic,
    })
      .then(function (dbsurvey) {
        res.json(dbsurvey)
      })
  })

  // GET route for getting all breeds from the breeds table
  app.get("/api/breeds", function (req, res) {
    var query = {};
    db.breed.findAll({
      where: query
    }).then(function (dbbreed) {
      res.json(dbbreed)
    })
  })

  // GET route for getting all users from users table
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });


};
