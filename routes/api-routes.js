var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {

  // Route for saving a new survey //
  app.post('/api/survey/', function (req, res) {
    db.Survey.create({
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
      .then(function (dbSurvey) {
        res.json(dbSurvey)
      })
  })

  // GET route for getting all breeds from the breeds table
  app.get("/api/breeds", function (req, res) {
    var query = {};
    db.Breed.findAll({
      where: query
    }).then(function (dbBreed) {
      res.json(dbBreed)
    })
  })

};
