let a = 10;

// console.log(++a);  // increment by 1 -> print
// console.log(a++);  // a is now 11
// console.log(--a);  // a is now 10

console.log(5 + ++a); // a is now 11
console.log(a);

let firstname = "John";
let lastname = "doe";
let fullname = firstname + lastname;

console.log(fullname);

let b = 9;

let sum = "9" + "9";
console.log(sum);

let sum2 = "9" + 18;
console.log(sum2);

let age = 25;
console.log("I am " + age + " years old."); // Output: "I am 25 years old."

let Studentname = "shyam";
let studentAge = 25;
console.log(`My name is ${Studentname} and I am ${age} years old`);
console.log(` 'Global warming' `);  // "Global warming"

let price = 100;
let quantity = 2;
let totalCost = "Total cost: $" + (price * quantity);
console.log(totalCost); // Output: "Total cost: $200"

let message = "Hello";
message += " World!";
console.log(message); // Output: "Hello World!"