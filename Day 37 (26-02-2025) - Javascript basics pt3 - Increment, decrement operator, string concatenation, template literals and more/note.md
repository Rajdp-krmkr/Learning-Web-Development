# **JavaScript - Day 3 Notes**

## **1. Increment and Decrement Operators**
Increment (`++`) and Decrement (`--`) operators are used to increase or decrease the value of a variable by `1`.

### **Post-Increment and Pre-Increment**
- **Post-Increment (`variable++`)**: Returns the value first, then increases it.
- **Pre-Increment (`++variable`)**: Increases the value first, then returns it.

#### **Example:**
```javascript
let num = 5;
console.log(num++); // Output: 5 (Prints first, then increases)
console.log(num);   // Output: 6 (Value is now incremented)

let count = 3;
console.log(++count); // Output: 4 (Increases first, then prints)
```

### **Post-Decrement and Pre-Decrement**
- **Post-Decrement (`variable--`)**: Returns the value first, then decreases it.
- **Pre-Decrement (`--variable`)**: Decreases the value first, then returns it.

#### **Example:**
```javascript
let value = 10;
console.log(value--); // Output: 10 (Prints first, then decreases)
console.log(value);   // Output: 9 (Value is now decremented)

let score = 7;
console.log(--score); // Output: 6 (Decreases first, then prints)
```

---

## **2. String Concatenation**
String concatenation is used to combine strings using the `+` operator.

#### **Example:**
```javascript
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName); // Output: "John Doe"
```

### **Concatenation with Numbers**
If a number is added to a string, it is converted to a string.

#### **Example:**
```javascript
let age = 25;
console.log("I am " + age + " years old."); // Output: "I am 25 years old."
```

---

## **3. Template Literals (Backticks)**
Template literals allow embedding variables in a string using backticks (`` ` ``) and `${}` syntax.

#### **Example:**
```javascript
let name = "Alice";
let city = "New York";
console.log(`Hello, my name is ${name} and I live in ${city}.`);
// Output: "Hello, my name is Alice and I live in New York."
```

---

## **4. More Operations with Variables**

### **Combining Strings and Numbers**
```javascript
let price = 100;
let quantity = 2;
let totalCost = "Total cost: $" + (price * quantity);
console.log(totalCost); // Output: "Total cost: $200"
```

### **Using `+=` Operator for Concatenation**
```javascript
let message = "Hello";
message += " World!";
console.log(message); // Output: "Hello World!"
```

---

## **Classwork for Day 3**
Try the following exercises:

1. Declare a variable `count` with an initial value of `10`. Use both post-increment and pre-increment on it and observe the output.
2. Concatenate your first name and last name using `+` and print it.
3. Write a program that asks for a user's birth year, calculates their age, and displays it using template literals.
4. Use `+=` to build a sentence dynamically.

**Submission:** Solve the exercises in your browser console or in a `.js` file and bring it to the next class! 🚀

