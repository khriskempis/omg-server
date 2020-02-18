const express = require("express");
const morgan = require("morgan");

const app = express();

//Logging
app.use(morgan("common"));

//CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  if (req.method === "OPTIONS") {
    return res.send(204);
  }
  next();
});

app.get("/omg-api/", (req, res) => {
  return res.status(200).json({
    message: "hello from the server"
  });
});

app.use("*", (req, res) => {
  return res.status(404).json({ message: "Internal Server Error" });
});

app.listen(8080, () => {
  console.log(`your app is listening on port ${8080}`);
});
