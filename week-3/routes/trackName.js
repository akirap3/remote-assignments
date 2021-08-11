const express = require("express");
const router = express.Router();

router.all("/", (req, res) => {
  const { username } = req.body;
  if (username) {
    res.cookie("username", username);
    res.render("trackName", { username });
  } else {
    const queryname = req.query.name;
    if (queryname === undefined) {
      res.redirect("/");
    } else {
      res.redirect(`/${queryname}`);
    }
  }
});

module.exports = router;
