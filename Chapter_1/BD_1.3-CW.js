let express = require("express");
let app = express();
let port = 3000;

//endpoint 1: To check number is positive or negative//
app.get("/check-number", (req, res) => {
  let number = parseInt(req.query.number);
  let result = "";
  if (number >= 0) {
    res.send("Positive Number");
  } else {
    res.send("Negative number");
  }
  res.send(result);
});

// endpoint 2: To check number is odd or even//
app.get("/check-even-odd", (req, res) => {
  let number = parseInt(req.query.number);
  let result = "";
  if (number % 2 == 0) {
    res.send("Even Number");
  } else {
    res.send("Odd number");
  }
  res.send(result);
});

//endpoint 3: To check if the user is logged in or out//
app.get("/check-login", (req, res) => {
  let isLoggedIn = req.query.isLoggedIn;
  let result = "";
  if (isLoggedIn === "true") {
    res.send("user is logged in");
  } else {
    res.send("user is logged out");
  }
  res.send(result);
});

//endpoint 4: To check if the user is available for discount//
app.get("/check-discount", (req, res) => {
  let age = req.query.age;
  let result = "";
  if (age > 65) {
    res.send("User is eligible for disocunt");
  } else {
    res.send("user is not eligible for discount");
  }
  res.send(result);
});

//endpoint 5: To check if a number is postive, negative or zero//
app.get("/check-number-type", (req, res) => {
  let number = req.query.number;
  let result = "";
  if (number < 0) {
    res.send("Number is negative");
  } else if (number > 0) {
    res.send("Number is positive");
  } else {
    res.send("Number is zero");
  }
  res.send(result);
});

//endpoint 6:  To check whether the temperature is warm , cold or hot//
app.get("/check-temperature", (req, res) => {
  let temperature = req.query.temperature;
  let result = "";
  if (temperature < 15) {
    res.send("temperature is cold");
  } else if (temperature <= 25) {
    res.send("temperature is warm");
  } else {
    res.send("temperature is hot");
  }
  res.send(result);
});

//endpoint 7: To check if the users activity is low , moderate or high based on steps walked//
app.get("/check-activity-level", (req, res) => {
  let steps = req.query.steps;
  let result = "";
  if (steps < 5000) {
    res.send("Activity is low");
  } else if (steps <= 10000) {
    res.send("Activity is moderate");
  } else {
    res.send("Activity is high");
  }
  res.send(result);
});

//endpoint 8: To check if social media post has low, moderate or high engagement based on number of likes //
app.get("/check-engagement", (req, res) => {
  let likes = req.query.likes;
  let result = "";
  if (likes < 100) {
    res.send("Engagement level is low");
  } else if (likes <= 500) {
    res.send("Engagement level is moderate");
  } else {
    res.send("Engagement level is high");
  }
  res.send(result);
});

app.listen(port, () => {
  console.log("server is running on http://localhost port: ", port);
});
