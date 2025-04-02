# JavaScript Day 11 Notes

## 1. Here's a note on **CommonJS and its Features**:

## **CommonJS and Its Features**

**CommonJS (CJS)** is a module system primarily used in **Node.js** to structure and organize code into reusable modules. It was developed to provide a standardized approach to modularization in JavaScript before ES6 Modules (ESM) were introduced.

### **Key Features of CommonJS**

1. **Synchronous Module Loading**

   - Modules are loaded synchronously, making it more suitable for **backend environments** like Node.js but not ideal for browsers.

2. **`require()` for Importing Modules**

   - The `require()` function is used to import external modules. Example:
     ```js
     const fs = require("fs"); // Importing the built-in 'fs' module
     ```

3. **`module.exports` for Exporting Modules**

   - A module can expose functions, objects, or variables using `module.exports`. Example:
     ```js
     module.exports = function greet() {
       console.log("Hello from CommonJS!");
     };
     ```

4. **Encapsulation (Each File is a Module)**

   - Each file in CommonJS is treated as a **separate module** with its own scope, preventing global variable conflicts.

5. **Single Execution of Modules (Caching)**

   - When a module is loaded for the first time, it is cached. Subsequent `require()` calls return the cached version instead of re-executing the module.

6. **Built-in Support in Node.js**
   - CommonJS is the **default module system** in Node.js (before ES Modules support was added). Most **Node.js core modules** use CommonJS.

### **Limitations of CommonJS**

- Not well-suited for **frontend development** due to synchronous nature.
- Cannot be easily used with modern **ES Modules (`import/export`)** without transpilation.

CommonJS remains a key module system for **server-side JavaScript applications**, especially in **Node.js projects**. However, **ES Modules (ESM)** is now the standard for modern JavaScript development.

---

## 2. Here's a note on **ES6 Modules and Their Features**:

## **ES6 Modules and Their Features**

**ES6 Modules (ECMAScript 2015 or ES Modules)** provide a modern way to organize and reuse JavaScript code. They introduce a standardized module system that works in both **browsers** and **Node.js** (with proper configuration).

### **Key Features of ES6 Modules**

1. **Asynchronous Module Loading**

   - ES6 modules are **loaded asynchronously**, making them efficient for **browser-based applications**.

2. **`import` for Importing Modules**

   - The `import` keyword is used to bring in functionality from other modules. Example:
     ```js
     import { greet } from "./utils.js";
     greet();
     ```

3. **`export` for Exporting Modules**

   - Modules can expose functions, variables, or objects using `export`. Example:
     ```js
     export function greet() {
       console.log("Hello from ES6!");
     }
     ```
   - Default export:
     ```js
     export default function greet() {
       console.log("Hello from ES6 Default Export!");
     }
     ```
     Importing a default export:
     ```js
     import greet from "./utils.js";
     greet();
     ```

4. **Encapsulation (Strict Mode by Default)**

   - ES6 modules automatically run in **strict mode**, preventing common JavaScript errors.

5. **Supports Static Analysis**

   - Since `import` and `export` statements are **static**, JavaScript engines can optimize the code better.

6. **No Global Scope Pollution**

   - ES6 modules have their own **isolated scope**, preventing variable conflicts across files.

7. **Tree Shaking Support**

   - Unused code (dead code) is **automatically removed** by bundlers like Webpack, Rollup, and Parcel.

8. **Works in Browsers and Node.js**

   - ES6 modules are supported in modern browsers using `<script type="module">` and in **Node.js** with `"type": "module"` in `package.json`.

   Example:

   ```html
   <script type="module">
     import { greet } from "./utils.js";
     greet();
   </script>
   ```

### **Limitations of ES6 Modules**

- **Not natively supported in older browsers** (requires transpilation using Babel).
- **Requires an HTTP server** to run in browsers (cannot load local files directly).
- **Cannot use `require()` and `module.exports`** (CommonJS functions).

### **CommonJS vs. ES6 Modules**

| Feature          | CommonJS (`require()`) | ES6 Modules (`import/export`) |
| ---------------- | ---------------------- | ----------------------------- |
| **Loading**      | Synchronous            | Asynchronous                  |
| **Usage**        | Node.js (backend)      | Browsers & Node.js            |
| **Exports**      | `module.exports`       | `export` & `export default`   |
| **Imports**      | `require()`            | `import`                      |
| **Scope**        | Local (Encapsulated)   | Local (Encapsulated)          |
| **Tree Shaking** | ❌ No                  | ✅ Yes                        |
| **Execution**    | Runs once (cached)     | Runs per import               |

---

### **Conclusion**

ES6 modules provide a **cleaner, more efficient** way to handle modular JavaScript. They are **preferred** for modern applications, especially for **frontend development**. However, CommonJS is still widely used in **backend development (Node.js projects)**.

Would you like me to add more details or examples? 🚀

## 3. Asynchronous JavaScript

JavaScript executes code line by line (synchronously). However, some operations (like API calls, setTimeout) take time to complete. Asynchronous JavaScript helps handle such operations efficiently.

### Introduction to Asynchronous Programming

1. **Callbacks** - Functions passed as arguments to be executed later.
2. **Promises** - Objects that represent the eventual completion (or failure) of an operation.
3. **Async/Await** - A cleaner way to handle promises.

### Example of Asynchronous Code using `setTimeout()`

```js
console.log("Start");
setTimeout(() => {
  console.log("Async Task Completed");
}, 2000);
console.log("End");
```

**Output:**

```
Start
End
Async Task Completed (after 2 seconds)
```

---

### Summary

- **Forms in JavaScript**: Handling form submissions and events.
- **ES6+ Features**: Destructuring arrays & objects, module systems.
- **Difference Between ES6+ and CommonJS**.
- **Asynchronous JavaScript**: Introduction to asynchronous programming with callbacks, promises, and async/await.

🚀 Next class: Deep dive into `Promises` and `Async/Await`!
