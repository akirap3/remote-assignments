const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const router = express.Router();
const indexRoutes = require("./routes");
const getDataRoutes = require("./routes/getData");
const trackNameRoutes = require("./routes/trackName");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use("/", express.static("public"));

// if there is route mismatch, please adjusty the sequence of routes
app.use(router);
app.use("/trackName", trackNameRoutes);
app.use("/", indexRoutes);
app.use("/getData", getDataRoutes);

app.use((req, res, next) => {
  const err = new Error("Not found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render("error", err);
});

app.listen(port, () => {
  console.log(`This app is listening at http://localhost:${port}`);
});

module.exports = app;
