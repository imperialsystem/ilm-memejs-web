/* hardcore ILM server */
//require("dotenv").config();

//declatations
const express = require("express");
const app = express();
//const path = require("path");
const router = express.Router();
const createError = require("http-errors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
//const bodyParser = require("body-parser");
//const exphbs = require("express-handlebars");
//const session = require("express-session");
// Requiring passport as we've configured it
//const passport = require("./config/passport");
//const db = require("./models");

//middleware
app.use("/static", express.static("public"));

// Handlebars
/*app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");*/

//view engine stuff
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//add the router
app.use("/", router);
app.listen(process.env.port || 3000);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
