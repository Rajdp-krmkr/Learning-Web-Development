## 🌐 What is CORS in Express?

**CORS** stands for **Cross-Origin Resource Sharing**.

It’s a **security feature** enforced by browsers that restricts web pages from making requests to a **different domain** than the one that served the web page.

---

### 🧠 Example Problem:

If your frontend (served from `http://localhost:3000`) tries to call your Express backend API (running on `http://localhost:5000`), the browser **blocks the request by default**.

That's where CORS comes in.

---

## ✅ What Does `cors()` Do in Express?

```js
const cors = require("cors");
app.use(cors());
```

- This line tells your Express server to **allow requests from any origin** (by default).
- Without it, **your frontend won’t be able to fetch data** from the backend on a different port/domain.

---

## 🔒 How It Works

When you add `app.use(cors());`:

- Express responds with HTTP headers like:

  ```
  Access-Control-Allow-Origin: *
  ```

- This tells the browser: “It’s okay to allow this request, even though it’s coming from a different domain.”

---

## 🎯 You Can Also Restrict CORS (Optional)

Allow only your frontend domain:

```js
app.use(
  cors({
    origin: "https://your-frontend.vercel.app",
  })
);
```

---

## 📌 Summary

| Concept        | Meaning                                                 |
| -------------- | ------------------------------------------------------- |
| **CORS**       | Lets frontend on one domain talk to backend on another  |
| **Why needed** | Browsers block requests to different domains by default |
| **In Express** | Use `cors()` middleware to enable it                    |
