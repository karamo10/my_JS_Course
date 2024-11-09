// ways to declear a variable
// var, let, const

let firstName = 'John';
let lastName = 'Doe';
 
console.log(firstName, lastName);

// console.log(age);  //this gives an referenceError cannot access 'age' before initialization
let age = 18; 
 
console.log(age)

// Naming Conventions
// -Only letters, numbers, underscores and dollar signs
// -Can't start with a number

// Re-assigning variables
age = 31;

console.log(age);

let score;

score = 75;

console.log(score);

if (true) {
    totalScore = score + 5;
}
console.log(totalScore);

// CONST
const x = 100;
// x = 105;

// array
const arr = [1, 2, 3, 4];

// arr = [5, 6, 7] 
//* this gives an error because you try a add an item directly 

arr.push(5, 'pabi'); 
//* this is the correct way, it will add '5' and 'pabi' to the items

console.log(arr);


// with object

const contact = {
    email: 'pabi@gmail.com',
} 
contact.email = 'camz@gmail.com'; // this method change the value of the object from 'pabi@gmail.com' to 'me@gmail.com' because ARRAY is not a premitive datatype

contact.name = 'pabi'; // this method add a name object to the object with a value of pabi

console.log(contact);



// adding nested object with dot notation
contact.address = {
    place: 'Banjul',
    street: 'Indepence Drive'
} 
// accessing it through bracket notation bracket notation
console.log(contact['address']['place']);


const k = 100; 
// const cannot be Re-assign directly
// k = 110;
// console.log(k);
// const people; 
// you cannot declear a const, it must be initalize first
 


let names = ['lamin', 'buba'];
let me = 'pabi';

console.log(names, typeof names);
console.log(me, typeof me);


// DECLEAR MULTIPLE VALUES AT ONCE
let a, b, c;

// assignin a values to them
a = 5;
b = 7;
c = a + b; // output 12

// c = String(c)

// re-assign
a = 6;
c = 8;
b = c - a;  // output 2

a = b + c; // output 10email

b = a * c; // output 80



console.log(b, typeof b);


let d, e, f;

d = 7;
e = 5;
f = d - e; // output 2

console.log(f); // output 2

if(true){
    g = f + 8;
}

console.log(g);