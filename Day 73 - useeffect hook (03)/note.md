## 📘 **React.js – Day 03 Notes**

**Hook of the Day:** `useEffect`

---

### 🔹 1. Recap from Day 2

* Learned about **`useState`** hook
* Why state is better than normal variables
* Built a counter & simple list rendering
* Conditional rendering basics

---

### 🔹 2. What is `useEffect`?

* A hook used to **run side effects** in a component.
* Side Effects = anything outside React’s normal rendering (e.g., fetching data, timers, logging, subscriptions).

👉 Think of it as:

> “Do something *after* React renders the UI.”

---

### 🔹 3. Syntax of `useEffect`

```jsx
useEffect(() => {
  // code to run after render
}, [dependencies]);
```

* **First argument:** A function containing your side effect.
* **Second argument (dependency array):** Decides when the effect runs.

---

### 🔹 4. Cases of `useEffect`

#### 1️⃣ Run on **every render** (no dependency array):

```jsx
useEffect(() => {
  console.log("Component rendered!");
});
```

#### 2️⃣ Run **only once** (empty dependency array `[]`):

```jsx
useEffect(() => {
  console.log("Runs only on first render!");
}, []);
```

#### 3️⃣ Run when **specific value changes**:

```jsx
useEffect(() => {
  console.log("Count changed!");
}, [count]);
```

---

### 🔹 5. Example: Document Title Updater

```jsx
import { useState, useEffect } from "react";

function TitleUpdater() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default TitleUpdater;
```

✅ When `count` changes, document title updates.

---

### 🔹 6. Example: Fetching Data (Basic)

```jsx
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

✅ Runs once when component mounts and fetches data.

---

### 🔹 7. Cleanup in `useEffect`

If your effect sets up something (like a timer, event listener), you should clean it up.

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running...");
  }, 1000);

  // cleanup function
  return () => clearInterval(timer);
}, []);
```

---

### 📝 Practice Tasks

1. Create a counter that updates the **document title** with the current count.
2. Fetch and display a list of posts from `https://jsonplaceholder.typicode.com/posts`.
3. Create a timer that starts on render and cleans up properly when the component unmounts.

---

### 📅 Tomorrow’s Hook Preview

**Day 4 Hook:** `useContext` – for sharing data between components without props.