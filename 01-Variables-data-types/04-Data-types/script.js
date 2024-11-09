     // PREMITIVE TYPES

// String
const firstName = 'sara';

// Number
const age = 30;
const temp = 98.4;

// Boolean
const isMarried = true;

// Null
const aptNumber = null;

// Undefined
// let score;
const score = undefined;

// Symbol
const id = Symbol('id');

// BigInt
const n = 9883372828n;


  // REFERENCE TYPES

// Array
const arr = [1, 2, 3, 4];
arr[5] = 6; 
// arr.push(7);  
// console.log(arr[4]);
console.log(arr);

let arr2 = [1, 2, 3, 7, 5]
console.log(arr2.length);

// Object
const person = {
    name: 'Muhammad'
}
person.name = 'Abubakr';

// Function 
function sayHello() {
    console.log('Hello');
}

const output = person;
console.log(output, typeof output);



// ARRAYS
// Sorting Arrays in JS
const names = ['James', 'Anna', 'Adam', 'Collins', 'Rita'];

console.log(names);

const sortedNames = names.sort();  // sorting the names in assending order

console.log(sortedNames);

const nameReversed = sortedNames.reverse(); // soring the names in desending order

console.log(nameReversed);



// Sorting Number
const numbers = [10, 20, 5, 40, 30];

const sortedNumbers = numbers.sort((a,b) => a - b); 

console.log(sortedNumbers);