const bodyParser = require("body-parser"),
      express    = require("express"),
      app        = express(),
      session    = require("express-session"),
      passport   = require("passport"),
      PORT       = process.env.PORT || 8080,
      //Requiring models folder for syncing //
      db         = require("./models");

// bodyparser //
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// static directory //
app.use(express.static("public"));

// passport //
app.use(session({ 
  secret: 'keyboard cat', 
  resave: true, 
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// import routes //
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// syncing sequelize models & starting our Express app //
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
