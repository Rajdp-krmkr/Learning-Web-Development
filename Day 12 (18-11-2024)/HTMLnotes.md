# CSS Notes

CSS (Cascading Style Sheets) is a styling language used to control the presentation and layout of HTML elements in a web page. With CSS, you can add colors, adjust spacing, manage layouts, and much more to create visually appealing and user-friendly websites.

## 1. Types of CSS

### **Inline CSS**

Inline CSS is written directly inside an HTML element using the `style` attribute. It is used for applying styles to a single element.

**Syntax:**

```html
<p style="color: blue; font-size: 16px;">This is an example of inline CSS.</p>
```

**Advantages:**

- Easy to apply to specific elements.
- Useful for quick fixes.

**Disadvantages:**

- Difficult to maintain for larger projects.
- Violates the principle of separating content and style.

---

### **Internal CSS**

Internal CSS is defined within a `<style>` tag inside the `<head>` section of an HTML document.

**Syntax:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <style>
      p {
        color: green;
        font-size: 18px;
      }
    </style>
  </head>
  <body>
    <p>This is an example of internal CSS.</p>
  </body>
</html>
```

**Advantages:**

- Styles are scoped to a single HTML document.
- Allows better organization than inline CSS.

**Disadvantages:**

- Not reusable across multiple HTML documents.

---

### **External CSS**

External CSS is written in a separate `.css` file and linked to the HTML document using a `<link>` tag.

**Syntax:**

- **HTML File:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <p>This is an example of external CSS.</p>
  </body>
</html>
```

- **CSS File (styles.css):**

```css
p {
  color: red;
  font-size: 20px;
}
```

**Advantages:**

- Reusable across multiple HTML documents.
- Separates content and style for better organization.

**Disadvantages:**

- Requires an extra HTTP request to load the CSS file.

---

## 2. CSS Selectors

### **Element Selector**

The element selector applies styles to all elements of a specified type.

**Syntax:**

```css
p {
  color: blue;
}
```

**Example:**

```html
<p>This text will be blue.</p>
<p>All paragraphs will be blue.</p>
```

---

### **Class Selector**

The class selector applies styles to elements with a specific `class` attribute. Classes are reusable and begin with a `.` in CSS.

**Syntax:**

```css
.classname {
  color: green;
}
```

**Example:**

```html
<p class="highlight">This is a highlighted paragraph.</p>
<p>This is a normal paragraph.</p>
```

---

### **ID Selector**

The ID selector applies styles to a specific element with a unique `id` attribute. IDs start with `#` in CSS.

**Syntax:**

```css
#idname {
  color: red;
}
```

**Example:**

```html
<p id="special">This is a special paragraph.</p>
```

**Note:** Use IDs sparingly, as they must be unique within a document.

---

### **Child Selector**

The child selector applies styles to elements that are direct children of a specified parent element.

**Syntax:**

```css
parent > child {
  color: purple;
}
```

**Example:**

```html
<div>
  <p>This paragraph will not be styled.</p>
  <div>
    <p>This paragraph will be purple.</p>
  </div>
</div>

<style>
  div > p {
    color: purple;
  }
</style>
```

**Key Points:**

- Targets only the immediate children, not deeper descendants.

---

## Summary

- **Inline CSS** is quick but not maintainable.
- **Internal CSS** is suitable for single documents.
- **External CSS** is the most efficient for larger projects.
- Use **element, class, and ID selectors** to target specific elements effectively.
- **Child selectors** are useful for controlling parent-child relationships in your design.

Start practicing these concepts to master CSS styling and selectors!
