Great! Here are some **Practice Tasks for Express Day 1** to reinforce the basics of Express.js. These tasks will help your students build confidence working with routes, requests, and responses.

---

# 🛠️ Express.js Day 1 – Practice Tasks

### ✅ Prerequisite:

Ensure you have **Node.js** installed and have run `npm init` and `npm install express` in your project directory.

---

## 📌 Task 1: Basic Express Server

**Goal:** Set up a simple Express server  
**Instructions:**

- Create a file named `index.js`.
- Import Express and initialize the app.
- Listen on port `3000`.
- On the root route (`/`), send a response: `Welcome to Express!`

---

## 📌 Task 2: Add More Routes

**Goal:** Practice different HTTP GET routes  
**Instructions:**

- Create routes for:
  - `/about` → returns `This is the About Page`
  - `/contact` → returns `Contact us at contact@example.com`
  - `/help` → returns `How can we help you?`

---

## 📌 Task 3: Return JSON Data

**Goal:** Send data in JSON format  
**Instructions:**

- Create a route `/user` that returns:

```js
{
  name: "John Doe",
  email: "john@example.com"
}
```

---

## 📌 Task 4: Handle 404 Route

**Goal:** Handle undefined routes  
**Instructions:**

- Use `app.use()` and `res.status(404)` to send a message: `Page not found` for any undefined route.

---

## 📌 Task 5: Create a Simple HTML Response

**Goal:** Send an HTML response  
**Instructions:**

- On the `/html` route, send a simple HTML structure with a heading and a paragraph.

```js
res.send("<h1>Hello</h1><p>This is an HTML response from Express!</p>");
```

---

## 📌 Task 6: Organize Routes in Separate Files (Advanced)

**Goal:** Modularize your routes  
**Instructions:**

- Create a separate file `routes.js`
- Export different route handlers
- Import and use them in your main file using `app.use()`

---

## 🔁 Bonus Challenge:

Create a route `/greet/:name` where the `:name` is dynamic.

- Example: Visiting `/greet/Alex` returns `Hello, Alex!`

---

Let me know when you're ready to move to Day 2, and I’ll prep the notes and new tasks for it! 💡🚀
