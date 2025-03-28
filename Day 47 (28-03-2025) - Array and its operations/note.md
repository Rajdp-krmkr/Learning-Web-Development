# JavaScript Day 10 - Array Operations

## Introduction to Arrays

An **array** is a data structure that allows you to store multiple values in a single variable. Arrays in JavaScript can hold different data types.

### Declaring an Array

```js
let fruits = ["Apple", "Banana", "Cherry"];
let numbers = [1, 2, 3, 4, 5];
let mixedArray = ["Hello", 10, true, null];
```

## Basic Array Operations

### 1. Accessing Elements

Array elements can be accessed using their index (starting from 0).

```js
console.log(fruits[0]); // Apple
console.log(numbers[2]); // 3
```

### 2. Modifying Elements

```js
fruits[1] = "Mango";
console.log(fruits); // ["Apple", "Mango", "Cherry"]
```

### 3. Finding the Length of an Array

```js
console.log(fruits.length); // 3
```

## Array Methods

### 1. Adding and Removing Elements

- **push()** - Adds an element to the end
- **pop()** - Removes the last element
- **unshift()** - Adds an element to the beginning
- **shift()** - Removes the first element

```js
fruits.push("Grapes"); // Adds "Grapes"
fruits.pop(); // Removes last element
fruits.unshift("Orange"); // Adds "Orange" to the beginning
fruits.shift(); // Removes first element
```

### 2. Looping Through Arrays

#### Using `for` Loop

```js
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

#### Using `forEach()`

```js
fruits.forEach(function(item) {
    console.log(item);
});
```

### 3. Searching in Arrays

- **indexOf()** - Finds the index of an element
- **includes()** - Checks if an element exists

```js
console.log(fruits.indexOf("Banana")); // -1 if not found
console.log(fruits.includes("Apple")); // true
```

### 4. Joining and Splitting Arrays

- **join()** - Converts an array into a string
- **split()** - Converts a string into an array

```js
let joined = fruits.join(" - ");
console.log(joined); // "Apple - Banana - Cherry"
```

### 5. Extracting and Replacing Elements

- **slice(start, end)** - Extracts a portion of an array
- **splice(start, deleteCount, items...)** - Adds/removes elements

```js
let slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // Extracts elements from index 1 to 2
```

```js
fruits.splice(1, 1, "Kiwi"); // Replaces 1 element at index 1
```

### 6. Combining Arrays

- **concat()** - Merges two arrays
- **spread operator (****`...`****)** - Unpacks array elements

```js
let moreFruits = ["Pineapple", "Peach"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits);
```

```js
let allFruitsSpread = [...fruits, ...moreFruits];
console.log(allFruitsSpread);
```

## Summary

- Arrays store multiple values.
- Use `push()`, `pop()`, `shift()`, and `unshift()` to modify arrays.
- Use `slice()` and `splice()` to extract or modify elements.
- Loop through arrays using `for` loops or `forEach()`.
- Use `indexOf()` and `includes()` to search within arrays.

### Homework

1. Create an array of 5 favorite movies and print each one using `forEach()`.
2. Write a function that takes an array of numbers and returns a new array with only even numbers.
3. Merge two arrays using both `concat()` and the spread operator.

