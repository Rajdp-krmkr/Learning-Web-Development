let fruits = ["apple", "banana", "banana", "cherry", "date"];
console.log(fruits.length); // Output: 4
fruits[0] = "mango";
console.log(fruits);

// fruits.push("Grapes"); // Adds "Grapes"
// fruits.pop(); // Removes last element
// fruits.unshift("Orange"); // Adds "Orange" to the beginning
// fruits.shift(); // Removes first element

fruits.push("Grapes"); // Adds "Grapes"
console.log(fruits); // Output: ["mango", "banana", "cherry", "date", "Grapes"]

fruits.pop(); // Removes last element
console.log(fruits); // Output: ["mango", "banana", "cherry", "date"]

fruits.unshift("Orange"); // Adds "Orange" to the beginning
console.log(fruits);

fruits.shift();
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

fruits.forEach((element) => {
  console.log(element);
});

fruits.forEach(function (fruit) {
  console.log(fruit);
});

console.log(fruits.indexOf("Guava")); // Output: 1

console.log(fruits.includes("banana")); // Output: true
console.log(fruits.includes("Guava")); // Output: false

console.log(fruits.indexOf("banana")); // Output: 1

// console.log([1, 2, 3, 4].join("%"));

// const Course = "We b devel%opment";

// const x = Course.split("%");\\

const fruitsString = fruits.join("=");
console.log(fruitsString);

const fruitsArray = fruitsString.split("=");

console.log(fruitsArray);
