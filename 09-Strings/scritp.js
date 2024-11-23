
// Strings
// Javascript strings are primitive and immutable: All string methods produce a new string without altering the original string.

let x;

const name = 'John';
const age = 35;

x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old '

// Template literals 
x = `Hello my name is ${name} and I am ${age} years old`


// String Properties and Methods
const s = new String('Hello World');

// The length or number of characters
x = s.length; // output 11

x = typeof s;

x = s.__proto__;

// Access value by key at a specific index using square brackets
x = s[0] // output H

//it return a index at a specific character
x = s.charAt(0) // output H *It is the same as index
s

// convert the string to uppercase
x = s.toUpperCase(); // output 'HELLO WORLD'

// convert the string to lowercase
x = s.toLowerCase(); // output 'hello world'

// To check the index of certain key and return -1 if index not found
x = s.indexOf('o') // output 4

x = s.substring(5, 2); // output 'Hello' *it starts from index[0] and ends at index[5]
console.log(x);
x = s.substring(7); // output orld *Here is started from index 7 to the last one

x = s.slice(-11, -9);  // Extracts a part of a string and returns it as a new string.

x = '    Hello Wold';

x = x.trim();  // output 'Hello world' *It remove the white space from the value

x = s.replace('World', 'John') // output 'Hello John' *You can use the 'replace' method to replace a value in string

x = s.includes('l') // output true *This method checks if a letter or word is included in the string and output a boolean value if letter or word you type is include it output 'True' of not include it output 'False'

x = s.valueOf();

x = s.split(' '); //  *It split a string into an array of substrings

// .Concat() /* It is used to join two or more strings together */
const y = "Good";
const z = "Morning";

const rest = y.concat(' ' , z)  /* output 'Good, Morning' */

console.log(y); // output 'Good'
console.log(z); // output 'Morning'
console.log(rest); // output 'Good, Morning'

// .repeat()
const mood = 'Happy! ';

console.log(`I feel ${mood.repeat(3)}`);
// Expected output: "I feel Happy! Happy! Happy! "


console.log(x);


// Capitalize Chalange
const myString = 'developer';

let myNewString;

// solution 1:
myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
// solution 2:
myNewString = myString[0].toUpperCase() + myString.substring(1);
// solution 3:
myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;
console.log(myNewString);




// EXAMPLES of String Properties and Methods
// 1: .Length property    **************************       .length

let userName = "pabi";

if (userName.length >= 6) {
    console.log("Username is valid");
}
else {
    console.log("Username must be at least 6 characters.");
}
// output "Username must be at least 6 characters."

// eg 2
let description = "This is a very long description text";
let maxLength = 20;
// let dot = "..."

if (description.length > maxLength) {
    console.log(`${description.substring(0, maxLength) + "..."}`);
}
else {
    console.log(description);
}
// output "This is a very long..."

// eg 3
const sentence = "Hello world from JavaScript!";
const spaceCount = sentence.split(" ").length - 1;
console.log(`Number of spaces: ${spaceCount}`);
// Output: Number of spaces: 3

// eg 4
let password = "p@b!_c@maz";

if (password.length >= 8) {
    console.log("Your password is strong.");
}
else {
    console.log("Your password must be at least 8 characters!");
}
// output "Your password is strong."

// eg 5
// This example checks if the last character of a sentence is a punctuation mark:

let statement = "This is a question?";

if (statement[statement.length - 1] === "?") {
    console.log("This is a question.");
}
else {
    console.log("This is not a question.");
}
// output "This is a question."

// For arrays or strings with indexing starting at 0:
// The first item is at index 0.
// The last item is at index length - 1.



// 2: Index[] or bracket notation  **************************    index[]
// eg 1
// You can check if a string contains a specific character at a certain index.
const quote = "Patience is Bitter but its fruit is sweet";

if(quote[1] === "a"){
    console.log("THe character at index 1 is 'a'");
}
else{
    console.log("The character at index 1 is not 'a'");
}
// output "The character at index 1 is 'a'"

// eg 2
// You can use a loop to iterate through each character in a string using bracket notation.

let word = "Looping";

for(let i = 0; i < word.length; i++){
    console.log(word[i]);
}
// output each character of the word "Looping" on a new line



// 2: .chartAt()        **************************      .chartAt()
// eg 1 // Access them by key
const accessMyKey = "Enthient";
console.log(accessMyKey.charAt(0)); // output "E"

// eg 2
const question = "How was your day?";

if(question.charAt(question.length - 1) === "?"){
    console.log("This is a question");
}
else{
    console.log("That's not a question");
}
// output "This is a question"



// 3: toUppercase()     **************************      .toUpperCase()
// eg 1
let greeting = "good morning";
let uppercaseGreeting = greeting.toUpperCase();
console.log(uppercaseGreeting); // output "GOOD MORNING"

// eg 2
let career = "Software Developer";
let uppercaseCareer = career.toUpperCase();
console.log(uppercaseCareer); // output "SOFTWARE DEVELOPER"

// eg 3
let language = "jaVaScript";
let uppercaseLanguage = language.toUpperCase();
console.log(uppercaseLanguage); // output "JAVASCRIPT"



// 4: .toLowerCase()      **************************     .toLowerCase()
// eg 1
let greetings = "Good Morning";
let lowercase = greetings.toLowerCase();
console.log(lowercase); // output "good morning

//eg 2
let userInput = "Admin";
let correctUsername = "admin";

if(userInput.toLowerCase() === correctUsername.toLowerCase()){
    console.log("Access granted."); 
 }
 else{
    console.log("Access denied.");  
 }
 // output "Access granted."

 // eg 3
 const greets = " HELLO, HOW ARE YOU DOING?";
 const lowerGreet = greets.toLowerCase().trim();
 console.log(lowerGreet); // output  "hello, how are you doing?"



// 4: indexOf()     **************************     .indexOf()
// eg 1

let str =  "Hello, my name is John";
let index = str.indexOf("my");  // because my starts at index 7 in str
console.log(index); // output 7 

// eg 2
const str2 = "Hello, how are you?";
const index2 = str.indexOf("bye");
// Since "bye" is not found in str, indexOf() returns -1.
console.log(index2); // Output: -1

// eg3 
const isJane = "Hello, my name is Jane";
// const index3 = isJane.indexOf("my");
if(isJane.indexOf("Jane") === 18){
    console.log("That's Jane");
}
else{
    console.log("That's not Jane");
}
// output 'That's Jane'  /* because the index of "Jane" is 18 */

// eg 4
// In simple form validation, you can use indexOf() to check if an email address contains an "@" symbol. While this is a basic check (not a full email validation), it’s a quick way to catch common mistakes.

function isValidEmail(email) {
    if(email.indexOf("@") === -1 || email.indexOf(".") === -1){
        return false;
    }
    return true;
}

console.log(isValidEmail("test@example.com"));
console.log(isValidEmail("invalidEmail.com"));

// eg 5

// 5: .Substring()     **************************      .Substring()
// eg 1

// Scenario: Comment Preview Feature
// Goal: Display only the first 100 characters of each comment to keep the layout clean.
// Implementation:
// Check the length of the comment.
// If it's longer than 100 characters, display a preview with "..." at the end.
// When users click "Read more," display the full comment.

function getCommentPreview(comment) {
    if(comment.length > 100){
        return comment.substring(0, 100) + "...";
    }
    return comment;
}

let comment =  "JavaScript is a versatile programming language used widely in web development. It enables dynamic content and is an essential skill for frontend developers.";
console.log(comment.length);

console.log(getCommentPreview(comment));

// console.log(getCommentPreview(comment));

// ternary
function formatMessage(message) {
    return message.substring(0, 250) + (message.length > 250 ? "..." : "");
}

// Example usage
const userMessage = "This is a very long message that exceeds the limit of 250 characters...";
console.log(formatMessage(userMessage)); // Outputs the first 250 characters

// eg 2
// Goal: Display a shortened version of the order ID (e.g., first 4 characters and last 4 characters) with a "..." in between for a cleaner UI.
// Implementation:
// Get the first few characters and the last few characters of the order ID.
// Concatenate them with "..." in the middle.

function getCommentPrev(orderID){

    // Get the first 4 and last 4 characters of the order ID
    let start = orderID.substring(0, 4);
    // Get the last 4 characters of the order ID
    let end = orderID.substring(orderID.length - 4);
    return `${start}...${end}`;
}

let orderID = "ABC8365342526XYZ";

console.log(getCommentPrev(orderID)); // output : ABC8...6XYZ

// eg 3
const str3 = "Padilla";

console.log(str3.length); // output 7
console.log(str3.substring(2, 6)); // output "dill"

// eg 4
let str4 = "Mouse";

console.log(str4.substring(str4.length - 3)); // output "use"
/* because this (str4.length - 3) will give out the the last three letters of the string */

// eg 5
let str5 = "Lets make Africa great";

console.log(str5.substring(9)); // output "Africa great"
console.log(str5.indexOf("A")); // output "10"
console.log(str5.charAt(10)); // output "A"

// eg 5
let str6 = "Lets make Africa great again";

let first = str6.substring(0, 9); // "Lets make"
let second = str6.substring(str6.length - 12); // "great again"

let output = `${first}...${second}`;

console.log(output); // output "Lets make... great again"


// 6: .replace()     **************************      .replace()
// eg 1
let rep = "How is your day!";
let reply = rep.replace("is", "was"); /* it replace "is" to "was" */

console.log(rep); 
console.log(reply);  // output "How was your day"
y
// eg 2
// Input Sanitization: Use .replace() to remove or replace unwanted characters from user input (e.g., sanitizing form data).

function sanitizeInput(input) {
    return input.replace(/[^a-zA-Z0-9\s!]/g, '');
}

let inputUser = "John Ph!ils20@23!";
const sanitizedInput = sanitizeInput(inputUser);

console.log(sanitizedInput); // output "John Phils2023"

// eg 3
function  replaceCharacters(myInput) {

    return myInput.replace(/[^a-zA-Z0-9\s]/g, "");
}

let myInput = "What a great post!, I love it!";

const replacedCharacters = replaceCharacters(myInput);

console.log(replacedCharacters); // output "What a great post I love it"

// eg 4
let originalStr = "Hello, World";

let newStr = originalStr.replace("World", "Gambia");
console.log(newStr);  // output "Hello, Gambia"

// eg 5
let text = "Hello, World! Welcome to the smiling coast of West world";

let newText = text.replace(/world/gi, "Gambia");
console.log(newText);  // output "Hello, Gambia! Welcome to the smiling coast of West Gambia"

// eg 6
// This flag allows the regular expression to match all occurrences of the pattern in the string, rather than stopping after the first match.
let catText = "The cat sat on the mat. The cat is happy.";

let newCatText = catText.replace(/Cat/gi, "dog");
console.log(newCatText); // output 

// NOTE => In this example, both "Cat" and "cat" are replaced with "dog" due to the "i" flag, and since "g" is included, it replaces both occurrences in the string.


// 7: .includes()     ****************************      .includes()
// The includes() method returns a boolean value indicating whether a string includes the specified value.
// eg 1
let ifInclude = "Hello world, welcome to the universe";
let ifIncluded = ifInclude.includes("welcome")
console.log(ifIncluded); // true /* Check if a string includes "welcome" */


// eg 2
let faulWords = "Don't be a fool!";
let words = ["stupid", "fool",];

let correctSentence = words.some(word => faulWords.includes(word))

if(correctSentence){
    console.log("That's a bad word");
}
else{
    console.log(faulWords);
}
// output "That's a bad word"


// eg 3
// When a form requires email addresses from specific domains, .includes() helps to validate if the entered email includes an allowed domain.

const allowedDomains = ["@example.com", "@test.org"];
const email = "user@example.com";

const isAllowedDomain = allowedDomains.some(domain => email.includes(domain));

if (isAllowedDomain) {
  console.log("Email domain is allowed.");
} else {
  console.log("Email domain is not allowed.");
}
// Output: "Email domain is allowed."


// 8: .valueOf()     ****************************      .valueOf()
let meet = "hello karamo";

// console.log(me);
meet = s.valueOf()

console.log(s);
// console.log("hello");

// 8: .split()     ****************************      .split()  

//     string.split(separator, limit);

// If you need to split up a string into an array of substrings, then you can use the JavaScript split() method.

// eg1 
const mySplite = "I love freeCodeCamp";

// Using the split method to split the string into an array of entire string
console.log(mySplite.split()); // output  ["I", "love", "freeCodeCamp"]

// Split up string to individual characters method ** mySplit.split('') ** 
console.log(mySplite.split('')); // output   ["I", "l", "o", "v", "e", " ", "f

// split up string into words method ** mySplit.split(' ') ** 
console.log(mySplite.split(' ')); // output   ["I", "love", "freeCodeCamp"]

// Examples using the optional limit parameter
// In this example, I am going to use the limit parameter to return an array of just the first word of the sentence "I love freeCodeCamp".
console.log(mySplite.split('', 1));  // output ["I"]

// If I change the limit to be zero, then the return value would be an empty array.
console.log(myString.split('', 0)); // output [] enpty array

// eg2 /* In this example we will learn how to split a string into an array of substrings using the split method. And how to access it value using index. */

const complement = "The quick brown fox jumps over the lazy dog.";

const complement1 = complement.split(' ')
console.log(complement1); // output ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."]
console.log(complement1[0]);  // output "The" /* first word of the sentence */ with index 0

const complement0 = "The quick brown fox jumps over the lazy dog.";
const complement2 = complement0.split('') 

console.log(complement2); // output ["T", "h", "e", " ", "q", "u", "i", "c", "k", " ", "b", "r", "o"...
console.log(complement.charAt(0)); // "T" /* returns the first character of the string */
// console.log(complement[2]);

const complement00 = "The quick brown fox jumps over the lazy dog.";
const complement3 = complement00.split();
console.log(complement3); // output ['The quick brown fox jumps over the lazy dog.']

// examples
// eg1
// Suppose you’re creating a form where users enter tags (for instance, in a blog post form where users tag a post by topic, such as “JavaScript, CSS, HTML”). Using split() allows you to take this input as a single string and convert it to an array of tags.

const tagInput = "  Java, React,   CSS";

const tags = tagInput.split(',').map(tag => tag.trim());
console.log(tagInput);
console.log(tags);
// The split(",") divides the string at each comma.
// map(tag => tag.trim()) is used to remove any extra spaces, which ensures each tag is clean and formatted consistently.


const tagInputs = " Java, React. CSS; HTML";

const tag = tagInputs.split(/[,;.]+/).map(tag => tag.trim())
console.log(tag); // output ["Java", "React", "CSS", "HTML"]

// The regular expression /[,;.]+/ matches one or more of the characters comma, semicolon


// 8: .concat()     ****************************      .concat()  
const username = "karamo";
const welcomeMessage = "Hello, ".concat(username,  "! welcome to the plateform")
console.log(welcomeMessage); // Output: "Welcome, John! We’re glad to have you back."




// eg 3
// In this example, we have the string "freeCodeCamp". If we wanted to reverse the word, then we can chain together the split(), reverse() and join() methods to return the new reversed string.
// const eg2 = "CodeCademy";
// const reve = eg2.split('').reverse().join();

// console.log(reve);

// console.log(eg2.split());

// const str8 = 'mañana mañana'
// const reversedStr = str8.split('').reverse().join('')

// console.log(reversedStr)