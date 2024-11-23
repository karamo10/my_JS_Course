// Number Methods and properties

let x;

const num = new Number(5);

console.log(num); // output "Number {5}"
console.log(typeof num); // output "object"

/* 'syntax' num.toString() */
x = num.toString(); /* Converting the number to string */
// output "5"  

// NUMBER length
/* This how you check the length or digits of a number */
/* 'syntax' num.toString().length */
x = num.toString().length; // output "1"

/* 'syntax' num.toFixed() */
x = num.toFixed(2); // output "5.00" typeOf "string"
// Note: If you use a NUMBER and add toFixed() on it, It changes it type to string
console.log(x);

const numFixed = 5.587;
x = numFixed.toFixed(2); // output "5.59" here it round-up and add one to take one from 7 and add it to 8 and that's make the 8 + 1 = 9

/* 'syntax' num.toPrecision() */
// let say num = 5.4227;
x = num.toPrecision(3); // output "5.42"

/* 'syntax' num.toExponential() */
x = num.toExponential(2) // output 5.00e+0

/* 'syntax' num.toLocaleString() */
x = num.toLocaleString('ar-EG');

x = num.valueOf()

// Number Methods
x = Number.MAX_VALUE;
x = Number.MIN_VALUE;
console.log(x);


// Example of Number Methods

/* 1: ****** .toString()   ******* */
// The toString() method in JavaScript is used to convert a number into a string. As we learn it in type convertion. This is particularly helpful when you need to work with numbers as text for instance, when combining them with other strings or displaying them on a webpage.

// eg 1
let number = 1234;
console.log(number, typeof number); // output 1234, typeOf number
numToString = number.toString();
console.log(numToString, typeof numToString); // output "1234", typeOf "string"

// eg 2 
/* Displaying Information in a User Interface:
If you're showing data on a webpage (e.g., product prices, scores, dates), you often need to convert numbers to strings. For instance, when concatenating a number with other text, toString() helps you avoid errors by ensuring everything is in the same format. */
let score = 95;
let message = `Your score is: ${score.toString()}`
console.log(message); // output Your score is: 95

// eg 3
/* Displaying Dynamic Prices or Discounted Values
If you're building an e-commerce site, you’ll likely need to display prices and discounts, which often come from a variable or a calculation. toString() ensures that these values are displayed correctly when combined with other text. */
let price = 199.99;
let discount = 0.2;
let discountPrice = price - (price * discount);
let priceDiscount = `The original price is $${price.toString()} and after a 20% discount, the price is $${discountPrice.toString()}`;
console.log(priceDiscount);

// eg 4 
let myPrice = 2000;
let myDis = 0.2;
let myDisPrie = myPrice - (myPrice * myDis);
console.log(`THe original price is $${myPrice.toString()} and after a 20% discount, the price is $${myDisPrie.toString()}`);

// eg 5
// Creating Interactive User Feedback
// If you're building a quiz or a scoring system, you'll need to dynamically update the score or feedback message. toString() helps format these numbers when you present them to the user.
let currentScore = 8;
let totalScore = 10;
let feedback = `You scored ${currentScore.toString()} out of ${totalScore.toString()}`;
console.log(feedback);

// eg 6
// Formating Dates or Timers
// For apps that display dates, timers, or countdowns, converting numbers to strings ensures they are formatted in the way you want. For instance, when displaying a timer in minutes and seconds

let tInseconds = 125;
// calculate the minutes
let minutes = Math.floor(tInseconds / 60); // output 2, minutes
// calculate the seconds
let seconds = tInseconds % 60; // output 5, seconds
let mess = `${minutes.toString()}:${seconds < 10 ? "0" : ""}${seconds.toString()}`; 
console.log(mess); // output 2:05

// eg 7
// Adding Number Suffixes (e.g., 1st, 2nd, 3rd)
// In some cases, you may need to display a number with a suffix like "st", "nd", "rd", or "th" for ordinal indicators.

let position = 2;
let ordinal = `${position.toString()}${position === 1 ? "st" : position === 2 ? "nd" : position === 3 ? "rd" : "th"}`

console.log(ordinal); // output 2nd

/* 2: ****** .toFixed()   ******* */ // num.toFixed(digits)  SYNTAX
// The toFixed() method in JavaScript is used to format a number to a specified number of decimal places. It returns the number as a string, rounded to the given number of decimal places.

// eg
let fixedNum = 5.7894;
console.log(fixedNum.toFixed(2)); // output 5.79
console.log(fixedNum.toFixed(0)); // output 6 because it rounded-up with decimal by default adding 1 to 5 from 7 
console.log(fixedNum.toFixed()); // ouput 6

//NOTE .The method rounds the number to the nearest value, .And like I said before it always returns a string, not a number.

// eg Formatting a number with different decimal places

let numbs = 123.4567;

console.log(numbs.toFixed(1));  // Output: "123.5" (rounded to 1 decimal place)
console.log(numbs.toFixed(2));  // Output: "123.46" (rounded to 2 decimal places)
console.log(numbs.toFixed(3));  // Output: "123.457" (rounded to 3 decimal places)
console.log(numbs.toFixed(4));  // Output: "123.4567" (no rounding needed)

// eg Rounding up or down
let num1 = 8.3456;
let num2 = 8.3446;

console.log(num1.toFixed(2)); // output 8.35 ,rounded-up
console.log(num2.toFixed(2)); // output 8.34 ,rounded-down

// eg Edge cases
let num3 = 50; 
num3 = num3.toFixed(3)
console.log(num3, typeof num3); // output: "50.000" (appending zeros after the decimal)
// convert it to number
  /* let num3 = 50.4568 */
num3 = parseFloat(num3)
console.log(num3, typeof num3); // output: 50.547 (number)

// eg 1 Displaying Prices in E-commerce Sites
// In an e-commerce application, product prices are often displayed with two decimal places to represent cents.

let price1 = 49.9933;
console.log(document.querySelector("#product-price").innerHTML = `$${price1.toFixed(2)}`); // output : $49.99

// eg 2 Showing Calculated Percentages
// When displaying a percentage result, rounding to two decimal places keeps the display clean.
let tScore = 79;
let maxScore = 100;
let percentage = (tScore / maxScore) * 100;
console.log(`score: ${percentage.toFixed(1)}%`); // output : score: 79.0%

// eg 3. Formatting Financial Transactions
// Financial apps often need to round numbers to two decimal places, ensuring accurate currency representation.
let balance = 1040.7898;
let transaction = 150.5;
let newBalance = balance - transaction;
console.log(newBalance); // output $890.2898
console.log(`New balance: $${newBalance.toFixed(2)}`); // output : New balance: 890.29

// eg 4 Displaying Statistics or Ratings
// If your app displays ratings or averages, you may want to round the number for readability.
let averageRating = 4.768;
console.log(document.querySelector("#rating").innerHTML = `Rating: ${averageRating.toFixed(1)}`);

// eg 5 Creating Consistent Invoice or Receipt Totals
// When generating totals on invoices, the precision is essential for consistency in calculations.
let subTotal = 153.456;
let tax = 15.778;
let total = subTotal + tax;
console.log(total); // output 169.2339999999998
console.log(`Total: $${total.toFixed(2)}`);  // output Total: $169.23

// eg 6 Displaying Exchange Rates in Finance Apps
// In financial or travel apps, exchange rates often need two to four decimal places.
let exchangeRate = 1.2345678;
console.log(`Exchange Rate: $${exchangeRate.toFixed(4)}`); // output  Exchange Rate 1.2346

// eg 7  Limiting User Input Decimal Places
// In forms where users input amounts (like budgets or expenses), you can format their input to two decimals.
function formatInput(event) {
    let amount = parseFloat(event.target.value);
    if (!isNaN(amount)) {
        event.target.value = amount.toFixed(2);
    }
}

document.querySelector("#amount-input").addEventListener("blur", formatInput);
