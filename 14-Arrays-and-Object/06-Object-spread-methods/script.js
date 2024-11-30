//  We can also create an Object like this
let x;

// const todo = {}; // Object Literal
const todo = new Object(); // Object constructor

todo.id = 1;
todo.name = "Buy Milk";
todo.completed = false;
x = todo;
console.log(x); // {id: 1, name: 'Buy Milk', completed: false}

// Nesting Objects _Object inside an Object
const person = {
  address: {
    coords: {
      lat: 41.7366,
      lng: -62.6453,
    },
  },
};

// Accessing the latitude in the person Object
x = person.address.coords.lat;
console.log(x); // output: 41.7366;

// Using the Spread Operator on an Object
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { ...obj1, ...obj2 }; // Spread Operator
// Object assign Object.assign({} obj1, obj2);
const obj4 = Object.assign({}, obj1, obj2); // This is the old way of doing things, but it's still supported

console.log(obj3); // output: {a: 1, b: 2, c: 3, d: 4}
console.log(obj3.c); // output: 3;

x = obj4;
console.log(x); // output: {a: 1, b: 2, c: 3, d: 4}

const todos = [
  { id: 1, name: "Buy Milk" },
  { id: 2, name: "Pickup kids from school" },
  { id: 3, name: "Take out trash" },
];

x = todos;
x = todos[0]; // output: {id: 1, name: 'Buy Milk'};
x = todos[0].name; // output: Buy Milk;
x = todos[1]; // output: {id: 2, name: 'Pickup kids from school'};
console.log(x);

const obj = {
    id: 1,
    name: "John",
    isMarried: true,
}

/* syntax */ // Object.keys(oj);
// Returns an array of the object's own property names (keys).
x = Object.keys(obj); // output: ['id', 'name', 'isMarried']

/* syntax */ // Object.values(oj);
// Returns an array of the object's own property values.
x = Object.values(obj); // output: ['1', 'John', 'true']

/* syntax */ // Object.entries(oj);
// Returns an array of key-value pairs, get the KEY VALUE pairs 
x = Object.entries(obj); // output: [['id', '1'], ['name', 'John'], ['isMarried', 'true;]]

/* syntax */ // Object.hasOwn(object, 'key');
// Checks if the object has the specified property as its own.
x = obj.hasOwnProperty('isMarried'); // output: true;
// Or this way
x = Object.hasOwn(obj, 'isMarried'); // output: true;

// getting the length prpoerty of the todo object
x = Object.keys(obj).length; // output: 3;
console.log(x);
// egs
let toDoKeys;
const toDo = {};

toDo.id = 1;
toDo.fruit = "banana";
toDo.vegetable = "cabbage";

console.log(toDo); // output: {id: 1, fruit: 'banana', vagetable: 'cabbage'}

toDoKeys = Object.keys(toDo);
console.log(toDoKeys); // output: ['id', 'fruit', 'vegetable']

// example on key value pairs
const users = {
  username: "yanks",
  password: "mypassword123",
};
const userO = Object.entries(users);
console.log(userO); // output: [['username', 'yanks'], ['password', 'mypassword123']]
console.log(userO[0]); // output: ['username', 'yanks']
console.log(users); // output: {username: 'yanks', password: 'mypassword123'}

// SUMMARY
// the object itself does not change to an array when you use the Object.entries() method. Instead, the method returns a new array containing the object's key-value pairs as sub-arrays, without modifying the original object.

// Eg
const user = {
  name: "Karamo",
  country: "The Gambia",
};

const entries = Object.entries(user);

console.log(entries);
// Output: [ [ 'name', 'Karamo' ], [ 'country', 'The Gambia' ] ]

console.log(Array.isArray(entries));
// Output: true (It is an array)

console.log(user);
// Output: { name: 'Karamo', country: 'The Gambia' } (Object remains unchanged)

// POINTS
/* 1. Object.entries() does not alter the original object */
/* 2. It returns a new array of key-value pairs */
/* 3. The returned array can be iterated over using loops like for...of or array methods like map() */
