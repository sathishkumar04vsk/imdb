var express = require("express");
var app = express();

// app.get("/", (req, res) => {
//   res.send("Hello Guvi");
// });
app.post("/", (req, res) => {
  res.send("POST method is used in guvi");
});

var PORT = app.listen(3000, () => {
  console.log("app is running successfully");
});
