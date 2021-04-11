/* basic ILM server */

// variable|constant declatations
const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
const PORT = process.env.PORT || 8080;

//middleware
app.use("/static", express.static("public"));

//routes
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

//add the router
app.use("/", router);
// listen
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
