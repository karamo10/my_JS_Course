// Challenge 1:
const arr = [1, 2, 3, 4, 5];

arr.push(6)
arr.unshift(0)
arr.reverse();

console.log(arr); // output : [6, 5, 4, 3, 2, 1, 0]

// Challenge 2:
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// solution 1:
arr1.splice(4, 1) // remove the last element 5 of arr1
const arr3 = [...arr1, ...arr2];
console.log(arr3); // output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// solution 2:
const arr4 = arr1.splice(0, 4).concat(arr2)
console.log(arr4); // output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// solution
const arr5 = [...arr1, ...arr2]; // output: [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10]
arr5.splice(4, 1); // removes the 4th element 5
console.log(arr5); // output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


let a = [1,2,3,4,""];
let b = "Dev";
console.log(a+b); // output: 1,2,3,4,"Dev";