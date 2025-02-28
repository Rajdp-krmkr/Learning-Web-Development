let age = 25;
let price = 99.99;
console.log(age, price);

let x = true;
let y = false;
console.log(x, y);

let person_x; // it has no existence
console.log(person_x); // undefined: variable is declared but not assigned a value

let person_y = null; // it has existence but it is empty
console.log(person_y); // null: variable is declared and assigned a null value

let student = { name: "Ram", age: 25, country: "India" };
// object is student, and "name", "age", "country" are properties of the object
console.log(student); //printing the whole object
console.log(student.name);  //printing the property "name" of the object

let fruits = ["Apple", "Banana", "Mango"];
// array =      [0 , 1 , 2]
console.log(fruits); //printing the whole array
console.log(fruits[2]); //printing the first element of the array