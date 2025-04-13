
# 🚀 Express.js — Day 1 Notes  
*Introduction to Backend with Node.js and Express*

---

## 🔹 1. What is Express.js?

**Express.js** is a **backend web application framework** for **Node.js**. It allows you to:
- Build web servers and APIs easily
- Handle HTTP requests and responses efficiently
- Create web applications without writing a lot of repetitive code

### 🔑 Key Features:
- Lightweight and fast
- Easy routing system
- Middleware support
- Works well with databases
- Widely used for RESTful APIs

---

## 🔹 2. Setting Up Express.js (Step-by-Step)

### ✅ Step 1: Initialize a Node.js Project

Open your terminal in the desired project folder and run:
```bash
npm init -y
```
📝 This creates a `package.json` file that stores information about your project and dependencies.

---

### ✅ Step 2: Install Express

Still in the terminal, install Express using:
```bash
npm install express
```
📦 This command downloads Express and adds it as a dependency in your project.

---

### ✅ Step 3: Create Your Main File

Make a file called `index.js` (or `app.js`):
```bash
touch index.js
```
This will be your starting point (entry file) for the server.

---

## 🔹 3. Writing Your First Express Server

Paste this code into your `index.js` file:

```js
// Step 1: Import express
const express = require('express');

// Step 2: Create an express app instance
const app = express();

// Step 3: Define a port number to run the server
const PORT = 3000;

// Step 4: Create a simple GET route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Step 5: Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
```

---

## 🔹 4. Understanding the Code

| Code Line | Description |
|-----------|-------------|
| `const express = require('express')` | Loads the Express module |
| `const app = express()` | Creates an instance of Express |
| `app.get('/', callback)` | Creates a route for GET requests at the home URL |
| `res.send()` | Sends a response to the client |
| `app.listen(PORT, callback)` | Starts the server and listens on the defined port |

---

## 🔹 5. Running the Server

In your terminal, run:
```bash
node index.js
```
You should see:
```
Server is running at http://localhost:3000
```
➡️ Open that URL in a browser to see `"Hello from Express!"`

---

## 🔹 6. What is Routing?

**Routing** means defining how your application responds to a client request at a specific path (URL) and method (GET, POST, etc).

### 🧭 Example:
```js
app.get('/about', (req, res) => {
  res.send('About Us Page');
});
```
Now if you visit `http://localhost:3000/about`, it will show `"About Us Page"`

---

## 🔹 7. What is Middleware?

Middleware is a function that has access to the **request (req)**, **response (res)**, and the **next** function in the application’s request-response cycle.

### Example:
```js
app.use((req, res, next) => {
  console.log('A request was made at:', req.url);
  next(); // Passes control to the next handler
});
```

---

## 🔹 8. Common Built-in Middleware

```js
app.use(express.json()); // Parses JSON data sent from the client
```

---

## 🔹 9. HTTP Request Methods Overview

| Method | Usage Example | Purpose |
|--------|----------------|---------|
| `GET` | `app.get()` | To fetch data |
| `POST` | `app.post()` | To send data |
| `PUT` | `app.put()` | To update data |
| `DELETE` | `app.delete()` | To delete data |

---

## 🔹 10. Tools to Test Your Backend

🛠️ You can use:
- A **browser** for simple GET requests
- **Postman** or **Thunder Client (VS Code extension)** for testing POST, PUT, DELETE requests with data

---

## 📌 Summary: What You Learned Today

- ✅ What Express.js is and why it's used
- ✅ How to initialize a Node.js project
- ✅ How to install and import Express
- ✅ How to create a simple Express server
- ✅ How routing works
- ✅ What middleware is and how it helps
- ✅ Tested your first backend server!

---

## 🔮 What's Next (Day 2 Preview)

In the next class, we will:
- Handle multiple routes
- Work with **route parameters** and **query strings**
- Serve static files like HTML, CSS, images
- Learn about `POST` requests and request body parsing