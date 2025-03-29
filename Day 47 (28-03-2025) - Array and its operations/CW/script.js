//steps:
//1. create a function that takes a numeric value as an argument
//2. Convert the number into string
//3. Split the string into an array of characters
//4. Iterate throught the array of characters and convert them into numerical values.
//5. Check if the number is even or odd.
//6. if the number is even, check next element is even or odd
//7. if the next element is even, add a dash between them
//8. join the array into a string and return it

function addDashesInEvens(numberAsString) {
  const numberArray = numberAsString.split("");
  console.log(numberArray);
  numberArray.forEach((element) => {
    const number = parseInt(element);
    if (number % 2 === 0) {
      if (numberArray[numberArray.indexOf(element) + 1] % 2 == 0) {
        numberArray.splice(numberArray.indexOf(element) + 1, 0, "-");
      }
    }
  });

  const result = numberArray.join("");
  return result;
}

console.log(addDashesInEvens("085723564"));
