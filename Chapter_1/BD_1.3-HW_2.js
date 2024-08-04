let express = require("express");
let app = express();
let port = 3000;

//endpoint 1: To calculate BMI and categorise the result into underweight, normal, overweight or obese //
app.get("/check-bmi", (req, res) => {
  let weight = req.query.weight;
  let height = req.query.height;
  let bmi = weight / (height * height);
  let result = "";
  if (bmi < 18.5) {
    res.send((result = "Underweight"));
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    res.send((result = "Normal"));
  } else if (bmi >= 25 && bmi <= 29.9) {
    res.send((result = "Overweight"));
  } else {
    res.send((result = "Obese"));
  }
  res.send(result);
});

//endpoint 2: To Calculate a student’s academic performance based on their grade//
app.get("/check-performance", (req, res) => {
  let grade = req.query.grade;
  let result = "";
  if (grade >= 90 && grade <= 100) {
    res.send("Academic Performance is excellent");
  } else if (grade >= 75 && grade <= 89) {
    res.send("Academic Performance is good");
  } else if (grade >= 50 && grade <= 74) {
    res.send("Academic Performance is average");
  } else {
    res.send("Academic Performance is poor");
  }
  res.send(result);
});

//endpoint 3: To Calculate a person’s age group given their age//
app.get("/check-age-group", (req, res) => {
  let age = req.query.age;
  let result = "";
  if (age >= 0 && age <= 12) {
    res.send("Age group is child");
  } else if (age >= 13 && age <= 17) {
    res.send("Age group is teenager");
  } else if (age >= 18 && age <= 64) {
    res.send("Age group is adult");
  } else {
    res.send("Age group is senior-citizen");
  }
  res.send(result);
});

//endpoint 4: Calculate a person’s loan eligibility given creditScore//
app.get("/check-loan-eligibility", (req, res) => {
  let creditScore = req.query.creditScore;
  let result = "";
  if (creditScore >= 750 && creditScore <= 1000) {
    res.send("Loan Eligibilty is High");
  } else if (creditScore >= 650 && creditScore <= 749) {
    res.send("Loan Eligibilty is Medium");
  } else if (creditScore <= 649) {
    res.send("Loan Eligibilty is Low");
  } else {
    res.send((result = "Invalid Credit Score"));
  }
});

//endpoint 5: To return person’s income calculate the tax bracket they fall in//
app.get("/check-tax-bracket", (req, res) => {
  let income = req.query.income;
  let result = "";
  if (income >= 0 && income <= 500000) {
    res.send("You Fall Under the 10% Tax Bracket");
  } else if (income >= 500001 && income <= 1000000) {
    res.send("You Fall Under the 15% Tax Bracket");
  } else if (income >= 1000001 && income <= 1500000) {
    res.send("You Fall Under the 20% Tax Bracket");
  } else {
    res.send("You Fall Under the 30% Tax Bracket");
  }
  res.send(result);
});

app.listen(port, () => {
  console.log("server is running on http://localhost:", port);
});
