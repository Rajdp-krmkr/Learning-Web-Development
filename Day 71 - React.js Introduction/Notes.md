

## 📘 **React.js - Day 01 Notes**

### 🗓️ Topic: Introduction to React.js & Creating Your First Component

---

### 🔹 1. What is React?

React is a **JavaScript library** (not a full framework) used for building fast and interactive user interfaces for web and mobile apps.

#### ✅ Key Features:

* **Component-based**: Break UI into independent, reusable pieces.
* **Declarative**: Tell React *what* to render, not *how* to do it.
* **Virtual DOM**: Updates UI efficiently without manipulating the real DOM directly.
* **Unidirectional Data Flow**: Data flows from parent to child components.

---

### 🔹 2. Why Should You Learn React?

| Problem (without React)               | Solution (with React)          |
| ------------------------------------- | ------------------------------ |
| Difficult to manage UI for large apps | Component-based architecture   |
| DOM updates are slow                  | Virtual DOM is faster          |
| Code repetition                       | Reusable components            |
| Manual DOM manipulation               | React handles it automatically |

---

### 🔹 3. Setting Up Your First React Project (Using Create React App)

We’ll use the **official Create React App (CRA)** setup for Day 1.

#### 🛠️ Steps:

1. **Install Node.js** (if not installed)
   Go to [https://nodejs.org](https://nodejs.org) and download LTS version.

2. **Open Terminal / CMD** and run:

```bash
npx create-react-app my-app
cd my-app
npm start
```

3. Your React app should open automatically in your browser at `http://localhost:3000`

---

### 🔹 4. Folder Structure Overview

```
my-app/
├── node_modules/      → project dependencies
├── public/
│   └── index.html     → single HTML file used in the app
├── src/
│   ├── App.js         → main App component
│   ├── index.js       → entry point of the app
├── package.json       → project metadata and dependencies
```

---

### 🔹 5. Understanding JSX (JavaScript XML)

JSX allows writing HTML-like syntax in JavaScript files.

#### 💡 Rules of JSX:

* Always return a **single parent element**.
* Use **`className`** instead of `class`.
* Use **curly braces `{}`** to embed JS expressions.
* All tags must be **closed properly**.

Example:

```jsx
const name = "Rajdeep";
const element = <h1>Hello, {name}</h1>;
```

---

### 🔹 6. Creating Functional Components

Components are the building blocks of React apps.

#### ✨ Basic Functional Component:

```jsx
function Welcome() {
  return <h2>Welcome to React!</h2>;
}
```

#### 🧩 Using It in App.js:

```jsx
import Welcome from './Welcome';

function App() {
  return (
    <div>
      <Welcome />
    </div>
  );
}
```

---

### 🔹 7. Props: Passing Data to Components

Props = **Properties** passed from parent to child components.

```jsx
function Welcome(props) {
  return <h2>Hello, {props.name}</h2>;
}
```

```jsx
<Welcome name="Rajdeep" />
```

---

### 📝 Practice Task (Homework)

1. Create a new component called `MyProfile`.
2. It should show your name, course, and a short bio using JSX.
3. Import and use it inside `App.js`.