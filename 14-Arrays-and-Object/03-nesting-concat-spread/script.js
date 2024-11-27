 
 let x;

 const fruits = ['apple', 'pear', 'guava'];
 const berries = ['strawberry', 'blueberry', 'rasberry'];

// fruits.push(berries) // This add the array of berries to the fruits array

// Let access the blueberry element with bracket notation
// x = fruits[3][1]; // output: blueberry

// Nested arry, array inside an array
const allFruit = [fruits, berries]; // output : [["apple", "pear", "guava"], ["strawberry", "blueberry",

x = allFruit[0][1]; // output: pear

// CONCAT METHOD .concat()
x = fruits.concat(berries); // output : ['apple', 'pear', 'guava', 'strawberry', 'blueberry', 'rasberry'];

// SPREAD OPERATOR (...)
x = [...fruits, ...berries, 'mango']; // output: ['apple', 'pear', 'guava',

// FLATTEN ARRAY
const arr = [1, 2, [3, 4], 5, [6, 7], 8];
x = arr.flat();
console.log(x); // output : [1, 2, 3, 4, 5, 6, 8];

const arr2 = [1, [2, [3, 4], [5, 6], 7, 8]];
x = arr2.flat(Infinity); // To flatten completely, we use flat(Infinity).

// STATIC METHODS ON ARRAY OBJECT
x = Array.isArray(fruits) // output: true
// returns true if the argument is an array
x = Array.isArray('Hello') // output: false beacuse it is a string
// returns false if the argument is not an array
// console.log(fruits);

x = Array.from('12345'); // output: [ '1', '2', '3', '4', '5' ]
// converts a string into an array

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c); // output: [1, 2, 3]
// creates an array from the arguments passed to it

console.log(x);