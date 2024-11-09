// Variables are stored on stack
const name = 'John';
const age = 40;

let newName = name;
// console.log(name);
newName = 'Johnathan' // this newName will add another new name johnathan

let newAge = age;
newAge = 41; // the same as the age


// Reference values are stored on the heap
const person = {
    name: 'Brad',
    age: 40
}

let newPerson = person;
newPerson.name = 'Bradley'; // this new person will change both person and new newperson from 'Brad' to 'Bradley' 
let personAge = person;
personAge.age = 42; // the same as the age


// premitive
console.log(name, newName);
console.log(age, newAge);

// reference
console.log(person, newPerson);
console.log(personAge);




// examples

// premitve types

// boolean
const hasKids = true;

let hasWife = hasKids;
hasWife = false;

console.log(hasKids, hasWife);


// number
const x = 100;

let y = x;
y = 200;

console.log(x, y);


// bigInt
const temps = 2637362662733n;

let temps2 = temps;
temps2 = 877777777779n;

console.log(temps, temps2);


// reference types

// array
const arr = [1, 2, 3, 4];

let myArr = arr;
myArr = [5, 6, 7, 8];

console.log(arr, myArr);

function sayHello() {
    console.log('Hello');
}

let sayHello2 = sayHello;

// function sayHello2(){
//     console.log('Hello World!');
// }


console.log(sayHello, sayHello2);




