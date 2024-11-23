let x;

let d = new Date();

x = d.toString();

x = d.getTime(); // It get the time
x = d.valueOf();

x = d.getFullYear(); // It gets the full Year
console.log(x);

x = d.getMonth() + 1; // It gets the Month
console.log(x);

x = d.getDate(); // It gets the Date of the Month
console.log(x);

x = d.getDay(); // It gets the Day of the week
console.log(x);

x = d.getHours(); // It get the Hour
console.log(x);

x = d.getMinutes(); // It gets the Minute
console.log(x);

x = d.getSeconds(); // It gets the seconds
console.log(x);

x = d.getMilliseconds(); // It get the Millisecons
console.log(x);

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
console.log(x);

x = Intl.DateTimeFormat('en-US').format(d);
console.log(x);
x = Intl.DateTimeFormat('en-GM').format(d);
console.log(x);
x = Intl.DateTimeFormat('default').format(d);
console.log(x);

x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);
console.log(x);

x = d.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
      
});

console.log(x);
// console.log(x, typeof x);