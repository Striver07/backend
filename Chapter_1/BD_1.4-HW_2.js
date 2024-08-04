let express = require("express");
const { parse } = require("path");
let app = express();
let port = 3000;

//function to generate github-profile-url for the user//
function generateProfileUrl(username) {
  return "https://github.com/" + username;
}
//endpoint 1: To take the username as a query parameter and return the github-profile-url//
app.get("/github-profile", (req, res) => {
  let username = req.query.username;
  res.send(generateProfileUrl(username));
});
//--------------------------------------------------------------//

//function 2: To generate certificate//
function generateCertificate(firstName, lastName, courseName) {
  return (
    "This certification is awarded to " +
    firstName +
    " " +
    lastName +
    " for completing " +
    courseName +
    " course"
  );
}
//endpoint 2: To take the first-name, last-name and course-name as query parameters and return a certificate message//
app.get("/certificate", (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let courseName = req.query.courseName;
  res.send(generateCertificate(firstName, lastName, courseName));
});
//--------------------------------------------------------------//

//function to return grade into percentages//
function calculateGrade(english, maths, science) {
  let gradeInPercentage = ((english + maths + science) / 300) * 100;
  return "Your Grade in percentage is " + gradeInPercentage + "%";
}
//endpoint 3: To take the marks of english, maths and science as query parameters and return the grade in percentage//
app.get("/grade", (req, res) => {
  let english = parseInt(req.query.english);
  let maths = parseInt(req.query.maths);
  let science = parseInt(req.query.science);
  res.send(calculateGrade(english, maths, science).toString());
});
//--------------------------------------------------------------//

//function to which takes the variables & splits the bill accordingly//
function splitBill(billAmount, numberOfFriends) {
  let splitAmount = billAmount / numberOfFriends;
  let result = "Each friend should pay " + splitAmount + " ₹";
  return result;
}
//endpoint 4: To take the bill-amount and number-of-friends as query parameters and return the split-amount//
app.get("/split-bill", (req, res) => {
  let billAmount = parseFloat(req.query.billAmount);
  let numberOfFriends = parseInt(req.query.numberOfFriends);
  res.send(splitBill(billAmount, numberOfFriends).toString());
});
//----------------------------------------------------------------//

//function returns monthly salary from hourly wage and no of hours worked//
function calculateSalary(totalHours, hourlyWage) {
  let monthlySalary = totalHours * hourlyWage;
  return "Your monthly salary is " + monthlySalary + " ₹";
}
//endpoint 5: To take the total hours and hourly wage as query parameters and return the monthly salary//
app.get("/monthly-salary", (req, res) => {
  let totalHours = parseFloat(req.query.totalHours);
  let hourlyWage = parseFloat(req.query.hourlyWage);
  res.send(calculateSalary(totalHours, hourlyWage).toString());
});

app.listen(port, () => {
  console.log("server is running on http://localhost: ", port);
});
