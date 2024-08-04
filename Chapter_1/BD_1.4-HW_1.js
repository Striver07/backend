let express = require("express");
let app = express();
let port = 3000;

//function to return the welcome message//
function getWelcomeMessage() {
  return "we will now learn functions!";
}
//endpoint 1: To return returns a welcome message to a student who wants to learn functions//
app.get("/welcome", (req, res) => {
  res.send(getWelcomeMessage());
});
//-----------------------------------------------------------//

//function to return greeting//
function getGreetingMessage(username) {
  return (
    "Hello " + username + "!" + " Are you ready to learn functions with us?"
  );
}
//endpoint 2: To take a username and return a greeting message//
app.get("/greet", (req, res) => {
  let username = req.query.username;
  res.send(getGreetingMessage(username));
});
//----------------------------------------------------------//

//function to determine the person's experience//
function checkYearsOfExperience(yearsOfExperience) {
  if (yearsOfExperience > 0) {
    return "You have some experience with functions. Great!";
  } else {
    return "No worries,you will learn functions in no time!";
  }
}
//endpoint 3: takes the number of yearsOfExp in functions as a query parameter and returns a message indicating the person's experience.//
app.get("/message", (req, res) => {
  let yearsOfExperience = parseFloat(req.query.yearsOfExperience);
  res.send(checkYearsOfExperience(yearsOfExperience).toString());
});
//-------------------------------------------------------------//

//function to calculate total no. of hours available per week//
function gettime(days, hours) {
  return days * hours;
}
//endpoint 4: To take the number of days and hours per day as query parameters and return the total no. of hours available per week//
app.get("/hours", (req, res) => {
  let days = parseFloat(req.query.days);
  let hours = parseFloat(req.query.hours);
  res.send(gettime(days, hours).toString());
});
//-------------------------------------------------------------//

//function to check if the user has completed the module//
function getModuleCompletion(username, hasCompleted) {
  if (hasCompleted === "true") {
    return username + " has completed the module";
  } else {
    return username + " has not completed the module";
  }
}
//endpoint 5: To take the username and isModuleCompleted as query parameters and return a message indicating whether the user has completed the module//
app.get("/module-completion-status", (req, res) => {
  let username = req.query.username;
  let hasCompleted = req.query.hasCompleted;
  res.send(getModuleCompletion(username, hasCompleted).toString());
});
//-------------------------------------------------------------//

//function to return greeting message //
function getPersonalizedGreeting(name, city) {
  return "Hey, " + name + "! " + "What's famous about your " + city + "?";
}
//endpoint 6: To take the name and city as query parameters and return a personalised greeting message//
app.get("/personalized-message", (req, res) => {
  let name = req.query.name;
  let city = req.query.city;
  res.send(getPersonalizedGreeting(name, city));
});
//--------------------------------------------------------------//

//function to find age from birth-Year//
function getAge(birthYear, currentYear) {
  let age = currentYear - birthYear;
  return age;
}
//endpoint 7: To take the birth-date as a query parameter and return the age//
app.get("/get-age", (req, res) => {
  let birthYear = parseFloat(req.query.birthYear);
  let currentYear = parseFloat(req.query.currentYear);
  res.send(getAge(birthYear, currentYear).toString());
});
//--------------------------------------------------------------//

//function to calculate the total no of hours allotted per week sufficient to complete functions or note//
function findRequiredTime(days, hours) {
  let hoursPerWeek = days * hours;
  if (hoursPerWeek >= 30) {
    return "The time being dedicated is sufficient for learning functions";
  } else {
    return "The time being dedicated is insufficient for learning functions";
  }
}
//endpoint 8: To take the number of days and hours per day as query parameters and return a message indicating whether the time is sufficient to complete the topic//
app.get("/is-time-sufficient", (req, res) => {
  let days = parseFloat(req.query.days);
  let hours = parseFloat(req.query.hours);
  res.send(findRequiredTime(days, hours).toString());
});
//--------------------------------------------------------------//

app.listen(port, () => {
  console.log("server is running on http://localhost: ", port);
});
