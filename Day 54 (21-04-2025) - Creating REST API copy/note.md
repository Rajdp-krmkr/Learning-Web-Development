# **📚 Handling POST Requests & Working with REST APIs in Express.js 🚀**

### **🎯 Learning Objectives**

By the end of this lesson, you will:  
✅ Understand **how to handle POST requests** in Express.  
✅ Learn how to parse **JSON and form data** in requests.  
✅ Build a **basic REST API** with CRUD operations.

---

## **🔹 Step 1: Setting Up Your Express Server**

👉 First, create a new Express app if you haven’t already.

📌 **Run the following command in your project folder:**

```sh
npm init -y
npm install express
```

📌 **Create a `server.js` file and set up Express:**

```js
const express = require("express");
const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Welcome to our API!");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

✅ **Run the server** using:

```sh
node server.js
```

🚀 Visit `http://localhost:3000/` in your browser, and it should display:

```
Welcome to our API!
```

---

## **🔹 Step 2: Handling POST Requests**

### **🛠 Create a POST Route**

We will now create a `/submit` route that **accepts JSON data**.

📌 **Modify `server.js` to include the POST request handler:**

```js
app.post("/submit", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  res.json({ message: "Data received successfully!", data: req.body });
});
```

✅ **Test the POST request using Postman or `curl`**:

```sh
curl -X POST http://localhost:3000/submit -H "Content-Type: application/json" -d '{"name":"Rajdeep", "email":"rajdeep@example.com"}'
```

✅ **Expected response:**

```json
{
  "message": "Data received successfully!",
  "data": {
    "name": "Rajdeep",
    "email": "rajdeep@example.com"
  }
}
```

---

## **🔹 Step 3: Creating a Simple REST API**

Now, let’s create a REST API for managing a list of users (CRUD operations).

📌 **Modify `server.js`:**

```js
const users = []; // Temporary in-memory storage

// GET all users
app.get("/users", (req, res) => {
  res.json(users);
});

// POST - Add a new user
app.post("/users", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);

  res.status(201).json(newUser);
});

// GET a single user by ID
app.get("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: "User not found" });

  res.json(user);
});

// PUT - Update a user
app.put("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: "User not found" });

  const { name, email } = req.body;
  if (name) user.name = name;
  if (email) user.email = email;

  res.json(user);
});

// DELETE a user
app.delete("/users/:id", (req, res) => {
  const index = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "User not found" });

  users.splice(index, 1);
  res.json({ message: "User deleted successfully" });
});
```

---

## **🔹 Step 4: Testing Your REST API**

Now, let’s test the endpoints using **Postman** or `curl`:

### **1️⃣ Add a User (POST)**

```sh
curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"name":"Rajdeep", "email":"rajdeep@example.com"}'
```

✅ **Response:**

```json
{
  "id": 1,
  "name": "Rajdeep",
  "email": "rajdeep@example.com"
}
```

---

### **2️⃣ Get All Users (GET)**

```sh
curl -X GET http://localhost:3000/users
```

✅ **Response:**

```json
[
  {
    "id": 1,
    "name": "Rajdeep",
    "email": "rajdeep@example.com"
  }
]
```

---

### **3️⃣ Get User by ID (GET)**

```sh
curl -X GET http://localhost:3000/users/1
```

✅ **Response:**

```json
{
  "id": 1,
  "name": "Rajdeep",
  "email": "rajdeep@example.com"
}
```

---

### **4️⃣ Update User (PUT)**

```sh
curl -X PUT http://localhost:3000/users/1 -H "Content-Type: application/json" -d '{"name":"Updated Rajdeep"}'
```

✅ **Response:**

```json
{
  "id": 1,
  "name": "Updated Rajdeep",
  "email": "rajdeep@example.com"
}
```

---

### **5️⃣ Delete User (DELETE)**

```sh
curl -X DELETE http://localhost:3000/users/1
```

✅ **Response:**

```json
{ "message": "User deleted successfully" }
```

---

## **🎯 Today's Exercise**

1️⃣ Modify the POST `/users` endpoint to **reject duplicate emails**.  
2️⃣ Implement a new **middleware** that logs request **IP addresses**.  
3️⃣ Add a **`createdAt` timestamp** to each new user.
