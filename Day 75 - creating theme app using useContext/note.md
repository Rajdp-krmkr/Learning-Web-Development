Perfect choice 🚀 Theme switching (dark/light mode) is a very practical use case for `useContext`. I’ll make a simple **ThemeProvider App** using `useContext`, then explain line by line what’s happening.

---

### 📌 Code – ThemeProvider App (using useContext)

```jsx
"use client";
import React, { createContext, useState, useContext } from "react";

// 1️⃣ Create a Context
const ThemeContext = createContext();

// 2️⃣ Create a Provider Component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light"); // default theme is "light"

  // function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // value passed to all children
  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3️⃣ Custom Hook to use Theme
function useTheme() {
  return useContext(ThemeContext);
}

// 4️⃣ Example Component that uses the theme
function ThemedComponent() {
  const { theme, toggleTheme } = useTheme();

  const styles = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
  };

  return (
    <div style={styles}>
      <h1>{theme === "light" ? "🌞 Light Mode" : "🌙 Dark Mode"}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

// 5️⃣ Main App
function App() {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
}

export default App;
```

---

### 📝 Explanation (Line by Line)

#### **1. Create a Context**

```jsx
const ThemeContext = createContext();
```

* `createContext()` makes a new Context object.
* Think of Context like a **global storage box**. Any component inside it can **get values** without passing props manually.

---

#### **2. Create a Provider Component**

```jsx
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
```

* `ThemeProvider` is a wrapper component.
* It holds the **theme state** (`light` or `dark`).
* By default, theme is `"light"`.

```jsx
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
```

* `toggleTheme` function switches theme when called.

```jsx
  const value = { theme, toggleTheme };
```

* We prepare an object (`value`) that contains:

  * The current `theme`
  * The function `toggleTheme`

```jsx
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
```

* `ThemeContext.Provider` shares the `value` to **all children components**.
* `children` means any component wrapped inside `<ThemeProvider> ... </ThemeProvider>`.

---

#### **3. Custom Hook (optional but cleaner)**


* `useContext(ThemeContext)` lets us directly **consume values** stored in the context.
* We made a custom hook `useTheme` to make usage cleaner.

---

#### **4. Example Component**

```jsx
function ThemedComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);
```

* We **pull values from context**:

  * `theme` = current mode
  * `toggleTheme` = function to switch mode

```jsx
  const styles = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
  };
```

* We use the `theme` to decide **background color & text color**.

```jsx
  return (
    <div style={styles}>
      <h1>{theme === "light" ? "🌞 Light Mode" : "🌙 Dark Mode"}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
```

* Shows the current theme (Light/Dark).
* Button calls `toggleTheme()` → switches theme.

---

#### **5. Main App**

```jsx
function App() {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
}
```

* We wrap our `ThemedComponent` inside `ThemeProvider`.
* Now it has access to `theme` and `toggleTheme` through Context.

---

### ⚡ Output

* App starts in **Light Mode** (white background, black text).
* When you click **Toggle Theme**, it switches to **Dark Mode** (black background, white text).
* Clicking again toggles back.

---

👉 Now, do you want me to make this project a bit **bigger with multiple components** (like Navbar, Footer, Content all using the theme) so you see the real power of `useContext`?
