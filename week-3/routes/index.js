const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const username = req.cookies.username;
  if (username) {
    res.render("trackName", { username });
  } else {
    res.render("index");
  }
});

router.get("/:name", (req, res) => {
  const username = req.cookies.username;
  const queryname = req.params.name;

  if (!username) {
    res.render("index");
  } else if (queryname === username) {
    res.render("trackName", { username });
  } else {
    res.render("trackName", { queryname, username });
  }
});

router.post("/logout", (req, res) => {
  res.clearCookie("username");
  res.redirect("/");
});

module.exports = router;
