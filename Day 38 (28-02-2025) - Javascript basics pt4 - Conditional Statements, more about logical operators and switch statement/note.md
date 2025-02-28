# **JavaScript Day 4 - Conditional Statements & Logical Operators**

## **1. Conditional Statements**
Conditional statements allow us to execute different code based on conditions.

### **1.1 if Statement**
The `if` statement executes a block of code only if a specified condition is true.

```javascript
let age = 18;
if (age >= 18) {
    console.log("You are eligible to vote.");
}
```

### **1.2 if-else Statement**
If the condition is false, the `else` block runs.

```javascript
let num = 10;
if (num % 2 === 0) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
}
```

### **1.3 if-else if-else Statement**
Allows multiple conditions to be checked.

```javascript
let marks = 75;
if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 75) {
    console.log("Grade: B");
} else if (marks >= 50) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}
```

## **2. Logical Operators**
Logical operators are used to combine multiple conditions.

### **2.1 AND Operator (&&)**
Returns `true` if both conditions are true.

```javascript
let age = 25;
let hasVoterID = true;
if (age >= 18 && hasVoterID) {
    console.log("You can vote.");
} else {
    console.log("You cannot vote.");
}
```

### **2.2 OR Operator (||)**
Returns `true` if at least one condition is true.

```javascript
let isSunny = true;
let hasUmbrella = false;
if (isSunny || hasUmbrella) {
    console.log("You can go outside.");
} else {
    console.log("Stay indoors.");
}
```

### **2.3 NOT Operator (!)**
Negates a condition.

```javascript
let isRaining = false;
if (!isRaining) {
    console.log("Go for a walk!");
} else {
    console.log("Stay inside.");
}
```

## **3. Ternary Operator**
A shorter way to write `if-else` statements.

```javascript
let age = 20;
let message = (age >= 18) ? "Adult" : "Minor";
console.log(message);
```

## **4. Switch Statement**
Used for checking multiple possible values.

```javascript
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}
```

---
### **Classwork:**
1. Write a program that takes a number and checks if it's positive, negative, or zero.
2. Create a program that asks the user for their age and prints whether they are a child (0-12), teenager (13-19), adult (20-59), or senior (60+).
3. Implement a switch case that prints different messages based on the user's favorite color.

Happy Coding! 🚀