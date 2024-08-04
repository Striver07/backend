let express = require("express");
let app = express();
let port = 3000;

//function to welcome the user by  a message//
function getWelcomeMessage() {
  return "welcome to our service!";
}
//endpoint 1:  Returns a welcome message//
app.get("/welcome", (req, res) => {
  res.send(getWelcomeMessage());
});
//-----------------------------------------------------------//

//function to return a greeting message//
function getGreetingMessage(username) {
  return "Hello " + username + "!";
}
//endpoint 2: Take a username and return a greeting message//
app.get("/greet", (req, res) => {
  let username = req.query.username;
  res.send(getGreetingMessage(username));
});
//----------------------------------------------------------//

//Function for checking the strength of password//
function checkPasswordStrength(password) {
  if (password.length > 15) {
    return password + " is strong";
  } else {
    return password + " is weak";
  }
}
//endpoint 3: Take a password and return a strength message//
app.get("/check-password", (req, res) => {
  let password = req.query.password;
  res.send(checkPasswordStrength(password));
});
//-------------------------------------------------------------//

//Function for returning the sum of given numbers//
function getSum(num1, num2) {
  return num1 + num2;
}
//endpoint 4: Take two numbers and return their sum//
app.get("/sum", (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  res.send(getSum(num1, num2).toString());
});
//-------------------------------------------------------------//

//Function for returning the status of subscriber as subscribed or not//
function getSubscriptionStatus(username, isSubscribed) {
  if (isSubscribed === "true") {
    return username + " is subscribed";
  } else {
    return username + " is not subscribed";
  }
}
//endpoint 5: To check the subscription status of a user//
app.get("/subscription-status", (req, res) => {
  let username = req.query.username;
  let isSubscribed = req.query.isSubscribed;
  res.send(getSubscriptionStatus(username, isSubscribed));
});
//-------------------------------------------------------------------------//

//Function for returning the final price of an item after applying discount//
function getDiscountprice(price, discount) {
  return price - price * (discount / 100);
}
//endpoint 6: To calculate the final price of an item after applying discount//
app.get("/discounted-price", (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  res.send(getDiscountprice(price, discount).toString());
});
//-------------------------------------------------------------------------//

//Function to return a custom geeting to a user from name, age and gender as input//
function getPersonalizedGreeting(name, age, gender) {
  return (
    "Hello " + name + "!" + " You are a " + age + " year old " + gender + " . "
  );
}
//endpoint 7: To return a custom greeting to a user from name, age and gender as input//
app.get("/personalized-greeting", (req, res) => {
  let name = req.query.name;
  let age = req.query.age;
  let gender = req.query.gender;
  res.send(getPersonalizedGreeting(name, age, gender));
});
//---------------------------------------------------------------------------//

//Function to return final price after applying discount and tax//{
function getFinalPrice(price, discount, tax) {
  let discountedPrice = price - (price * discount) / 100;
  return discountedPrice + (discountedPrice * tax) / 100;
}
//endpoint 8: To return the final price after applying discount and tax//
app.get("/final-price", (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  let tax = parseFloat(req.query.tax);
  res.send(getFinalPrice(price, discount, tax).toString());
});
//---------------------------------------------------------------------------//

//Function to return total exercise time//
function getTotalExerciseTime(running, cycling, swimming) {
  return running + cycling + swimming;
}
//endpoint 9: To take three fitness activity durations (running, cycling, swimming) and return the total exercise time.//
app.get("/total-exercise-time", (req, res) => {
  let running = parseFloat(req.query.running);
  let cycling = parseFloat(req.query.cycling);
  let swimming = parseFloat(req.query.swimming);
  res.send(getTotalExerciseTime(running, cycling, swimming).toString());
});
//------------------------------------------------------------------------------//

app.listen(port, () => {
  console.log("server is running on http://localhost: ", port);
});
