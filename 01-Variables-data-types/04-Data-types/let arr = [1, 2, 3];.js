let arr = [1, 2, 3];
console.log(arr); //output [1, 2, 3]

console.log(arr.length);  // output 3

arr[4] = 5;  // arr[4] will be undefined because nothing is assign to it

console.log(arr); // output [1, 2, 3, undefined, 5]

arr[3] = 7;  // assigning a value to arr[4] with index of 3

console.log(arr); // output [1, 2, 3, 7, 5]

console.log(arr.length); // output 5
// console.log(arr);


