let express = require("express");
let app = express();
let port = 3000;

//endpoint 1: to whisper the name in lower case//
app.get("/whisper", (req, res) => {
  let name = req.query.name;
  let result = name.toLowerCase();
  res.send(result);
});

//endpoint 2: concatenate company name and product to get full product name//
app.get("/full-Product-Name", (req, res) => {
  let companyName = req.query.companyName;
  let productName = req.query.productName;
  let fullProductName = companyName + " " + productName;
  res.send(fullProductName);
});

//endpoint 3: to return date in a particular format from month and year//
app.get("/date", (req, res) => {
  let month = req.query.month;
  let year = req.query.year;
  let formattedDate = month + "/" + year;
  res.send(formattedDate);
});

//endpoint 4: to greet with the give city name //
app.get("/greet", (req, res) => {
  let city = req.query.city;
  let greeting = "You live in " + city;
  res.send(greeting);
});

//endpoint 5 : to return capital of a country //
app.get("/capital", (req, res) => {
  let country = req.query.country;
  let capital = req.query.capital;
  let countryCapital = capital + " is the capital of " + country;
  res.send(countryCapital);
});

//endpoint 6 : to return a formatted office email address//
app.get("/email", (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let domain = req.query.domain;
  let email = firstName + "." + lastName + "@" + domain;
  res.send(email);
});

app.listen(port, () => {
  console.log("server is running on http://localhost:", port);
});
