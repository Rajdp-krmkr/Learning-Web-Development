# **CSS Variables and Media Queries Notes**

# CSS Variables

CSS Variables, also known as custom properties, allow you to reuse values throughout your stylesheet by defining them with the `--` prefix. These variables are globally or locally scoped and are easy to manage for consistent styling.

---

## **Syntax**

```css
:root {
  --main-color: #3498db;
  --secondary-color: #2ecc71;
  --container-width: 80%;
  --border-radius: 10px;
  --font-size: 16px;
}
```

## **Usage**

Apply CSS variables using the `var()` function.

```css
body {
  color: var(--main-color);
  font-size: var(--font-size);
}

.container {
  width: var(--container-width);
  background-color: var(--secondary-color);
  border-radius: var(--border-radius);
}

button {
  padding: 10px 20px;
  border: 2px solid var(--main-color);
  background-color: var(--secondary-color);
}
```

---

## **Examples of CSS Variables**

### **1. Colors**

```css
:root {
  --primary-color: #ff5733;
  --background-color: #f0f0f0;
}

header {
  background-color: var(--primary-color);
  color: var(--background-color);
}
```

### **2. Dimensions**

```css
:root {
  --container-height: 100vh;
  --container-width: 100vw;
}

.container {
  height: var(--container-height);
  width: var(--container-width);
}
```

### **3. Borders**

```css
:root {
  --border-color: #333;
  --border-width: 5px;
}

div {
  border: var(--border-width) solid var(--border-color);
}
```

### **4. Typography**

```css
:root {
  --heading-size: 2em;
  --text-spacing: 1.5rem;
}

h1 {
  font-size: var(--heading-size);
  letter-spacing: var(--text-spacing);
}
```

---

## **Benefits of CSS Variables**

- Promote reusability and consistency.
- Allow runtime changes with JavaScript.
- Simplify code management, especially in large projects.

---
