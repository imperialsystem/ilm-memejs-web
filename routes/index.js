var express = require("express");
var router = express.Router();
const path = require("path");

// start routes
router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/../viewers/index.html"));
  //__dirname : It will resolve to your project folder.
});

router.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname + "/../viewers/about.html"));
});

router.get("/test", function (req, res) {
  res.sendFile(path.join(__dirname + "/../viewers/testpage.html"));
});

router.get("/apu", function (req, res) {
  res.sendFile(path.join(__dirname + "/../viewers/apupage.html"));
});

router.get("/contact", function (req, res) {
  res.sendFile(path.join(__dirname + "/../viewers/contact.html"));
});

router.get("/sadcats", function (req, res) {
  res.sendFile(path.join(__dirname + "/../viewers/sadcats.html"));
});
// end routes

module.exports = router;
