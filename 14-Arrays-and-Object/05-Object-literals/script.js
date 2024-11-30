// NOTE: Objects are non premitve dataType
let x;

const person = {
    name: 'John Doe',
    age: 30,
    isAdmin: true,
    adress: {
        email: 'eg@gmail.com',
        street: '142 Main Street',
        city: 'Banjul'
    },
    hobbies: ['Codding', 'Music', 'Sports']
}

// We can use the .syntax to access a specific property of a value
console.log(person);

// Acces the name property
console.log(person.name); // output: John Doe;
// And we can also use the bracket notation[] to access a value
console.log(person['age']); // output: 30;

// Accessing the street with .syntax
x = person.adress.street;
// console.log(x); // output: 142 Main Street;

// We can also have arrays inside the object and this is how you can access it value
x = person.hobbies[0];
// console.log(x); // output: Coding;

// You can also 'Update' a property
person.name = 'Jane Doe'; // This updates the name John Doe to Jane Doe. And remember OBJECT is non premitive number
person['isAdmin'] = false; // The same applies to here
// console.log(person);

// If you want to completely remove a property from an Object you can use 'delete'

delete person.age; // This deletes the age from the object

// You can also add a value to an Object 
person.hasChildren = true; // This add a hasChildren key and true value to the person Object

// You can create a function on this propety and call it 'great'
// console.log(person);

person.great = function () {
    console.log(`Hello my name is ${this.name}`);
};

person.great();

x = person;  // output: Hello my name is Jane Doe;

console.log(x);