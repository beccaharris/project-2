var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads view.html
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // index route loads view.html
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // cms route loads cms.html
    app.get("/answer", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/answer.html"));
    });

};