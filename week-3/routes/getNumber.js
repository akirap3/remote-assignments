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
      res.json({ message });
    } else {
      let result = 0;
      for (let i = 1; i <= number; i++) {
        result += i;
      }
      console.log(result);
      res.json({ message: result });
    }
  } else {
    message = "Lack of Parameter";
    res.json({ message });
  }
});

module.exports = router;
