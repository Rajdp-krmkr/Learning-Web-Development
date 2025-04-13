# **📚 Lesson 5: Middleware in Express.js 🚀**  

### **🎯 Learning Objectives**  
By the end of this lesson, you will:  
✅ Understand **what middleware is** and how it works.  
✅ Learn how to create **custom middleware**.  
✅ Use built-in middleware like `express.json()`, `express.urlencoded()`, and `express.static()`.  
✅ Implement a **request logger middleware**.  

---

## **🔹 What is Middleware?**  
Middleware in Express.js is a **function** that runs **before the actual request handler**.  

### **💡 How It Works?**
- Middleware functions **modify the request (`req`) or response (`res`)** before sending it to the client.  
- They are executed **sequentially** in the order they are defined.  

---

## **🔹 Step 1: Creating a Basic Middleware**  
👉 Add this to `server.js`:  

```js
const express = require("express");
const app = express();

// Custom Middleware Function
const myMiddleware = (req, res, next) => {
  console.log("Middleware executed!");
  next(); // Pass control to the next middleware or route handler
};

// Apply Middleware to All Routes
app.use(myMiddleware);

app.get("/", (req, res) => {
  res.send("Hello, this is the home page!");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

✅ **Run the server and check the console.**  
Whenever you visit `http://localhost:3000/`, `"Middleware executed!"` appears in the terminal before the response is sent.  

---

## **🔹 Step 2: Logging Requests with Middleware**
Now, let's create a middleware to **log request details** (method, URL, time).  

### **📌 Add this to `server.js`:**  
```js
const requestLogger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};

// Apply Middleware
app.use(requestLogger);
```
✅ **Now, every request will be logged!** Example log:  
```
[2025-02-05T12:34:56.789Z] GET /
[2025-02-05T12:34:59.123Z] GET /about
```

---

## **🔹 Step 3: Using Built-in Middleware**
### **1️⃣ `express.json()` → Parses JSON requests**
Useful for handling `POST` requests with JSON data.

```js
app.use(express.json());

app.post("/data", (req, res) => {
  res.json({ receivedData: req.body });
});
```
✅ **Now, if you send** a `POST` request with JSON, Express will parse it.

---

### **2️⃣ `express.urlencoded()` → Parses Form Data**
Useful for handling form submissions (`x-www-form-urlencoded` data).  

```js
app.use(express.urlencoded({ extended: true }));
```

---

### **3️⃣ `express.static()` → Serve Static Files**
This allows you to serve static files like images, CSS, or JavaScript.  

```js
app.use(express.static("public"));
```
✅ **Create a folder named `public/`** and place an `index.html` inside it.  
✅ Now, visiting `http://localhost:3000/index.html` will serve the file.

---

## **📌 Today's Exercise**
1️⃣ Modify the request logger middleware to **log the client’s IP address**.  
2️⃣ Create a new middleware that checks if a request has a **custom header** `x-auth-token` and blocks the request if missing.  
3️⃣ Use `express.static()` to serve a folder called **assets/** and place an `image.jpg` inside it.  

---

## **🚀 Next Lesson Preview:**
Tomorrow, we’ll dive into **handling POST requests & working with REST APIs in Express.js**!  

👉 Let me know once you’ve completed today's exercise! 🚀