
// Destructure Objects
const firstName = "John";
const lastName = "Doe";
const age = 30;

const person = {
    firstName,
    lastName: lastName,
    age,
}

console.log(person.lastName); // output: Doe;

// Destructuring an Object
const todo = {
    id: 1,
    title: "Take out trash",
    user: {
        name: "John",
        lName: "Doe"
    }
}
console.log(todo.id); // output: 1;

const {id: todoId, title, user: { name, lName }} = todo; // destructuring
// renaming the id key to todoId 
 
console.log(todoId, title, name, lName); // output : 1 Take out 'trash' 'John' 'Doe';
console.log(name, lName); // output: John Doe;
console.log(todoId); // output: 1;

// NOTE
// When you use the {} curly braces syntax you are destructuring an object
// When you use the : colon syntax you are renaming



// Desctructure Arrays
const numbers = [25, 26, 27, 28];
const [first, second, ...rest] = numbers;
console.log(first, second, rest);


// 3:38:00