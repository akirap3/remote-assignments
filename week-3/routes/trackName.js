const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const username = req.cookies.username;
  const queryname = req.query.name;
  if (username) {
    if (username === queryname) {
      res.render("trackName", { username });
    } else {
      res.render("trackName", { queryname, username });
    }
  } else {
    res.render("index");
  }
});

router.post("/", (req, res) => {
  const { username } = req.body;
  if (username) {
    res.cookie("username", username);
    res.render("trackName", { username });
  } else {
    res.render("index");
  }
});

module.exports = router;
