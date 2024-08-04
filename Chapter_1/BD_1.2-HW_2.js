let express = require("express");
let app = express();
let port = 3000;

//endpoint 1 : To calculate BMI //
app.get("/bmi", (req, res) => {
  let height = parseFloat(req.query.height);
  let weight = parseFloat(req.query.weight);
  let bmi = weight / (height * height);
  res.send(bmi.toString());
});

// endpoint 2 : To calculate total price of Grocery//
app.get("/checkout", (req, res) => {
  let product = req.query.product;
  let units = parseInt(req.query.units);
  let price = parseFloat(req.query.price);
  let totalPrice = units * price;
  let message =
    "your total price for " + units + " " + product + " is " + totalPrice;
  res.send(message.toString());
});

//endpoint 3 : To calculate Grade Percentage//
app.get("/grade", (req, res) => {
  let maths = parseInt(req.query.maths);
  let science = parseInt(req.query.science);
  let english = parseInt(req.query.english);
  let gradeInPercent = parseInt(((maths + science + english) / 300) * 100);
  let message = "your grade in percentage is " + gradeInPercent + "%";
  res.send(message.toString());
});

//endpoint 4: Return Bill Amount after applyind Discount//
app.get("/discounted-price", (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let discount = parseFloat(req.query.discount);
  let discountedPrice = cartTotal - (cartTotal * discount) / 100;
  let message = "your discounted price is " + discountedPrice;
  res.send(message.toString());
});

//endpoint 5: Spilt bill among friends//
app.get("/split-bill", (req, res) => {
  let billAmount = parseFloat(req.query.billAmount);
  let numberOfFriends = parseFloat(req.query.numberOfFriends);
  let splitAmount = billAmount / numberOfFriends;
  let message = "Each Friend owes  " + splitAmount + "₹" + " against the bill";
  res.send(message.toString());
});

//endpoint 6: Convert celsius to fahrenheit//
app.get("/celsius-to-fahrenheit", (req, res) => {
  let temperature = parseFloat(req.query.temperature);
  let fahrenheit = (temperature * 9) / 5 + 32;
  res.send("Result: " + fahrenheit.toString() + " Fahrenheit");
});

//endpoint 7: Calculate monthly salary//
app.get("/monthly-salary", (req, res) => {
  let totalHours = parseFloat(req.query.totalHours);
  let hourlyWage = parseFloat(req.query.hourlyWage);
  let monthlySalary = totalHours * hourlyWage;
  res.send("Your Monthly Salary is " + monthlySalary.toString() + "₹");
});

app.listen(port, () => {
  console.log("server is running on http://localhost port: ", port);
});
