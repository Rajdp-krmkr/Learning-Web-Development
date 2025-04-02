# Import & Export in JavaScript

## 1. Introduction
JavaScript provides two primary module systems:
1. **ES6 Modules (ESM)** – Uses `import` and `export`.
2. **CommonJS (CJS)** – Uses `require` and `module.exports` (mainly in Node.js).

## 2. Exporting in JavaScript (ES6 Modules)
We can export variables, functions, or classes from one file and import them into another file.

### 2.1 Named Export
Exports multiple values from a module.

#### Example:
```js
// file: mathFunctions.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

#### Importing Named Exports:
```js
// file: app.js
import { add, subtract } from "./mathFunctions.js";
console.log(add(5, 3));      // Output: 8
console.log(subtract(5, 3)); // Output: 2
```

✅ **Note:** Use curly braces `{}` for named exports.

### 2.2 Default Export
Exports a single value per module.

#### Example:
```js
// file: greeting.js
const greet = (name) => `Hello, ${name}!`;
export default greet;
```

#### Importing Default Export:
```js
// file: app.js
import greet from "./greeting.js";
console.log(greet("Alice")); // Output: Hello, Alice!
```

✅ **Note:** No curly braces `{}` needed for default exports.

### 2.3 Exporting Together
You can combine named and default exports in a single file.

```js
// file: utility.js
export const multiply = (a, b) => a * b;
export const divide = (a, b) => a / b;
const defaultFunction = () => "Default Exported Function";
export default defaultFunction;
```

#### Importing:
```js
// file: app.js
import defaultFunc, { multiply, divide } from "./utility.js";
console.log(defaultFunc());      // Output: Default Exported Function
console.log(multiply(5, 2));     // Output: 10
console.log(divide(10, 2));      // Output: 5
```

---

## 3. Importing Everything
Instead of importing specific functions, we can import everything as an object.

```js
// file: math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

```js
// file: app.js
import * as MathFunctions from "./math.js";
console.log(MathFunctions.add(5, 3));      // Output: 8
console.log(MathFunctions.subtract(5, 3)); // Output: 2
```

✅ **Note:** `MathFunctions` is an object containing all exported functions.

---

## 4. Dynamic Imports
We can import modules dynamically using `import()`.

#### Example:
```js
// file: app.js
async function loadModule() {
    const module = await import("./mathFunctions.js");
    console.log(module.add(2, 3)); // Output: 5
}
loadModule();
```

✅ **Use case:** Loading modules conditionally or on-demand (e.g., lazy loading).

---

## 5. CommonJS vs ES6 Modules

| Feature         | ES6 Modules (ESM)      | CommonJS (CJS) |
|----------------|------------------------|---------------|
| Syntax         | `import` / `export`    | `require()` / `module.exports` |
| Execution      | Asynchronous (browser)  | Synchronous (Node.js) |
| Use Case       | Frontend & Modern JS   | Backend (Node.js) |

#### Example of CommonJS:
```js
// file: math.js
module.exports = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
};
```

```js
// file: app.js
const math = require("./math.js");
console.log(math.add(5, 3)); // Output: 8
```

---

## 6. Summary
- Use `export` & `import` for modular JavaScript.
- `export default` allows a single export per file.
- Named exports allow multiple exports.
- Dynamic imports (`import()`) help with lazy loading.
- **CommonJS** is used in Node.js, while **ES6 Modules** are standard for modern JavaScript.

🚀 **Next, we will explore module bundlers like Webpack & Parcel!**

