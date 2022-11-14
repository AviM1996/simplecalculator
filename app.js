const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extends: true }));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "./index.html");
});
app.post("/", function (req, res) {
  const num1 = req.body.n1;
  const num2 = req.body.n2;
  const result = num1 + num2;
  res.send("The value is " + result);
});
app.listen(4000, function () {
  console.log("server started on port at 3000");
});
