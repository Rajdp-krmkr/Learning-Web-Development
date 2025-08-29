# 📘 React Hooks Notes: `useMemo` & `useCallback`

---

## 🔹 1. `useMemo` Hook

### ✅ Definition

`useMemo` is a hook that **memoizes the result of a computation**. It only recalculates the value when its **dependencies change**, otherwise it reuses the cached result.

👉 Think of it as **caching a value**.

---

### ✅ Syntax

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

* `() => computeExpensiveValue(a, b)` → Function that returns the computed value.
* `[a, b]` → Dependencies. If none of these change, React returns the memoized result.

---

### ✅ Example (Sorting an Array)

```jsx
import React, { useMemo, useState } from "react";

function App() {
  const [numbers] = useState([4, 2, 9, 1, 7]);
  const [count, setCount] = useState(0);

  // Expensive sorting only runs when `numbers` changes
  const sortedNumbers = useMemo(() => {
    console.log("Sorting numbers...");
    return [...numbers].sort((a, b) => a - b);
  }, [numbers]);

  return (
    <div>
      <p>Sorted: {sortedNumbers.join(", ")}</p>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
}
```

👉 Here, `sortedNumbers` doesn’t get recalculated when `count` changes — only when `numbers` changes.

---

### ✅ When to use `useMemo`

* For **expensive calculations** (sorting, filtering, large computations).
* To **avoid recalculating derived data** when irrelevant state changes.

---

---

## 🔹 2. `useCallback` Hook

### ✅ Definition

`useCallback` is a hook that **memoizes a function**. Instead of recreating the function on every render, it returns the same function reference unless its dependencies change.

👉 Think of it as **caching a function**.

---

### ✅ Syntax

```jsx
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

* The function `doSomething` will only be recreated if `a` or `b` changes.

---

### ✅ Example (Child Component Optimization)

```jsx
import React, { useState, useCallback } from "react";

const Button = React.memo(({ onClick, label }) => {
  console.log("Rendering Button:", label);
  return <button onClick={onClick}>{label}</button>;
});

function App() {
  const [count, setCount] = useState(0);

  // Without useCallback, this function is recreated every render
  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={increment} label="Increment" />
    </div>
  );
}
```

👉 With `useCallback`, the `increment` function reference stays the same, so `<Button>` doesn’t re-render unnecessarily.

---

### ✅ When to use `useCallback`

* When passing **functions as props** to child components wrapped with `React.memo`.
* To **avoid re-rendering children** when parent re-renders but function logic hasn’t changed.

---

---

## 🔹 3. Real-World Example Using Both

```jsx
import React, { useState, useMemo, useCallback } from "react";

const TodoItem = React.memo(({ todo, onToggle }) => {
  console.log("Rendering Todo:", todo.text);
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      {todo.text}
    </li>
  );
});

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Learn useMemo", completed: true },
    { id: 3, text: "Learn useCallback", completed: false },
  ]);
  const [showCompleted, setShowCompleted] = useState(false);

  // useCallback → stable function reference
  const toggleTodo = useCallback((id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  // useMemo → avoids recalculating filtered todos unnecessarily
  const filteredTodos = useMemo(() => {
    console.log("Filtering todos...");
    return showCompleted
      ? todos.filter(todo => todo.completed)
      : todos;
  }, [todos, showCompleted]);

  return (
    <div>
      <h1>Todo App</h1>
      <button onClick={() => setShowCompleted(prev => !prev)}>
        {showCompleted ? "Show All" : "Show Completed"}
      </button>
      <ul>
        {filteredTodos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} />
        ))}
      </ul>
    </div>
  );
}
```

---

## 🔑 Summary Table

| Hook          | Purpose                      | Caches   | Best Used For                                       |
| ------------- | ---------------------------- | -------- | --------------------------------------------------- |
| `useMemo`     | Memoizes **computed values** | Value    | Expensive calculations (filter, sort, derived data) |
| `useCallback` | Memoizes **functions**       | Function | Stable function references (esp. with `React.memo`) |

---

✨ So:

* `useMemo` = cache a **value**
* `useCallback` = cache a **function**
* `React.memo` = prevent unnecessary **child re-renders**
