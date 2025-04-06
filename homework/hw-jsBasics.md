Sure! Here’s a more detailed version of the 12 JavaScript tasks based on all the concepts taught so far, from basic syntax and DOM to asynchronous JavaScript and ES6+ features:


---

Task 1: Loop to Print Numbers

Objective: Understand and use for loops.
Instructions:

Write a for loop that starts from 1 and goes up to 50.

Print each number on the console using console.log.



---

Task 2: Function and Scope

Objective: Learn about local and global scope.
Instructions:

Create a function called greetUser.

Inside the function, declare a variable message = "Hello from inside!".

Log the message inside the function.

Try to log the message variable outside the function and observe the error. Write a note explaining why it failed (scope).



---

Task 3: Array Operations

Objective: Understand array manipulation.
Instructions:

Create an array named fruits with at least 5 fruit names.

Use .push() to add a fruit to the end.

Use .shift() to remove the first fruit.

Use .sort() to sort the array alphabetically.

Print the array at each step to observe changes.



---

Task 4: Form Handling

Objective: Handle form submission and prevent default behavior.
Instructions:

Create an HTML form with two inputs: Name and Email, and a submit button.

Using JavaScript:

Select the form using querySelector.

Add a submit event listener.

Use event.preventDefault() to stop page reload.

Get the values from the inputs and log them.




---

Task 5: Keyboard Event Listener

Objective: Capture and handle keyboard input events.
Instructions:

Create an input field on the webpage.

Add a keydown or keyup event listener.

Each time a key is pressed, log the key name using event.key.



---

Task 6: Object Destructuring

Objective: Practice destructuring of objects.
Instructions:

Create an object called book with keys: title, author, year.

Use object destructuring to extract these values into separate variables.

Print them individually on the console.



---

Task 7: Spread & Rest Operators

Objective: Learn how to work with multiple values and combine data.
Instructions:

Write a function called sumAll that accepts any number of numbers using the ...rest operator.

Inside the function, use a loop or .reduce() to calculate and return the sum.

Call the function with 3–5 numbers and log the result.

Also, create two arrays: arr1 = [1, 2, 3], arr2 = [4, 5, 6].

Use the spread operator to merge them into one array: [1,2,3,4,5,6].



---

Task 8: Module Systems (ES6 vs CommonJS)

Objective: Understand and compare module systems.
Instructions:

Create two files:

1. utils.js — Export a function greet() using both ES6 and CommonJS styles.


2. main.js — Import and call the greet() function.




For ES6+:

// utils.js
export function greet() {
  console.log("Hello from ES6 Module");
}
// main.js
import { greet } from './utils.js';
greet();

For CommonJS:

// utils.js
module.exports = {
  greet: () => console.log("Hello from CommonJS")
};
// main.js
const { greet } = require('./utils');
greet();


---

Task 9: Promise Usage

Objective: Learn how Promises work in asynchronous JavaScript.
Instructions:

Create a function called delayTask() that returns a Promise.

The Promise should resolve() after 3 seconds with a message like "Task finished".

Call the function and use .then() to log the message.



---

Task 10: Fetch API with Async/Await

Objective: Work with real API and async/await syntax.
Instructions:

Use the fetch() API to get data from JSONPlaceholder.

Use async function getData() and await to get the data.

Log the list of posts in the console.



---

Task 11: To-Do List App

Objective: Combine DOM manipulation and event handling.
Instructions:

Create a simple UI with:

An input box

A button labeled "Add Task"

A ul element to display tasks


When the button is clicked:

Read the input value

Create a new <li> with the task

Append it to the ul


Optional: Add a delete option when a task is clicked.



---

Task 12: Countdown Timer

Objective: Work with setInterval() and DOM.
Instructions:

Create a function countdown(seconds) that takes the number of seconds.

Show the countdown on the webpage, updating every second.

When it reaches 0, display "Time's Up!".

Use setInterval() to handle the countdown logic.



---

Let me know if you want printable PDFs, or interactive versions of these tasks!

