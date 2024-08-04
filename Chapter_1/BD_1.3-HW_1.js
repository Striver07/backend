let express = require("express");
let app = express();
let port = 3000;

//endpoint 1: To check whole number or not//
app.get("/check-whole-number", (req, res) => {
  let number = parseInt(req.query.number);
  let result = "";
  if (number >= 0) {
    res.send("Number is a whole number");
  } else {
    res.send("Number is not a whole number");
  }
  res.send(result);
});

// endpoint 2: To check numbers are equal or not//
app.get("/check-equal", (req, res) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);
  let result = "";
  if (num1 === num2) {
    res.send("Numbers are equal");
  } else {
    res.send("Numbers are not equal");
  }
  res.send(result);
});

//endpoint 3: To check if the user is logged in or out//
app.get("/check-active", (req, res) => {
  let isActive = req.query.isActive;
  let result = "";
  if (isActive === "true") {
    res.send("user is active");
  } else {
    res.send("user is inactive");
  }
  res.send(result);
});

//endpoint 4: To check if the user is available for discount based on the cost which has to be more than 1000//
app.get("/check-discount", (req, res) => {
  let cost = parseFloat(req.query.cost);
  let result = "";
  if (cost > 1000) {
    res.send("User is eligible for disocunt");
  } else {
    res.send("user is not eligible for discount");
  }
  res.send(result);
});

//endpoint 5: To check the working experience of a person//
app.get("/check-experience", (req, res) => {
  let workExperience = parseFloat(req.query.workExperience);
  let result = "";
  if (workExperience < 0) {
    res.send("Person is not working");
  } else if (workExperience > 0) {
    res.send("Person is experienced");
  } else {
    res.send("Person is a fresher");
  }
  res.send(result);
});

//endpoint 6:  Check if the results are in Grade A(more than 80) , Grade B(between 50 and 80) or Grade F(fail)//
app.get("/check-result", (req, res) => {
  let result = req.query.result;
  let grade = "";
  if (result > 80) {
    res.send("The grade is 80");
  } else if (result >= 50) {
    res.send("The grade is B");
  } else {
    res.send("The grade is F");
  }
  res.send(grade);
});

//endpoint 7: //Check if the attendance of class is low(less than 50) , moderate(between 50 and 90) or High(more than 90)//
app.get("/check-attendance", (req, res) => {
  let attendance = req.query.attendance;
  let result = "";
  if (attendance < 50) {
    res.send("Attendance is low");
  } else if (attendance <= 90) {
    res.send("Attendance is moderate");
  } else {
    res.send("Attendance is high");
  }
  res.send(result);
});

//endpoint 8: To check if the rating of a restaurant is low(less than 3*) , medium(less than 4*) or high (more than 4*)  //
app.get("/check-rating", (req, res) => {
  let stars = req.query.stars;
  let result = "";
  if (stars < 3) {
    res.send("Restaurant rating is low");
  } else if (stars <= 4) {
    res.send("Restaurant Rating is moderate");
  } else {
    res.send("Restaurant rating is high");
  }
  res.send(result);
});

app.listen(port, () => {
  console.log("server is running on http://localhost port: ", port);
});
