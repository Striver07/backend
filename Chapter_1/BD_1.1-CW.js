let express = require("express");
let app = express();
let port = 3000;

//endpoint 1: To shout name in upper case//
app.get("/shout", (req, res) => {
  let myName = req.query.name.toUpperCase();
  res.send(myName);
});

//endpoint 2: Concatenate first and last name//
app.get("/fullname", (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let fullName = firstName + " " + lastName;
  res.send(fullName);
});

//endpoint 3: To return date in a format from month and year//
app.get("/date", (req, res) => {
  let month = req.query.month;
  let year = req.query.year;
  let Formatteddate = month + " " + year;
  res.send(Formatteddate);
});

//endpoint 4: To greet the user in a particular format//
app.get("/greet", (req, res) => {
  let name = req.query.name;
  let greeting = "Namaste" + "," + name + "!";
  res.send(greeting);
});

//endpoint 5: To return the Address in a particular format//
app.get("/Address", (req, res) => {
  let street = req.query.street;
  let city = req.query.city;
  let state = req.query.state;
  let FormattedAddress = street + "," + city + "," + state;
  res.send(FormattedAddress);
});

//endpoint 6: To return email id from user name and domain//
app.get("/email", (req, res) => {
  let username = req.query.username;
  let domain = req.query.domain;
  let email = username + "@" + domain;
  res.send(email);
});

app.listen(port, () => {
  console.log("server is running on http;//localhost:", port);
});
