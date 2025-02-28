# **JavaScript - Day 2: Variables & Operators**

## **Recap of Day 1**

- What is JavaScript?
- How to set up JavaScript in a project.
- Introduction to variables and data types.

---

## **Operators in JavaScript**

Operators perform operations on values and variables.

### **1. Arithmetic Operators** (Perform calculations)

| Operator | Description         | Example      |
| -------- | ------------------- | ------------ |
| `+`      | Addition            | `5 + 3 = 8`  |
| `-`      | Subtraction         | `10 - 4 = 6` |
| `*`      | Multiplication      | `6 * 2 = 12` |
| `/`      | Division            | `10 / 2 = 5` |
| `%`      | Modulus (Remainder) | `10 % 3 = 1` |
| `**`     | Exponentiation      | `2 ** 3 = 8` |

Example:

```js
let a = 10, b = 3;
console.log(a + b); // 13
console.log(a % b); // 1
```

### **2. Comparison Operators** (Return Boolean values: `true` or `false`)

| Operator | Description                        | Example              |
| -------- | ---------------------------------- | -------------------- |
| `==`     | Equal (loose comparison)           | `5 == '5' // true`   |
| `===`    | Strict Equal (checks type & value) | `5 === '5' // false` |
| `!=`     | Not Equal                          | `5 != '5' // false`  |
| `!==`    | Strict Not Equal                   | `5 !== '5' // true`  |
| `>`      | Greater than                       | `10 > 5 // true`     |
| `<`      | Less than                          | `10 < 5 // false`    |
| `>=`     | Greater than or equal              | `10 >= 10 // true`   |
| `<=`     | Less than or equal                 | `5 <= 10 // true`    |

Example:

```js
console.log(5 == "5");  // true
console.log(5 === "5"); // false
console.log(10 > 5);    // true
```

### **3. Logical Operators** (Used for conditions)

| Operator | Description | Example                    |            |         |   |                  |
| -------- | ----------- | -------------------------- | ---------- | ------- | - | ---------------- |
| `&&`     | Logical AND | `(true && false) // false` |            |         |   |                  |
| \`       |             | \`                         | Logical OR | \`(true |   | false) // true\` |
| `!`      | Logical NOT | `!(true) // false`         |            |         |   |                  |

Example:

```js
let x = true, y = false;
console.log(x && y); // false
console.log(x || y); // true
console.log(!x);     // false
```

### **4. Assignment Operators** (Assign values to variables)

| Operator | Example  | Equivalent To |
| -------- | -------- | ------------- |
| `=`      | `x = 5`  | `x = 5`       |
| `+=`     | `x += 2` | `x = x + 2`   |
| `-=`     | `x -= 3` | `x = x - 3`   |
| `*=`     | `x *= 4` | `x = x * 4`   |
| `/=`     | `x /= 2` | `x = x / 2`   |
| `%=`     | `x %= 3` | `x = x % 3`   |

Example:

```js
let number = 10;
number += 5; // number = number + 5;
console.log(number); // 15
```

---

## **Practice Exercises**

1. Declare a variable `score` using `let` and assign it a number. Try modifying it.
2. Declare a constant `country` using `const` and assign it a string. Try modifying it (it should give an error).
3. Try out different arithmetic operations using `+`, `-`, `*`, `/`, `%`, and `**`.
4. Compare two numbers using `==`, `===`, `!=`, and `!==`.
5. Use logical operators `&&`, `||`, and `!` with boolean values.

---

## **Next Class (Day 3): Strings & Template Literals**

- Working with strings
- String concatenation & interpolation
- String methods (length, toUpperCase, toLowerCase, trim, split, etc.)

Let's keep learning! 🚀

