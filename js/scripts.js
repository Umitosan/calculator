var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var devide = function(number1, number2) {
  return number1 / number2;
};

var userNumber1 = parseInt(prompt("Enter a number:"));
var userNumber2 = parseInt(prompt("Enter another number:"));

alert(devide(userNumber1, userNumber2));
