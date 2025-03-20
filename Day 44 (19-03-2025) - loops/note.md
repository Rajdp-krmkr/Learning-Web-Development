# JavaScript Day 8: Loops in JavaScript

## 🔄 Introduction to Loops
Loops allow us to execute a block of code **multiple times** without writing it repeatedly. They help in automating repetitive tasks.

## 1️⃣ **Types of Loops in JavaScript**
### **1. `for` Loop**
The `for` loop is used when the number of iterations is known.

**Syntax:**
```javascript
for(initialization; condition; increment/decrement) {
    // Code to be executed
}
```

**Example:**
```javascript
for(let i = 1; i <= 5; i++) {
    console.log("Iteration number:", i);
}
```
🔹 **How it Works?**
- **Initialization**: `let i = 1` → Start at 1.
- **Condition**: `i <= 5` → Run until `i` reaches 5.
- **Increment**: `i++` → Increase `i` by 1 after each loop.

### **2. `while` Loop**
The `while` loop is used when the number of iterations is **not known** beforehand.

**Syntax:**
```javascript
while(condition) {
    // Code to execute
}
```

**Example:**
```javascript
let count = 1;
while(count <= 5) {
    console.log("Count is:", count);
    count++;
}
```
🔹 **How it Works?**
- The loop continues **as long as the condition is true**.
- If the condition is false at the beginning, the loop **never runs**.

### **3. `do...while` Loop**
This loop executes **at least once**, even if the condition is false.

**Syntax:**
```javascript
do {
    // Code to execute
} while(condition);
```

**Example:**
```javascript
let num = 6;
do {
    console.log("Number is:", num);
    num++;
} while(num <= 5);
```
🔹 **Why Use This?**
- Ensures **one-time execution** even if the condition is false.

### **4. `forEach` Loop (Array Iteration)**
This method loops through an **array**.

**Example:**
```javascript
let numbers = [10, 20, 30, 40];
numbers.forEach(function(num) {
    console.log("Value:", num);
});
```

### **5. `for...of` Loop (Iterating Over Arrays and Strings)**
The `for...of` loop is used to iterate over **arrays and strings**.

**Example:**
```javascript
let fruits = ["Apple", "Banana", "Cherry"];
for(let fruit of fruits) {
    console.log(fruit);
}
```

### **6. `for...in` Loop (Iterating Over Objects)**
The `for...in` loop is used for **iterating over object properties**.

**Example:**
```javascript
let person = {name: "John", age: 25, city: "New York"};
for(let key in person) {
    console.log(key + ":" + person[key]);
}
```

---
## ⏭️ **Break and Continue Statements**
### **`break` Statement (Exit Loop)**
The `break` statement **stops** the loop immediately.

**Example:**
```javascript
for(let i = 1; i <= 10; i++) {
    if(i === 5) {
        break; // Stops when i = 5
    }
    console.log(i);
}
```
**Output:** `1 2 3 4`

### **`continue` Statement (Skip an Iteration)**
The `continue` statement **skips** the current iteration and moves to the next one.

**Example:**
```javascript
for(let i = 1; i <= 5; i++) {
    if(i === 3) {
        continue; // Skips when i = 3
    }
    console.log(i);
}
```
**Output:** `1 2 4 5`

---
## 🏆 **Practice Tasks**
1️⃣ Print numbers from **1 to 20** using a `for` loop.
2️⃣ Print only **even numbers** from `1 to 20` using a loop.
3️⃣ Iterate over an array of names and print each name.
4️⃣ Create an object with 3 properties and use a `for...in` loop to print the values.
5️⃣ Use a `while` loop to count from `10 to 1`.
6️⃣ Write a `for` loop that stops when it finds the number `7`.
7️⃣ Use `forEach` to print all items in an array.

---
## 🎯 **Conclusion**
- Loops **automate repetitive tasks**.
- `for`, `while`, `do...while`, `forEach`, `for...of`, and `for...in` serve different purposes.
- `break` stops the loop, while `continue` skips the current iteration.

✨ Next Class: **Functions & Scope in JavaScript** ✨

