let express = require("express");
let app = express();
let port = 3000;

//endpoint 1: To return total marks from given marks//
app.get("/total-marks", (req, res) => {
  let marks1 = parseFloat(req.query.marks1);
  let marks2 = parseFloat(req.query.marks2);
  let totalMarks = marks1 + marks2;
  res.send(totalMarks.toString());
});

//endpoint 2: To return total weight  in a shipment//
app.get("/total-weight", (req, res) => {
  let weight1 = parseFloat(req.query.weight1);
  let weight2 = parseFloat(req.query.weight2);
  let weight3 = parseFloat(req.query.weight3);
  let totalWeight = weight1 + weight2 + weight3;
  res.send(totalWeight.toString());
});

//endpoint 3: To return monthly salary from annual salary//
app.get("/monthly-salary", (req, res) => {
  let annualSalary = parseFloat(req.query.annualSalary);
  let monthlySalary = annualSalary / 12;
  res.send(monthlySalary.toString());
});

//endpoint 4: To return total  number of pages read //
app.get("/total-pages", (req, res) => {
  let pagesPerDay = parseFloat(req.query.pagesPerDay);
  let days = parseFloat(req.query.days);
  let totalPages = pagesPerDay * days;
  res.send(totalPages.toString());
});

//endpoint 5: To convert one currency into another  with the help of exchange rate//
app.get("/currency-conversion", (req, res) => {
  let amount = parseFloat(req.query.amount);
  let exchangeRate = parseFloat(req.query.exchangeRate);
  let convertedAmount = amount * exchangeRate;
  res.send(convertedAmount.toString());
});

//endpoint 6: To return average sales //
app.get("/average-sales", (req, res) => {
  let sales1 = parseFloat(req.query.sales1);
  let sales2 = parseFloat(req.query.sales2);
  let sales3 = parseFloat(req.query.sales3);
  let averageSale = (sales1 + sales2 + sales3) / 3;
  res.send(averageSale.toString());
});

app.listen(port, () => {
  console.log("server is running on http://localhost port: ", port);
});
