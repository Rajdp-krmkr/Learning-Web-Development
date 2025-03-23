# JavaScript Day 9: Functions and Scope

## 1. Introduction to Functions
Functions in JavaScript are reusable blocks of code designed to perform a particular task. They help in code organization, reusability, and maintainability.

### 1.1 Function Declaration
A function can be declared using the `function` keyword:
```javascript
function greet() {
    console.log("Hello, world!");
}

// Calling the function
greet();
```

### 1.2 Function Parameters and Arguments
Functions can accept parameters to make them more dynamic.
```javascript
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Alice"); // Output: Hello, Alice!
```

### 1.3 Function Return Values
Functions can return values using the `return` keyword.
```javascript
function add(a, b) {
    return a + b;
}

let sum = add(5, 3);
console.log(sum); // Output: 8
```

## 2. Function Expressions
Functions can also be stored in variables.
```javascript
const multiply = function(a, b) {
    return a * b;
};

console.log(multiply(4, 2)); // Output: 8
```

## 3. Arrow Functions (ES6)
Arrow functions provide a shorter syntax for writing functions.
```javascript
const subtract = (a, b) => a - b;
console.log(subtract(10, 4)); // Output: 6
```

## 4. Function Scope
Scope determines where variables can be accessed in JavaScript.

### 4.1 Global Scope
A variable declared outside any function is in the global scope and can be accessed anywhere.
```javascript
let globalVar = "I am global";

function showGlobal() {
    console.log(globalVar);
}

showGlobal(); // Output: I am global
```

### 4.2 Local Scope (Function Scope)
A variable declared inside a function is only accessible within that function.
```javascript
function localScope() {
    let localVar = "I am local";
    console.log(localVar);
}

localScope(); // Output: I am local
console.log(localVar); // Error: localVar is not defined
```

## 5. Block Scope (let & const)
Variables declared with `let` and `const` have block scope, meaning they are only accessible within the block `{}` they were declared in.
```javascript
{
    let blockVar = "Inside block";
    console.log(blockVar); // Output: Inside block
}

console.log(blockVar); // Error: blockVar is not defined
```

## 6. Function Hoisting
Function declarations are hoisted, meaning they can be used before they are defined.
```javascript
greet(); // Output: Hello!

function greet() {
    console.log("Hello!");
}
```
However, function expressions are **not** hoisted:
```javascript
console.log(sayHello()); // Error: Cannot access 'sayHello' before initialization

const sayHello = function() {
    return "Hello!";
};
```

## 7. Practice Exercises
1. Write a function that takes a number as input and returns its square.
2. Create an arrow function that multiplies two numbers.
3. Write a function that checks if a number is even or odd.
4. Implement a function that takes two strings and returns their concatenation.
5. Explain the difference between function declarations and function expressions.

---
This concludes **Day 9** of JavaScript learning. Next class, we will dive into **Arrays and their operations**! 🚀

