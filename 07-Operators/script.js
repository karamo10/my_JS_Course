// OPERATORS are symbols that perform operations on values or variable. they are classiefied into several categories, each serving a different purpose

// The main types of JS operators  are: 1.Arithmetic 2.Assignment 3.Comparison 4.Logical (5.Bitwise 6.String) 7.Conditional Or Ternary 8.Type(like 1.Typeof 2.instanceof) 9.Spread and Rest Operators



//  1. ARITHMETIC OPERATORS *they are used to perform mathematical  operations*

let x;

x = 5 + 5; // 10 // addition
x = 5 - 5; // 0  // subtraction
x = 5 * 5; // 25 // multiplication
x = 5 / 5; // 1  // division
x = 5 % 2;  // 1  // modulus // remainder
x = 5 ** 3; // 125 // exponentiation // here 5 multiply by itself 3 times(5*5*5)
x = 99;
x++;        // 100 // increment 'Note'it increases a number by one
x--;        // 99  // decrement 'The same as here decreases a number by only one'
// console.log(x);
console.log(x);
// examples
console.log(3 % 2);
console.log(5 ** 4); // 5*5*5*5 output 625
x = 10;
++x;
x++;
// Both placement shown above are valid. The difference between prefix(before) and prefix(after) placements is that the prefix position will execute the operato after that line of code has been executed. And you can use the increment or decrement operator on a variable. An error will occurs when you try to use these operators directly on a number value. console.log(10++ / 10--).
console.log(x);
// Concatenation Operator
x = 'Hello' + ' World';
console.log(x);

// Arithmetic Operators Summary
// For example, you can perform an addition and multiplication on a set of numbers
console.log(5 + 2 * 3); // *Operator Precedence*  // output 11
// You can use parentheses() to change the order of the operatins. Wrap the operation you want to execute first as follows
console.log((5 + 2) * 3); // output 21
// When using increment or decrement operators together with other operators, you need to place the operators in a prefix position as follows
let z = 5;
console.log(2 + ++z); // 2 + 6 = 8 // output 8
console.log(z);
// This is because a postfix increment or decrement operator will not be executed together with other operations in the small line.
console.log(5 * 3 - 2);
console.log((5 * 3) - 2);
console.log((3 * 6) % 2);
console.log(5 + 7 - 1);
console.log((5 + 7) - 1);
console.log((4 + 9) * 4);
console.log(4 + 9 * 4);

            //examples 
     // 1. console.log((4 + 9) * 4);
// The parentheses () have the highest precedence, so the expression inside the parentheses is evaluated first.
// First, 4 + 9 is calculated, which equals 13.
// Then, the result 13 is multiplied by 4, resulting in 52.
// So, console.log(52); will print 52.

     // 2. console.log(4 + 9 * 4);
// In this case, there's no parentheses, so JavaScript follows the normal order of operations, where multiplication (*) has a higher precedence than addition (+).
// First, 9 * 4 is calculated, which equals 36.
// Then, 4 + 36 is calculated, which equals 40.
// So, console.log(40); will print 40.



let a = 5;
console.log(a);
console.log(++a);
console.log(a++ / 3);
// console.log(w);



// 2. ASSIGNMENT OPERATORS  *they are used to assign values to variables*
x = 5; // assignment

x += 5; // 10 // addition assignment

x -= 5; // 5 // substraction assignment

x *= 5; // 25 // multiplication assignment

x /= 5; // 1 // division assignment

x %= 5; //  0 // modulus assignment

x **= 5;  // 3125 // exponentiation assignment

// console.log(x);  


// 3. COMPARISON OPERATORS   *They are used to compare two values and return a Boolean result 'true Or false' *.
x = 10 > 8; // true // greater than

x = 10 < 12; // true // less than

x = 10 >= 20; // false // greater than or equal to

x = 10 <= 15; // true // less than or equal to

   // console.log(x);

// EQUALTY OPERATORS
x = 5 == '5';  // true  // *EQUAL-TO OPERATOR*
   // In JavaScript, the == operator is called the equality operator. It checks if two values are equal, but it does not consider their data types. If the values are different types, JavaScript will attempt to convert them to the same type before making the comparison. This process is called type coercion.

   // In this case, JavaScript converts the string '5' to a number before comparing it to the number 5. Since both values are then 5, the result of the comparison is true.

x = 5 === '5';  // false  // *STRICT-EQUAL-T0 OPERATOR*  
   // It checks both the value and the data type, without type coercion 'Equal Value and Equal Data Type' and it is better practice to use the strict quality operator ===.

x = 5 != 5; // false // *NOT-EQUAL-TO OPERATOR*   
x = 5 != '5'; // false // Not Equal To
// it return false cuz the the values are the same but the data type is different


// Here it does not checks if the data types are not the same, it checks if the values are  not the same and will convert the data types to the same type before making the comparison.

   // Example2 the javascript convert the string '5' to a number 5 and then compares the two values. since they all are equal, the result is going to be equal
   
   x = 5 !== '5';  // true // *STRICT-NOT-EQUAL TO*
//    console.log(x);
   // it checks if the values are not the same, and also checks if the data types are not the same without type corcion 
   
   // In this case, the result is true because the number 5 and the string '5' have different data types, so they are considered not equal.
   
   
   // ***Summary On Equality Operators***

   //It's generally advisable to use the strict comparison operators (=== and !==) instead of the loose ones (== and !=). Here's why:
   
   // Why Use Strict Comparison Operators (=== and !==)?

   // No Type Coercion: Strict operators do not perform any type conversion, so they ensure that both the value and the data type are the same. This makes your code more predictable and avoids unexpected results caused by type coercion.

   // Improved Readability: Using strict comparison makes it clear to anyone reading your code that you intend to compare both the value and the data type.

   // Reduced Bugs: By avoiding type coercion, you reduce the chances of logical errors in your code, making it more reliable and easier to debug.

   // **Recommendation**
   //Use === and !== whenever possible to ensure that both the value and data type are the same.
   // Only use == and != if you specifically need type coercion, which is rare in most cases.


   
// 4. LOGICAL OPERATORS *They are used to perform logical operations and return a Boolean value (true Or false)

// 1. Logical && AND Operator *it return true if both operands are true
console.log(true && false); // false 

let canDrive = true;
let hasLicence = true;

const readyToDrive = canDrive && hasLicence;
console.log(readyToDrive);  //output true

// eg 2 
const password = true;
const usename = true;

let user = password || usename;
console.log(user); // output true

// eg 3
const walkLikeADuke = true;
const talkLikeADuck = true;

let isDuck = walkLikeADuke && talkLikeADuck;
console.log(isDuck); // true

// eg 4 
let temp = 20;

if(temp > 0 && temp <= 25){
       console.log("The weather is Good");
       // alert("The weather is Good")
}
else{
       console.log("The weather is Bad");
       // alert("The weather is Bad")
 
}


// 2. Logical || OR *it returns true if one oprand is true
console.log(true || false); // true

let hasWife = true;
let hasKid = false;

const employee = hasWife || hasKid;
console.log(employee);  //output true

// eg2
const isBird = true;
const isPlane = false;

isDuck = isBird || isPlane;
console.log(isDuck);  // true

let temps = 0;

if(temps <= 0 || temps > 30){
       console.log("The weather is Bad");
}
else{
       console.log("The weather is Good");
}
 

// 3. Logical ! NOT *it return if the oprerands is 'false' and vice versa
console.log(!true); // false

const isPenguin = !isDuck; // output false _that's true cuz penguin is not a duck
console.log(isPenguin);

// eg 1
let isSunny = true;

if(!isSunny){
       console.log("it is SUNNY");
}else{
       console.log("it is CLOUDY");
}
console.log(isSunny);  // output "it is CLOUDY"

// eg 2
let isAfternoon = false;

if(!isAfternoon){
       console.log("Good morning pabicamz");
}else{
       console.log("Good afternoon pabicamz");
}

console.log(isAfternoon);  //output "Good morning pabicamz"

// eg 3
let askQuestions = true;

if(!askQuestions){
       console.log("you are allow to ask me a questions");
}else{
       console.log("you are not allow to ask me a questions");
}

console.log(askQuestions); // output "you are not allow to ask me a question"

// eg 4
let quranTime = false;

if(!quranTime){
       console.log("Read the Hadith");
}else{
       console.log("Read the Quran ");
}

console.log(quranTime); // output *Read the Hadith*

// eg 5
let nationality = false;

if(!nationality){
       console.log("Is a Gambian");
}else{
       console.log("Is not a Gambian");
}
console.log(nationality);  // output * is a Gambian



// 5. TERNARY OR CONDITIONAL OPERATOR *Ternary operator is use to
/* condition ? expressionIfTrue : expressionIfFalse; */ // syntax

let result = (5 > 3) ? 'Greater' : 'Smaller';
// console.log(result);

// eg 1
let i = true;
let p = 0;
let q = 0;

if(i == true){
       p++;
       q++;
}else {
       p = 0;
       q = 0;
}
console.log(`a = ${p}, b = ${q}`);
     // the ternary operator
i == true ? (p++, q++) : ((p = 0), (p = 0)) 

console.log(`p = ${p}, q = ${q}`);

    // assign
let r = 0;

i == true ? (p++, q++, r++) : ((p = 0), (q = 0), (r = 0));

console.log(`p = ${p}, q = ${q}, r = ${r}`);

// eg 2
let age = 17;

console.log(age >= 18 ? "You are an adult!" : "You are a kid. "
);
console.log(age);

// eg 3
let admin = true;

console.log(admin === true ? "Access granted" : "Access denied.");

// eg 4
let user1 = {
       name: "karamo",
       role: "admin"
} 

let isAdmin = user1.role === "admin";

console.log(isAdmin ? "Access granted to dashboard" : "Access denied. Admins only");



// 6. SPREAD AND REST OPERATORS 

// Spread operator is primarily used for expanding iterables like arrays into individual elements. This operator allows us to efficiently merge, copy, or pass array elements to functions without explicitly iterating through them.
// Allows an iterable such as an array or string to be expanded into seperate elements (unpacks the elements).

//  SPREAD OPERATORS ON ARRAY

// Merging or Combining Arrays
// The spread operator provides an elegant solution for combining multiple arrays into a single array. By spreading each array's elements within a new array, we can concatenate them effortlessly.

let fruits = ["apple", "orange", "guava"];
let vegetables = ["onion", "salad", "tomato"];

let food = [...fruits, ...vegetables];
console.log(food);

// Adding Elements To An Array =You can add new elements to an existing array
const addArr = [1, 2, 3];
const newArrs = [0, ...addArr, 4];

console.log(newArrs); // output [0, 1, 2, 3, 4]

// more eg
const arr = [1, 2, 3];
console.log("Original array", arr); // output 1, 2, 3

// Before Spread Operator
// creating a new array an appending the existing elements to it.
const newArr = [5, 6, arr[0], arr[1], arr[2]];
console.log("New array(before spread operator):", newArr); // output 5, 6, 1, 2, 3

// After The Spread Operator
const newArry = [5, 6, ...arr];
console.log("New array (after spread operator):", newArry); // output 5, 6, 1, 2, 3

// You can see with the last example that the spread operator is more efficient and easier to read than the traditional method of appending elements to a new array.


// Passing Arguments To Functions
// Calling Functions with Variable Arguments
function sum(a, b, c) {
       return a + b + c;
}

const num = [10, 20, 30]; // 10 + 20 + 30
const resul = sum(...num);
console.log("Result of sum:", resul); // Result of sum: 60


// Combining Arrays to Pass as Function Arguments Suppose you want to pass a combination of two arrays as arguments to a function:
function logNames(a, b, c, d){
       console.log(a, b, c, d);
}

const group1 = ["Alice", "Bob"];
const group2 = ["Muhammad", "Aisha"];

console.log(logNames(...group1, ...group2)); // output Alice Bob Muhammad Aisha


// Using Spread Operator With Math.min() and Math.max() if you want to find smallest or highest number in an Array
let nums = [1, 2, 3, 4, 5];

maximum = Math.max(...nums)
console.log(maximum); // output 5
minimum = Math.min(...nums)
console.log(minimum); // output 1


// SPREAD OPERATOR ON STRINGS

// The spread operator (...) works with strings by expanding them into individual characters. Here are some practical examples of using it with strings in JavaScript

// converting a string to an array of characters
   /* we can change into an arrayof it individual characters using the spread opeartor */
// eg 1
const str = "Hello";

const charArray = [...str];
console.log(charArray); // output ["H", "e", "l", "l", "o"]

// eg 2
const recite = "Insan";

const recited = [...recite]
console.log(recite, recited); // ["I", "n", "s", "a", "n"]

// using spread to reverse a string
const str2 = "Hello";
const reverseStr2 = [...str2].reverse().join('');
console.log(reverseStr2); // output "olleH"


// Combining strings /*You can use the spread operator to merge two or more strings into one */

const str3 = "Hello";
const str4 = "World!";

const mergedStr = [...str3, ' ', ...str4].join('');
console.log(mergedStr); // output "HelloWorld!"


// Removing  duplicate characters from a string /*You can use the spread operator to remove duplicate characters from a string */
// eg 1
const duplicate = "Hello";
const uniqueChars = [...new Set(duplicate)].join('');
console.log(uniqueChars); // output "Helo"

// eg 2
const dupli = "camara";
const rest2 = [...new Set(dupli)].join('');
console.log(rest2); // output camr


// Create a new string from an array
const chars = ['H', 'e', 'l', 'l', 'o'];

const charsAdd = [...chars].join('');
console.log( charsAdd); // output 'Hello'


// eg 2  String
let myName = "pabi camz";
let letters = [...myName].join("-");

console.log(letters);






// EXAMPLESSSSSSSSS
function clickMe() {
       const myInputs = document.getElementById('myInput').value;
       const demos = document.getElementById('demo')   
       
       // if(isNaN(myInputs)) {
       //        demos.textContent = 'please enter a number';
       //        demos.style.color = 'orange';
       // }else {
       //        let outputs = myInputs < 18 ? 'your are not eligible to vote' : 'you are old enough to vote'
       //        demos.textContent = `${outputs}`;
       //        demos.style.color = 'black';
       // }
                     // OR
       if(isNaN(myInputs) || myInputs.trim() === ""){
              demos.innerHTML = 'Please enter a number';
              demos.style.color = 'orange';
       }
       else if(myInputs < 18){
              demos.innerHTML = 'Sorry you are not eligible to vote'
              demos.style.color = 'red'
       }
       else{
              demos.innerHTML = 'You are old enough to vote'
              demos.style.color = 'green';
       }
}


// This way
// function submitMe() {
//        let myinputs2 = document.getElementById('myInput2').value;
//        const demos2 = document.getElementById('demo2');
//        myinputs2 = parseInt(myinputs2);
       
//        if(isNaN(myinputs2)){
//               demos2.innerHTML = 'Please enter an amount'
//               demos2.style.color = 'orange';
//        }
//        else if(myinputs2 <= 40){
//               demos2.innerText = '$' + (myinputs2 + 10);
//        }else{
//               demos2.innerText = '$' + myinputs2;
//        }
// }

// Or

function submitMe() {
       const inputValue = parseInt(document.getElementById('myInput2').value.trim(), 10);
       const displayElement = document.getElementById('demo2');

       if(isNaN(inputValue)){
              displayElement.textContent = 'Please enter a value amount';
              // displayElement.style.color = 'orange';
       }else{
              const finalResult = inputValue <= 40 ? inputValue + 10 : inputValue;
              displayElement.textContent = `${finalResult} GMD`;
              // displayElement.style.color = 'black';
       }
}

// the ternary operato syntax
   /* condition ? expressionIfTrue : expressionIfFalse; */

// Condition: inputValue <= 40

// This checks if the value of inputValue is less than or equal to 40.
// If the Condition is True (inputValue <= 40):

// The expression inputValue + 10 runs, so 10 is added to the value of inputValue.
// If the Condition is False (inputValue > 40):

// The expression inputValue runs, so the value remains unchanged.
// Example:
// Let's see a few examples to make it clearer:

// If inputValue is 30, then 30 <= 40 is true, so finalAmount becomes 30 + 10, which equals 40.
// If inputValue is 50, then 50 <= 40 is false, so finalAmount is just 50.
// Why Use the Ternary Operator?
// It provides a shorter and more readable way to write simple if-else statements.
// It is useful when you need to make quick decisions based on a condition.
// This operator is best used when you have a straightforward decision to make. For more complex conditions, using a standard if-else block is often clearer.

// let y = "5";
// y += Number(5);
// y = parseInt(y);
// // console.log(y);
// console.log(y, typeof y);



// darkmode
function dark(){
       const darks = document.getElementById('dark');
       const myBody = document.body;

       myBody.classList.toggle('dark-mode');

       if(myBody.classList.toggle){
              darks.style.backgroundColor = 'white';
              darks.style.color = 'black';
       }else{
              darks.style.backgroundColor = 'black';
              darks.style.color = 'white';
       }
}

// const codedBy = "Ebrima";

// if(codedBy ==! "Ebrima"){
//        console.log("This is not coded by ebrima");
// }

function canPurchase(balance, itemPrice) {

       if((balance === itemPrice)) {
              console.log("Purchase Comfirmed");
       }else if(balance > itemPrice) {
              console.log("Purchase Comfirmed");
       }
       else{
              console.log("Purchase Denied");
       }
}
// output "Purchase Denied"

canPurchase(50, 100);