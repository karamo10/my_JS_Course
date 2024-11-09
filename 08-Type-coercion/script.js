
// Type Corcion

let x;

x = 5 + '5'; // output 55 & and typeOf string *That happend becuase of coercion javascript implicitly change the number type of 5 to string

x = 5 + Number('5'); // output 10 & and typeOf number *So this is what I will do if I want to change the string datatype of '5' to number datatype

x = 5 * '5'; // output 25 & typeOf number *You can see with the multiplication it do the opposite of the first one javascript change the string datatype of '5' to a number that makes the output of 25

x = 5 + null; // output 5 & typeOf number *It output 5 because null just coerce into number Null is = 0

// here is the example
x = Number(null) // output 0 & typeOf number

x = Number(true) // output 1 *cuz true as number is 1
x = Number(false) // output 0 *false as a number is 0

x = 5 +  true; // output 6 *Here you can see '5 + true' give out 6 because true is equal to 1

x = 5 + false; // output 5 *It give out 5 just like saying '5 + 0 = 5'

x = 5 + undefined; // output NaN(Not a Number) *If we add anything to 'undefined' we are going to have NaN in including itself

x = 10 - undefined; // output NaN *You see the same as here also

console.log(x, typeof x);