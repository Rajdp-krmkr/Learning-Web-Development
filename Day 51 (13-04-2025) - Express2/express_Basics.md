# **📚Introduction to Express.js 🚀**  

### **🎯 Learning Objectives**  
By the end of this lesson, you will:  
✅ Understand **what Express.js is** and why we use it.  
✅ Learn how to **set up an Express server**.  
✅ Handle **routes** with Express.  
✅ Send **responses** in different formats (text, JSON, and HTML).  

---

## **🔹 What is Express.js?**
**Express.js** is a **fast and lightweight web framework** for Node.js that makes building servers **easier** and **more efficient** than using the `http` module.  

### **💡 Why Use Express Instead of `http`?**
- ✅ **Less Boilerplate Code** (simpler syntax).  
- ✅ **Easy Routing** (no need for `if-else` conditions).  
- ✅ **Middleware Support** (to handle requests, errors, authentication, etc.).  
- ✅ **JSON Handling** (built-in JSON responses).  

---

## **🔹 Step 1: Install Express**
First, we need to install **Express.js** using `npm`.  

### **📌 Install Express in Your Project**
1️⃣ Open your terminal and run:  
```sh
npm init -y
npm install express
```
- `npm init -y` → Initializes a **Node.js project**.  
- `npm install express` → Installs **Express.js**.  

---

## **🔹 Step 2: Create a Basic Express Server**
👉 Create a new file `server.js` and add:  

```js
const express = require("express");

// Initialize Express app
const app = express();

// Define a route
app.get("/", (req, res) => {
  res.send("Hello, welcome to my Express.js server!");
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

### **💡 How It Works?**
- `express()` → Initializes an Express application.  
- `app.get("/", (req, res) => {...})` → Handles **GET requests** to `/`.  
- `res.send("Hello...")` → Sends a **response** to the client.  
- `app.listen(PORT, () => {...})` → Starts the server on **port 3000**.  

✅ **Run the server:**  
```sh
node server.js
```
✅ **Visit in your browser:**  
```
http://localhost:3000
```
You should see `"Hello, welcome to my Express.js server!"` displayed.  

---

## **🔹 Step 3: Handling Multiple Routes**
Now, let’s add **more routes** for different pages.

### **📌 Example: Handling Multiple Routes**
Modify `server.js`:  

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

// Handle 404 errors (for undefined routes)
app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

✅ **Restart the server (`Ctrl + C`, then `node server.js`)**  
✅ **Try these URLs in your browser:**  
- `http://localhost:3000/` → Home Page  
- `http://localhost:3000/about` → About Page  
- `http://localhost:3000/contact` → Contact Page  
- `http://localhost:3000/xyz` → **404 Not Found**  

---

## **🔹 Step 4: Sending JSON Data**
Instead of plain text, we can send **JSON responses**, which are useful for APIs.

### **📌 Example: JSON Response**
Modify the `/about` route:
```js
app.get("/about", (req, res) => {
  res.json({ name: "Express.js", version: "4.x", message: "A Node.js framework" });
});
```
✅ **Restart the server & visit** `http://localhost:3000/about`  
✅ You’ll see JSON data:  
```json
{
  "name": "Express.js",
  "version": "4.x",
  "message": "A Node.js framework"
}
```

---

## **📌 Today's Exercise**
1️⃣ Add a **new route** `/services` that sends `"Our Services Page"`.  
2️⃣ Add a route `/api/users` that returns a **JSON list of users** like:  
```json
[
  { "id": 1, "name": "Alice" },
  { "id": 2, "name": "Bob" }
]
```
3️⃣ Change the **404 error message** to `"Oops! Page Not Found"` instead of `"404 Not Found"`.  

---

## **📌 Summary**
✅ **Express.js** simplifies server creation in Node.js.  
✅ We use `app.get()` to define **routes**.  
✅ **`res.send()`** sends text or HTML, **`res.json()`** sends JSON.  
✅ We can handle **404 errors** easily with `app.use()`.  
