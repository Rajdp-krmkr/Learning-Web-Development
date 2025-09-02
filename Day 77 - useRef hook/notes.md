# useRef Hook

## 1. **What is `useRef`?**

* `useRef` is a React **Hook** that returns a **mutable reference object**.
* The object has a `.current` property that you can update, and React **doesn’t re-render** the component when `.current` changes.
* Think of it like a “box” that can hold a value across renders **without causing re-renders**.

```jsx
const myRef = useRef(initialValue);
```

* Returns: `{ current: initialValue }`.

---

## 2. **Why use `useRef`?**

✅ **Persist values** across renders without re-rendering (like `useState`, but without triggering re-renders).
✅ **Access DOM elements** directly (like `document.getElementById`, but React way).
✅ **Store mutable values** that shouldn’t cause UI updates (like timers, previous values, counters, etc.).
✅ **Performance optimization** (avoid unnecessary re-renders when storing non-UI data).

---

## 3. **How to use `useRef`?**

### (a) **Accessing DOM elements**

Example: Focusing an input field

```jsx
import { useRef } from "react";

function InputFocus() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus(); // Directly focus the input element
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type here..." />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}
```

👉 Here, `ref={inputRef}` attaches the DOM node to `inputRef.current`.

---

### (b) **Storing Previous Values**

Example: Track previous state value

```jsx
import { useEffect, useRef, useState } from "react";

function PreviousValue() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);

  useEffect(() => {
    prevCount.current = count; // Update ref after render
  }, [count]);

  return (
    <div>
      <p>Now: {count}, Before: {prevCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

---

### (c) **Storing Timers / Intervals**

```jsx
import { useEffect, useRef, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  return (
    <div>
      <p>{seconds} sec</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}
```

👉 `timerRef.current` stores the interval ID so it persists between renders without re-rendering.

---

## 4. **Difference between `useRef` and `useState`**

| Feature                     | `useState` | `useRef`                       |
| --------------------------- | ---------- | ------------------------------ |
| Causes re-render on change? | ✅ Yes      | ❌ No                           |
| Persists between renders?   | ✅ Yes      | ✅ Yes                          |
| Used for UI data?           | ✅ Yes      | ❌ No (just stores values/refs) |
| Stores DOM reference?       | ❌ No       | ✅ Yes                          |

---

## 5. **When to use `useRef`?**

* When you need to **store data without triggering re-renders**.
* When you want to **directly manipulate a DOM element** (focus, scroll, play/pause video, etc.).
* When you want to **store values across renders** (previous state, timers, API responses).

---

✅ **Summary in one line:**
👉 Use `useRef` when you want to **hold something across renders without re-rendering the component**.