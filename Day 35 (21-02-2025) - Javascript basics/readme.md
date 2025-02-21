# **JavaScript - Day 1: Introduction & Basics**

## **What is JavaScript?**
JavaScript is a **programming language** used to add interactivity to web pages. It allows developers to make websites dynamic by responding to user actions, updating content, and controlling different elements of a webpage.

### **Why Learn JavaScript?**
- It runs in all web browsers without additional software.
- It helps make web pages interactive.
- It is widely used in web development for both frontend and backend.
- It is the foundation of modern web frameworks like React, Angular, and Vue.

---

## **Setting Up JavaScript**
JavaScript can be written in three ways:
1. **Inline JavaScript** (inside an HTML element)
   ```html
   <button onclick="alert('Hello, JavaScript!')">Click Me</button>
   ```

2. **Internal JavaScript** (inside `<script>` tags in an HTML file)
   ```html
   <script>
       console.log("Hello from JavaScript!");
   </script>
   ```

3. **External JavaScript** (Recommended, using an external `.js` file)
   ```html
   <script src="script.js"></script>
   ```

---

## **Variables in JavaScript**
Variables store data and allow us to reuse values. There are three ways to declare variables:

### **1. `var` (Old way, not recommended)**
- `var` is function-scoped, meaning it is only available inside the function where it is declared.
- It can be updated and redeclared within the same scope.
- Can sometimes lead to bugs due to unintended reassignments.

Example:
```js
var message = "Hello";
console.log(message);
var message = "Goodbye"; // Redeclaring is allowed
console.log(message);
```

### **2. `let` (Recommended for most cases)**
- `let` is block-scoped, meaning it only exists within `{}` (curly braces) where it was declared.
- Can be updated but **cannot be redeclared** in the same scope.

Example:
```js
let name = "Alice";
console.log(name);
name = "Bob"; // Allowed (value can change)
console.log(name);
```

### **3. `const` (Recommended for constant values)**
- `const` is also block-scoped but **cannot be reassigned**.
- Useful for values that should not change.

Example:
```js
const pi = 3.14159;
console.log(pi);
// pi = 3.14; // ❌ Error! Cannot reassign a constant
```

---

## **Data Types in JavaScript**
JavaScript has different types of data to store values.

### **1. String (Text values)**
```js
let greeting = "Hello, World!";
console.log(greeting);
```

### **2. Number (Numeric values)**
```js
let age = 25;
let price = 99.99;
console.log(age, price);
```

### **3. Boolean (True or False values)**
Booleans represent logical values: `true` or `false`.
```js
let isStudent = true;
let isRaining = false;
console.log(isStudent, isRaining);
```

### **4. Undefined (Variable declared but not assigned a value)**
```js
let myVar;
console.log(myVar); // undefined
```

### **5. Null (Explicitly empty value)**
```js
let emptyValue = null;
console.log(emptyValue);
```

### **6. Object (Key-value pairs for storing structured data)**
```js
let person = { name: "John", age: 30, city: "New York" };
console.log(person);
```

### **7. Array (List of values stored in a single variable)**
```js
let colors = ["Red", "Green", "Blue"];
console.log(colors);
```

---

## **Comparison of `var`, `let`, and `const`**
| Feature     | `var` | `let` | `const` |
|------------|-------|-------|---------|
| Scope      | Function-scoped | Block-scoped | Block-scoped |
| Redeclare? | Yes | No | No |
| Reassign? | Yes | Yes | No |
| Use case  | Avoid using | Use when value changes | Use when value should not change |

---

## **Your First JavaScript Code**
Try these in your browser's console (Press `F12` → Console Tab):
```js
console.log("Welcome to JavaScript!");
document.write("This is JavaScript in action!");
alert("JavaScript is fun!");
```

---

## **Assignment for Today**
1. **Write different variables using `var`, `let`, and `const`** and log them in the console.
2. **Create an object** that stores your name, age, and country.
3. **Try out `console.log()`, `document.write()`, and `alert()`** with different messages.

---

## **Next Class (Day 2): Operators & Expressions**
- Arithmetic Operators (`+`, `-`, `*`, `/`, `%`)
- Comparison Operators (`==`, `===`, `!=`, `<`, `>`)
- Logical Operators (`&&`, `||`, `!`)
- String Concatenation & Template Literals

Let's begin our JavaScript journey! 🚀

