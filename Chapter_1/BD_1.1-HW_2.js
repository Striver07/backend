let express = require("express");
let app = express();
let port = 3000;

//endpoint 1: to send a custom commit  mesaage //
app.get("/custom-commit", (req, res) => {
  let type = req.query.type;
  let message = req.query.message;
  let result = type + ": " + message;
  res.send(result);
});

// endpoint 2: Generate Certificate//
app.get("/certificate", (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let courseName = req.query.courseName;
  let result =
    "This certification is awarded to " +
    firstName +
    " " +
    lastName +
    " for completing the course " +
    courseName;
  res.send(result);
});

//endpoint 3: To send automated custom messages //
app.get("/autoreply", (req, res) => {
  let startMonth = req.query.startMonth;
  let endMonth = req.query.endMonth;
  let result =
    "Dear customer, thank you for reaching out to me. Unfortunately, I'm out of office from " +
    startMonth +
    " to " +
    endMonth +
    ". Your enquiry will be resolved by another colleague.";
  res.send(result);
});

//endpoint 4: To return a secure url//
app.get("/secureurl", (req, res) => {
  let domain = req.query.domain;
  let result = "https://" + domain;
  res.send(result);
});

//endpoint 5: To send OTP//
app.get("/sendotp", (req, res) => {
  let otpCode = req.query.otpCode;
  let result =
    "Your OTP for account verification is " +
    otpCode +
    " Do not share this with anyone.";
  res.send(result);
});

//endpoint 6: To send a welcome mail to the user//
app.get("/welcome", (req, res) => {
  let firstName = req.query.firstName;
  let email = req.query.email;
  let message =
    "Hey " +
    firstName +
    " .We're excited to have you here, we'll send future notifications to your registered mail id" +
    " (" +
    email +
    ")";
  res.send(message);
});

//endpoint 7: Return a Github Profile//
app.get("/github-profile", (req, res) => {
  let userName = req.query.userName;
  let result = "https://github.com/" + userName;
  res.send(result);
});

//endpoint 8: To return text into a csv format
app.get("/text-to-csv", (req, res) => {
  let id = req.query.id;
  let email = req.query.email;
  let rollNumber = req.query.rollNumber;
  let result = id + "," + email + "," + rollNumber;
  res.send(result);
});

app.listen(port, () => {
  console.log("server is running on http://localhost:", port);
});
