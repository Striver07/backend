let express = require("express");
let app = express();
let port = 3000;

//endpoint 1: To return total distance//
app.get("/total-distance", (req, res) => {
  let distance1 = parseFloat(req.query.distance1); // To convert string data type to float data type we use parseFloat/
  let distance2 = parseFloat(req.query.distance2);
  let totalDistance = distance1 + distance2;
  res.send(totalDistance.toString()); // The response must be send as string data type , so we use toString() method to convert  data type to string data type.//
});

//endpoint 2: To return total time//
app.get("/total-time", (req, res) => {
  let time1 = parseFloat(req.query.time1);
  let time2 = parseFloat(req.query.time2);
  let time3 = parseFloat(req.query.time3);
  let totalTime = time1 + time2 + time3;
  res.send(totalTime.toString());
});

//endpoint 3: To return average speed //
app.get("/average-speed", (req, res) => {
  let totalDistance = parseFloat(req.query.totalDistance);
  let totalTime = parseFloat(req.query.totalTime);
  let averagespeed = totalDistance / totalTime;
  res.send(averagespeed.toString());
});

//endpoint 4: To return estimate time of arrival from speed and distance //
app.get("/eta", (req, res) => {
  let distance = parseFloat(req.query.distance);
  let speed = parseFloat(req.query.speed);
  let eta = distance / speed;
  res.send(eta.toString());
});

//endpoint 5: To return total amount of calories burned //
app.get("/total-calories", (req, res) => {
  let duration1 = parseFloat(req.query.duration1);
  let duration2 = parseFloat(req.query.duration2);
  let caloriesPerMinute = parseFloat(req.query.caloriesPerMinute);
  let toalCalories = (duration1 + duration2) * caloriesPerMinute;
  res.send(toalCalories.toString());
});

//endpoint 6: To Return simple interest from principal, rate and time //
app.get("/interest-earned", (req, res) => {
  let principal = parseFloat(req.query.principal);
  let rate = parseFloat(req.query.rate);
  let time = parseFloat(req.query.time);
  let earnedInterest = (principal * rate * time) / 100;
  res.send(earnedInterest.toString());
});

app.listen(port, () => {
  console.log("server is running on http://localhost port: ", port);
});
