const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`
    <head>
        <meta charset="UTF-8" />
        <title>Week-3-assignment-1</title>
    </head>
    <body style="
            background-color: #487eb0;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 100vw;
            height: 100vh">

        <h1 style="
            color: white;
            background-color: #192a56;
            padding: 20px;
            border-radius: 20px"
        >Hello World!</h1>

        <p style="color: #e1b12c;
            font-size: 30px;
            font-weight: bold"
        >welcome</p>
    </body>
  `);
});

app.listen(port, () => {
  console.log(`This app is listening at http://localhost:${port}`);
});
