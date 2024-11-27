
let x;

const arr = [23, 45, 12, 17];

arr.push(101); // adds 101 to the end of the array
// 1. push(): Adds one or more elements to the end of an array and returns the new length.

arr.pop() // removes the last element 101 from the array
// 2. pop(): Removes the last element from an array and returns that element.

arr.unshift(99) // adds 99 to the beginning of the array
// 3. unshift(): Adds one or more elements to the beginning of an array and returns the new length.

arr.shift(); // removes the first element 99 from the array
// 4. shift(): Removes the first element from an array and returns that element.

arr.reverse(); // output: [17, 12, 45, 23]
// 5. reverse(): Reverses the order of the elements in an array.

console.log(arr);

// NOTE: This methods are use to manipulte the current arrays MEANINIG we can use those (methods) above to perform various actions on an array, like adding, removing, or changing its elements.


// This batch of methods are the one's we can used to get something from it like get information about the array

x = arr.includes(46); // returns true 'You always get true if the value is found in the array and false if it is not'
// 1. includes(): Determines whether an array includes a certain value among the elements.

// Let say arr = [17, 12, 45, 23] this happend because of the .reverse() method

// Since the array is zero base index
x = arr.indexOf(17); // output: 0 
// 2. indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.


// This two methods are petty similar the .slice() and .splice() method

// x = arr.slice(1, 3); // output: [12, 45] NOTE it does not change the original array, it returns a new array which is assign to the variable x
// 3. slice(): Extracts a section of an array and returns a new array.

// x = arr.splice(1, 3); // output: [12, 45, 23]; NOTE it changes the original array, and return an array of remove elements.
// console.log(x);
// console.log(arr); // output: [17] 

// x = arr.splice(2, 1) // output: [45] 'after the splice() method the array is [17, 12, 23]'
// console.log(x);
// console.log(arr); // output: [17, 12, 23] so ater logging out teh console it deletd the 45 from the array, so we can use the method too to delete an element from the array.

x = arr.splice(1, 3).reverse().toString().charAt(0);
console.log(x); // 2


// .splice()  Summary

// The .splice() method in JavaScript modifies the original array by adding, removing, or replacing elements at specific indices. It is a powerful method that gives you more flexibility than .slice(), but it also alters the original array.
// Removing elements: If you want to remove elements from an array, you can use .splice()
const numbers = [12, 13, 11, 14];
const removed = numbers.splice(1, 2); // Start at index 1, remove 2 elements

console.log(numbers); // Output: [12, 14]; (original array is modified)
console.log(removed); // Output: [13, 11]; (the removed elements)

// egs
numbers[0] = 100;
console.log(numbers); // Output: [100, 14]; (the first element is changed)
const nums = numbers.concat(arr, removed).reverse(); 
console.log(nums); // Output: [11, 13, 17, 14, 100];

// POINTS
// It changes the original array.
// It returns an array of removed elements.
// Use it when you need to modify the array directly (e.g., remove or replace elements).

/* Difference between .splice() and .slice() */
// .splice(): Mutates the original array.
// .slice(): Returns a new array without modifying the original.
