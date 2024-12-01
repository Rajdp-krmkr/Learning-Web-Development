# **CSS Length Units and Display Properties**

This note covers CSS length units and display properties (excluding flex and grid). It provides an overview of how to use these properties effectively.

---

## **CSS Length Units**

CSS provides a variety of units to define dimensions, spacing, and layout. These units can be divided into **absolute** and **relative** units.

### **Absolute Units**
Absolute units have fixed values and are independent of other elements or the viewport.

#### **1. `px` (Pixels)**
- Represents a single pixel on the screen.
- Commonly used for fixed dimensions such as borders, font sizes, margins, or padding.
- **Example:**
  ```css
  p {
    font-size: 16px;
  }
  ```

---

### **Relative Units**
Relative units adjust based on their context (parent element, viewport, etc.).

#### **2. `%` (Percentage)**
- Relative to the parent element's dimensions (width, height, etc.).
- Often used for responsive designs.
- **Example:**
  ```css
  div {
    width: 50%; /* 50% of the parent's width */
  }
  ```

#### **3. `vh` (Viewport Height)**
- 1 `vh` equals 1% of the viewport's height.
- **Example:**
  ```css
  div {
    height: 50vh; /* Half the viewport height */
  }
  ```

#### **4. `vw` (Viewport Width)**
- 1 `vw` equals 1% of the viewport's width.
- **Example:**
  ```css
  div {
    width: 100vw; /* Full width of the viewport */
  }
  ```

#### **5. `vmax` (Viewport Maximum)**
- 1 `vmax` is 1% of the larger dimension between viewport width and height.
- **Example:**
  ```css
  div {
    width: 10vmax; /* 10% of the larger dimension */
  }
  ```

#### **6. `vmin` (Viewport Minimum)**
- 1 `vmin` is 1% of the smaller dimension between viewport width and height.
- **Example:**
  ```css
  div {
    width: 20vmin; /* 20% of the smaller dimension */
  }
  ```

#### **7. `em`**
- Relative to the font size of the parent element.
- **Example:**
  ```css
  p {
    font-size: 1.5em; /* 1.5 times the parent font size */
  }
  ```

#### **8. `rem` (Root `em`)**
- Relative to the font size of the root (`<html>`) element.
- **Example:**
  ```css
  :root {
    font-size: 16px;
  }
  h1 {
    font-size: 2rem; /* 32px (16px * 2) */
  }
  ```

#### **9. `ch`**
- Relative to the width of the "0" character in the current font.
- Ideal for input field widths.
- **Example:**
  ```css
  input {
    width: 20ch; /* Approximately 20 characters wide */
  }
  ```

---

## **CSS Display Properties**

The `display` property determines how elements are rendered in the layout.

### **Common Display Values**
#### **1. `block`**
- Makes an element a block-level element.
- Takes up the full width available and starts on a new line.
- **Example:**
  ```css
  div {
    display: block;
  }
  ```

#### **2. `inline`**
- Makes an element an inline element.
- Does not start on a new line and only takes up as much width as necessary.
- **Example:**
  ```css
  span {
    display: inline;
  }
  ```

#### **3. `inline-block`**
- Similar to `inline`, but allows applying block-level properties like margins and padding.
- **Example:**
  ```css
  div {
    display: inline-block;
  }
  ```

#### **4. `none`**
- Hides the element from the layout, making it invisible.
- **Example:**
  ```css
  p {
    display: none;
  }
  ```

#### **5. `list-item`**
- Displays the element as a list item with a marker (e.g., a bullet).
- **Example:**
  ```css
  li {
    display: list-item;
  }
  ```


---

### **Comparison of Display Values**

| **Display Value**   | **Description**                                   | **Use Cases**                       |
|----------------------|---------------------------------------------------|--------------------------------------|
| `block`             | Starts on a new line, occupies full width.        | Paragraphs, sections, div containers. |
| `inline`            | Flows with the text, occupies only required width.| Styling spans, text emphasis.        |
| `inline-block`      | Inline layout with block features.                | Buttons, styled inline elements.     |
| `none`              | Hides the element.                                | Conditional rendering.               |
| `list-item`         | Displays as a list item.                          | Lists (`<ul>`, `<ol>`).              |


---

### **Best Practices**
- Use relative units like `%`, `em`, and `rem` for responsive designs.
- Apply `block` or `inline-block` for elements requiring explicit layout control.
- Avoid excessive use of `display: none;` as it removes elements from accessibility tools like screen readers.

---

### **Exercises**
1. Create a webpage with a `block` header, an `inline-block` navigation menu, and `inline` links.
2. Use relative units (`%`, `vw`, `rem`) for responsive layouts of elements like `div` and `input`.
3. Experiment with `display: none;` to hide and show elements dynamically.