// Arrays  are special type of 'Object' and a data structure in JavaScript that store multiple values.
// An Arrays are sorrounded in brackets []. And the values sorrounded in a brackets[] are called elements. Ans elements can be any data type like string, number, boolean, object, array etc.
// Arrays are Zero 0 based index means the first element of an array is at index 0.
// Remeber Arrays are "non primitive" data type.

let  x;

// Array Literals
const numbers = [12, 13, 11, 14];

// We can put various datatypes in an array
const mixed = ['orange', 45, {name: 'John', age: 25}, true, [1, 2, 3]];

// Array Constructor
const fruits = new Array('Apple', 'pear', 'banana'); 
console.log(fruits);
// Get element by an index
x = numbers[0]; // output 12

x = numbers[0] + numbers[2]; // output 23

x = `My favourite fruit is ${fruits[2]}`; // output "My favourite fruit is banana"

// The length property it returns the number of elements in an array.
x = numbers.length; // 4

// Arrays are mutable it means we can change the value of an array.
fruits[2] = 'orange'; // it changes the value of the third element 'banana' to 'orange' of the array

// fruits.length = 2;
console.log(fruits); // output ['Apple', 'pear']

// Let say I want to add a new value at the end of an array with a hard coded value.
fruits[3] = 'strawberry';
console.log(fruits); // output ['Apple', 'pear', 'orange', 'strawberry']
// But if I want to add a new value at the end of an array with a variable value
fruits[fruits.length] = 'bluebery';
console.log(fruits); // output ['Apple', 'pear', 'orange', 'strawberry', 'bluebery']
// NOTE: If you want to add a new value at the end of an array you can use a method called push()
// fruits.push('pearl')

x = fruits; // it copies the reference of the array
x = numbers; // it copies the reference of the array
// console.log(x);
