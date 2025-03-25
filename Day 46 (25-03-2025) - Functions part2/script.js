//function can be stored in variables

const add = function (a, b) {
  return a + b;
};

console.log(add(2, 3));

//arrow functions
const multiply = (a, b) => {
  return a * b;
};

console.log(multiply(2, 3));

//Write a function that checks if a number is even or odd.

const odd_even = (number) => {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

console.log(odd_even(3));

let name = "Rajdeep";

function func() {
  let name = "Raj";
  console.log("Local variable " + name);
}

func();
console.log("Global variable: " + name);

// {
//   var variable = "Hello";
//   console.log(variable);
// }

// console.log(variable);

//function call before declaration

function greet() {
  console.log("Hello");
}

greet();

//function are not hoisted in case of const and let
// console.log(sayHello()); // Error: Cannot access 'sayHello' before initialization

// const sayHello = function () {
//   return "Say hello!";
// };

console.log(name2);
const name2 = "Rajdeep";
