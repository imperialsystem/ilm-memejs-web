// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================

const path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // handlebars routers --------------

  app.get("/", function (req, res) {
    res.render("index");
  });

  app.get("/about", function (req, res) {
    res.render("about");
  });

  app.get("/apu", function (req, res) {
    res.render("apupage");
  });

  app.get("/sadcats", function (req, res) {
    res.render("sadcats");
  });

  app.get("/contact", function (req, res) {
    res.render("contact");
  });

  // HTML GET Requests ----------------------

  app.get("/index", function (req, res) {
    res.sendFile(path.join(__dirname + "/../viewers/index.html"));
    //__dirname : It will resolve to your project folder.
  });

  app.get("/test", function (req, res) {
    res.sendFile(path.join(__dirname + "/../viewers/testpage.html"));
  });

  /* // old html routers
  app.get("/about", function (req, res) {
    res.sendFile(path.join(__dirname + "/../viewers/about.html"));
  });

  app.get("/apu", function (req, res) {
    res.sendFile(path.join(__dirname + "/../viewers/apupage.html"));
  });

  app.get("/contact", function (req, res) {
    res.sendFile(path.join(__dirname + "/../viewers/contact.html"));
  });

  app.get("/sadcats", function (req, res) {
    res.sendFile(path.join(__dirname + "/../viewers/sadcats.html"));
  });

  // If no matching route is found default to home
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../viewers/fourohfour.html"));
  }); */

  // catch all for non-routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
