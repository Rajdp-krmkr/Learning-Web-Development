Got it — here’s your updated **Day 2 React.js Notes** with **handling events removed** and a **section explaining why we use `useState` instead of a normal variable**.

---

## 📘 **React.js – Day 02 Notes**

### 🗓️ Topic: Vite Setup, `useState`, Conditional Rendering, Lists

---

### 🔹 1. Why Switch to Vite?

Vite is a **next-generation frontend build tool** that is much faster than Create React App.

#### Benefits:

- **Super fast startup** (instant server start)
- **Faster hot-reload** (HMR)
- **Smaller build sizes**

---

### 🔹 2. Setting Up React with Vite

#### Steps:

```bash
npm create vite@latest my-vite-app
```

- Select **React**
- Select **JavaScript**

```bash
cd my-vite-app
npm install
npm run dev
```

Your app will run at:
`http://localhost:5173`

---

### 🔹 3. Folder Structure (Vite)

```
my-vite-app/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
├── index.html
```

---

### 🔹 4. Why use `useState` instead of normal variables?

In React, if you store data in a **normal variable**, changing it won’t automatically update the UI.
React only re-renders when **state** changes.

Example with normal variable (❌ won’t re-render UI):

```jsx
let count = 0;
function Counter() {
  count++;
  console.log(count); // changes in console, but not in UI
}
```

Example with `useState` (✅ re-renders UI automatically):

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

**Key idea:** `useState` tells React: _"Hey, this value changed — update the UI!"_

---

### 🔹 5. Conditional Rendering

#### Using if-else:

```jsx
function UserGreeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h2>Welcome back!</h2>;
  }
  return <h2>Please log in</h2>;
}
```

#### Using ternary:

```jsx
{
  isLoggedIn ? <p>Logged in</p> : <p>Guest</p>;
}
```

---

### 🔹 6. Rendering Lists with `.map()`

```jsx
function StudentList() {
  const students = ["Raj", "Priya", "Aman"];

  return (
    <ul>
      {students.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}
```

---

### 🔹 7. Mini Project for Day 2 – **Simple To-Do List**

**Features:**

- Input field to add tasks
- Display tasks as a list
- Delete a task

---

### 📝 Homework

1. Create a **Student Attendance App**:

   - List of students
   - "Present" / "Absent" status stored in state
   - Update UI when a student’s status changes

2. Create a **Login Greeting Component** that shows a welcome message if logged in, else asks to log in.

---

### ✅ Summary Checklist

| Concept                | Understood? |
| ---------------------- | ----------- |
| Vite setup             | ✅ / ❌     |
| Why useState is needed | ✅ / ❌     |
| Conditional rendering  | ✅ / ❌     |
| Rendering lists        | ✅ / ❌     |

---

If you’d like, I can also **add a small visual diagram** showing:
**"Normal Variable vs State in React"** so students clearly see why `useState` matters.
That visual makes this concept stick in their memory.

Do you want me to add that diagram?
