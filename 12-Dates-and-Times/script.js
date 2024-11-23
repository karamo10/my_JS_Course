//
let d;

d = new Date();

d = d.toString();

d = new Date(2025, 0, 25, 12, 30, 0);
console.log(d);

d = new Date('2025-01-25T12:30:00');
console.log(d);

d = new Date('01/25/2025 12:30:00');
console.log(d);


d = Date.now();

d = new Date();
d = d.getTime();
d = d.valueOf();

d = new Date(1731509456059);

d = Math.floor(Date.now() / 1000)
console.log(d);

const future = new Date(2024, 11, 31, 12, 0, 0);

const futureTime = future.getTime();

const today = new Date().getTime();

const t = futureTime - today;

let oneDay = 24*60*60*1000;
console.log(oneDay);
let oneHour = 60*60*1000;
console.log(oneHour);
let oneMin = 60*1000;
console.log(oneMin);

let days = Math.floor(t / oneDay)
let hour = Math.floor((t % oneDay) / oneHour)

console.log(days);
console.log(hour);

const g = new Date(86400000);
const h = new Date(3600000);
const i = new Date(60000);
console.log(g);
console.log(h);
console.log(i);

console.log(t % oneDay / oneHour);

console.log(t / oneDay);  // days left
console.log(Math.floor((t % oneDay) / oneHour));  // hours left
console.log(Math.floor(t % oneHour / oneMin)); // minutes left
console.log(Math.floor((t % oneMin) / 1000)); // seconds left


