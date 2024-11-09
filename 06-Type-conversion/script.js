// Convert a STRING to NUMBER
let amount = '100';
// methods
// amount = parseInt(amount); 
// amount = Number(amount);
amount = +amount;

console.log(amount, typeof amount);



// Convert a NUMBER to STRING
let amount2 = 100;
// methods
amount2 = amount.toString();
// amount2 = String(amount2);

console.log(amount2, typeof amount2);



// Convert a STRING to DECIMAL
let amount3 = '99.5';
// methods 
amount3 = parseFloat(amount3)

console.log(amount3, typeof amount3);



// Concert a NUMBER to BOOLEAN
let amount4 = 0;  // in boolean 0 is 'FALSE from 1 to infinite is 'TRUE'
// method
amount4 = Boolean(amount4);


console.log(amount4, typeof amount4);



// examples

// number to srting 
let cost = 99;
cost = String(cost);

console.log(cost, typeof cost);



// string to number
let cost2 = '105';
// cost2 = parseInt(cost2);
cost2 = Number(cost2);
// cost2 = +cost2;

console.log(cost2, typeof cost2);


// string to decimal
let deci = '100.7';
deci = parseFloat(deci);

console.log(deci, typeof deci);



// number to boolean
let bool = 0;
bool = Boolean(bool);

console.log(bool, typeof bool);


let amt = 2.4e24;

console.log(amt, typeof amt);



// examples

let studentName = 'Mustapha Njie';
let studentAge = 22;
let studentAddress = 'Abuko';

// concatination

console.log("My name is", studentName,"and I lived in", studentAddress,"I am",studentAge,"years old.");
console.log("Student Age:",studentAge);