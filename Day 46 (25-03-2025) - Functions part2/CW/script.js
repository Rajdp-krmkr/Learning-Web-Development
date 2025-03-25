// Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223

const reverseNumber = (number) => {
  const numberString = number.toString();

  let reversedNumberInString = "";
  let reversedNumber;

  for(let i = 1; i <= numberString.length; i++) {
    reversedNumberInString += numberString[numberString.length - i];
  }
  reversedNumber = parseInt(reversedNumberInString);
  console.log(
    "Input number is:",
    number,
    "and reversed number is:",
    reversedNumber
  );
};

reverseNumber(1249898124);
