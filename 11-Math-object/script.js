//
let x;

x = Math.sqrt(9); //output "3"

x = Math.abs(-5); // output "5"

x = Math.round(4.5); // output "5"
console.log(x);
x = Math.ceil(4.2); // output "5"
console.log(x);
x = Math.floor(4.2); // output "4"
console.log(x);
x = Math.pow(2, 3) // output "8"

x = Math.min(3, 4, 2) // "2"

x = Math.max(3, 4, 2) // "4"

x = Math.random();

x = Math.random() * 10 + 1;

x = Math.floor(Math.random() * 100 + 1)

console.log(x);


// SUMMARY ON THE NUMBER PROTOTYPE

               /* Math.sqrt(x) */

// The Math.sqrt() method in JavaScript is used to compute the square root of a given number. The square root of a number is a value that, when multiplied by itself, gives the original number.
// Syntax: Math.sqrt(number)

// Basic examples
const number = 25;
const result = Math.sqrt(number);
console.log(result); // Output: 5
/* The sqrt of 25 is 5 */

// Sqrt of a Decimal number
const decimal = 2;
const deciResult = Math.sqrt(decimal);
console.log(deciResult); // output 1.4142135623730951
/* The sqrt of 2 is approximately 1.414 */ 

// Sqrt of 0
const zero = 0;
const zeroResult = Math.sqrt(zero);
console.log(zeroResult); // output 0
/* The sqrt 0 is 0 */ 

// Sqrt of a Negetive number
const negetive = -8;
const negeResult = Math.sqrt(negetive);
console.log(negeResult); // output NaN
/* The sqrt root of a negative number is not a real number, so it will return NaN (Not a Number).*/ 

// Sqrt with a Variable
let num = 144;
let numSqrt = Math.sqrt(num);
console.log(`The square root of ${num} is ${numSqrt}.`); // output "The square root of 144 is 12."

// NOTE
// Math.sqrt(x) calculates the square root of x.
// It returns the square root for non-negative numbers.
// If the number is negative, it returns NaN because the square root of negative numbers isn't defined in the real number system.
// The method works for integers, decimals, and zero.


               // Math.abs(x)

/* The Math.abs() method in JavaScript returns the absolute value of a number. The absolute value of a number is the distance between that number and zero on the number line, without considering whether the number is positive or negative. */
// Math.abs(x);

// Example with Positive Numbers
const positiveNum = 8;
const positiveResult = Math.abs(positiveNum)
console.log(positiveResult); // output 8

// Example with Negative Numbers
const negetiveNum = -8;
const negetiveResult = Math.abs(negetiveNum)
console.log(negetiveResult); // output 8

// Example with Zero
const zeros = 0;
const zerosResult = Math.abs(zeros)
console.log(zerosResult); // output 0

// Example with Decimal number
const deci = -4.67;
const decisResult = Math.abs(deci);
console.log(decisResult); // output 4.67
/* Math.abs() removes the negative sign from the decimal, returning the positive value 4.67 */

// Using Math.abs() with Expressions
// You can also use Math.abs() with expressions and variables.
const numX = -7;
const numY = 7;
const results = Math.abs(numX - numY);
console.log(results); // output 14
/* Explanation: Math.abs(num1 - num2) computes the difference between numX and numY, which is -14, and then returns its absolute value, 14. */

// When calculating profit or loss, you might need to ensure that the values are non-negative, especially when dealing with absolute differences in balances.
const income = 600;
const expenses = 500;
const balance = Math.abs(income - expenses);
console.log(balance); // output 100

// Distance Calculation  If you're calculating the distance between two points on a number line or in a 2D space, you would use the absolute value to ensure the distance is positive.
const poitn1 = 8;
const poitn2 = -4;
const distance = Math.abs(poitn1 - poitn2);
console.log(distance); // output 12

// NOTE
// Math.abs(x) returns the absolute value of x.
// It removes any negative sign from x, returning a non-negative result.
// It works with integers, floating-point numbers, and zero.


                // Math.round(x)

// The Math.round() method in JavaScript rounds a number to the nearest integer. This function will round up if the decimal part is 0.5 or higher and round down if it's less than 0.5.
// Math.round(x);
 
// Rounding Up
let roundUp = 3.7;
let roundUpResult = Math.round(roundUp);
console.log(roundUpResult); // output 4  // Since the decimal part (0.7) is greater than 0.5, Math.round() rounds up to 4.

// Rounding Up
let roundDown = 3.4; 
let roundDownResult = Math.round(roundDown);
console.log(roundDownResult); // output 3 // Since the decimal part (0.4) is less than 0.5, Math.round() rounds down to 3.

// Negative Numbers
let negetives = -3.5;
let negetivesResult = Math.round(negetives);
console.log(negetivesResult); // output -3
// With a negative number ending in 0.5, Math.round() rounds towards the integer closer to zero, resulting in -3.

// 5. Rounding Zero
let roundZero = 0.49;
let roundZeroResult = Math.round(roundZero);
console.log(roundZeroResult); // output 0 
// Since the decimal part is less than 0.5, Math.round() rounds down to 0.
let roundedZero = 0.59;
let roundedZeroResult = Math.round(roundedZero);
console.log(roundedZeroResult); // output 1
// Since the decimal part is equal to 0.5, Math.round() rounds up to 1.

// Practical uses
// When displaying prices, you may want to round to the nearest number for easier reading.
let price = 19.99;
let roundedPrice = Math.round(price);
console.log(`Rounded Price: $${roundedPrice}`); // output Rounded Price: $20

// When displaying measurements (like height, weight, or distance) in an app, you may want to round values to the nearest whole number for clarity.
let height = 174.56;
let heights = Math.round(height);
console.log(`${heights}cm`); // output 175cm

// When displaying user progress (e.g., loading bars or percent completion), rounding makes percentages look cleaner.
let completion = 0.723;
let roundedCompletion = Math.round(completion * 100); // completion * 100 = 72.3
console.log(`${roundedCompletion}% completed`); // Output: 72% completed

// When calculating interest, discounts, or totals, rounding can help avoid fractional amounts.
let discount = 49.87;
let roundedDiscount = Math.round(discount);
console.log(`Discount: $${roundedDiscount}`); // Output: Discount: $50

// NOTE
// Math.round(x) rounds x to the nearest integer.
// Values ending in 0.5 or higher round up; values lower than 0.5 round down.
// Useful for displaying prices, scores, measurements, and more in real-life projects.

// console.log(object);


                        // Math.ceil(x)

/* The Math.ceil(x) function in JavaScript rounds a number up to the nearest integer. It always rounds up, regardless of whether the number is a whole number or has a decimal. */ 
// egs
const ceil = 3.1;
const cResult = Math.ceil(ceil);
console.log(cResult); // output 4
/* Since the decimal part is greater than 0, Math.ceil() rounds up to 4. */

// eg
const ceil2 = 9.9;
const cResult2 = Math.ceil(ceil2);
console.log(cResult2); // outpu 10
/* Since the decimal part is greater than 0, Math.ceil() rounds up to 10. */

// eg
const ceil3 = -9.5;
const cResult3 = Math.ceil(ceil3); // -9
console.log(cResult3);

// EXAMPLES
//  E-commerce and Billing
/* Let’s say a store sells a product in bulk, but the customer orders a quantity that isn’t a whole number. To ensure customers are charged for enough product, you might round up the amount. */
const quantityOrdered = 2.3;
const unitsToCharge = Math.ceil(quantityOrdered);
console.log(unitsToCharge); // output 3
/* This ensures the customer pays for a full unit if they exceed a set amount */

// Pagination and Page Count
/* For paginating data, such as comments or products, you may need to determine the total number of pages based on the items per page */
const itemsPerPage = 10;
const totalItems = 47;
const totalPages = Math.ceil(totalItems / itemsPerPage); // 5 pages
/* Here, Math.ceil() ensures there are enough pages to cover all items, even if the last page has fewer items than itemsPerPage */

// Pricing and Fees
/* In a billing system where prices or fees are calculated based on fractions, rounding up is often necessary to ensure full coverage */
const hourWorked = 3.3;
const hourlyRate = 50;
const chargableHours = Math.ceil(hourWorked); // 4 hours
const totalCost = chargableHours * hourlyRate; // $200
console.log(`The hours worked are ${chargableHours} and the total cost is $${totalCost}`);
/* This approach ensures the customer is billed for a whole hour if they exceed part of an hour */

// If you’re planning an event where each table seats a limited number of people, you might round up to ensure there’s enough seating for everyone.
const attendees = 75;
const seatsPerTable = 10;
const tablesNeeded = Math.ceil(attendees / seatsPerTable); // 8 tables
console.log(`You need ${tablesNeeded} tables to accommodate all attendees.`);

                // Math.floor(x) 
                
 /* The Math.floor() function in JavaScript rounds a number down to the nearest integer that is less than or equal to the given number. Unlike Math.ceil(), which rounds numbers up, Math.floor() rounds numbers down, which means it always rounds towards the lower integer */                
// Math.floor(x)
Math.floor(4.7); // returns 4
Math.floor(9.9); // returns 9
Math.floor(-5.1); // returns -6
Math.floor(-0.9); // returns -1
Math.floor(7); // returns 7 (whole numbers are unaffected)

// NOTE Math.floor() always rounds down, no matter if the decimal part is less than 0.5 or more.
// For negative numbers, this means the function rounds towards the more negative number (further away from zero).

// eg
// If you're calculating a discount and need to round down the result to ensure customers don't get more than the intended discount.
const price1 = 55.75;
const discount1 = 0.3;
const discoutAmount = Math.floor(price1 * discount1); // price1 * discount1 = $16.62
console.log(`The discount amount is $${discoutAmount}`); // output The discount amount is $16



               /* Math.pow(x, y) */

//The Math.pow() function in JavaScript is used to raise a base number to the power of an exponent. Its syntax requires two arguments: the base (x) and the exponent (y).

let pow = Math.pow(2, 4);
console.log(pow); // output 16

// eg
let pow1 = Math.pow(3, 3);
console.log(pow1); // output 27

// eg
let pow2 = Math.pow(9, 0.5);
console.log(pow2); // output 3



               /* Math.min(value1, value2, value3, ...) */

/* The Math.min() method in JavaScript is used to find the smallest number in a set of values. It takes any number of arguments and returns the smallest value among them. If no arguments are provided, it returns Infinity, and if any argument is NaN, the result is NaN. */
// Math.min(value1, value2, ...);

console.log(Math.min(10, 5, 8)); // Output: 5
// 
console.log(Math.min(20, 15, 25)); // Output: 15
// 
console.log(Math.min(2, 0, 4)); // Output: 0

// With Negetive Number
console.log(Math.min(-10, -5, 0, 3)); // Output: -10
// 
console.log(Math.min(7, -5, 8, 3)); // Output: -5

// No arguments
console.log(Math.min()); // Output: Infinity
// egs
/* If you're creating an input form with price constraints, you could use Math.min() to ensure the entered value stays within the limit */
const userEnteredPrice = 150;
const maxAllowedPrice = 100;

const priceToUse = Math.min(userEnteredPrice, maxAllowedPrice);
console.log(priceToUse); // Output: 100 (it caps the user price at the max allowed price)



               /* Math.max(value1, value2, value3, ...) */

/*The Math.max() method in JavaScript returns the largest value from a set of numbers. Like Math.min(), it takes multiple arguments and returns the highest number. If no arguments are given, it returns -Infinity, and if any argument is NaN, the result will also be NaN */
// Math.max(value1, value2, ...);
console.log(Math.max(10, 20, 5)); // Output: 20
// 
console.log(Math.max(100, 210, 125)); // Output: 110

// With Negative Numbers
console.log(Math.max(-10, -5, 0, 3)); // Output: 3
// 
console.log(Math.max(-1, -9, 0, 1)); // Output: 1

// No arguments
console.log(Math.max()); // Output: -Infinity

// egs
/* When setting input constraints (e.g., age), Math.max() can be used to keep values above a minimum threshold */
const ageEntered = 15;
const minAge = 18;

const ageToUse = Math.max(ageEntered, minAge);
console.log(ageToUse); // Output: 18 (ensures age meets minimum requirement)


               // Math.random()

/* Math.random() is a JavaScript method that generates a random floating-point number between 0 (inclusive) and 1 (exclusive). Each time it’s called, it returns a different number, making it useful for generating random values in various ranges */
// Math.random()
console.log(Math.random()); // Generates a random number between 0 and 1
// 
// To get a random integer between 0 and max 
let max = 10;
let randomInt = Math.random() * max;
let randomInts = Math.floor(Math.random() * max);

console.log(randomInt);
console.log(randomInts);

// To get a random integer between min (inclusive) and max 
let min = 5;
let maxi = 20;

let randomInteger = Math.floor(Math.random() * (maxi - min) + min);
console.log(randomInteger); // Geanarates an integer between 5 and 19

// For a random floating-point number between min (inclusive) and max
let minNum = 3;
let maxNum = 7;

let randomNum = Math.random() * (maxNum - minNum) + minNum;
console.log(randomNum); // Generates number between 3 and 7

//
let randomBool = Math.random() >= 0.5;
console.log(randomBool); // Randomly outputs true or false

// example
function getRemain(max, min){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// // NUMBER CHALLENGE
// const y = Math.floor(Math.random() * 100 + 1);
// console.log(y);

// const z = Math.floor(Math.random() * 50 + 1);
// console.log(z);

// // Get the sum
// const sum = y + z;
// const sumOutPut = `${y} + ${z} = ${sum}`
// console.log(sumOutPut);

// // Get the difference
// const diff = y - z;
// const diffOutPut = `${y} - ${z} = ${diff}`
// console.log(diffOutPut);

// // Get the product
// const prod = y * z;
// const prodOutPut = `${y} * ${z} = ${prod}`
// console.log(prodOutPut);

// // Get the quotient
// const quot = y / z;
// const quotOutPut = `${y} / ${z} = ${quot}`
// console.log(quotOutPut);

// // Get the remaider
// const rm = y % z;
// const rmOutPut = `${y} % ${z} = ${rm}`
// console.log(rmOutPut);

// // console.log(Math);

