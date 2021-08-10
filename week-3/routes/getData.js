const express = require("express");
const router = express.Router();

const isPositiveInt = (n) => {
  return n > 0 && n % 1 === 0;
};

router.get("/", (req, res, next) => {
  let message = "";
  const { number } = req.query;
  let newNumber = Number(number);
  if (number) {
    if (!newNumber || !isPositiveInt(number)) {
      message = "Wrong Parameter";
      res.render("getData", { message });
    } else {
      let result = 0;
      for (let i = 1; i <= number; i++) {
        result += i;
      }
      message = result;
      res.render("getData", { message });
    }
  } else {
    message = "Lack of Parameter";
    res.render("getData", { message });
  }
});

module.exports = router;
