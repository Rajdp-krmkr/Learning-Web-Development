// Print numbers from 1 to 20 using a for loop.

// for (let i = -1; i <= 25; i++) {
//   console.log(i);  //for loop is used where we know the number of execution
// }

// let i = 0;

// while (i <= 5) {
//   console.log(i); //for loop is used where we don't know the number of execution
//   i++;
// }

// let j = 0;

// do {
//   console.log(j);
//   j++
// } while (j < 5);

const numbers = [10, 20, 30, 40]; //251 employees

numbers.forEach((item) => {
  console.log(item);
});

for (let i = 0; i < numbers.length(); i++) {
  console.log(numbers[i]);
}

// numbers.forEach(function (item) {
//   console.log(item);
//   console.log(item + 10);
// });
let fruits = ["Apple", "Banana", "Cherry"];
for (let fruit of fruits) {
  console.log(fruit);
}

for (let number in numbers) {
  console.log(number);
}

//Print only even numbers from 1 to 20 using a loop.
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
