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

---

### **Comparison of Display Values**

| **Display Value** | **Description**                                    | **Use Cases**                         |
| ----------------- | -------------------------------------------------- | ------------------------------------- |
| `block`           | Starts on a new line, occupies full width.         | Paragraphs, sections, div containers. |
| `inline`          | Flows with the text, occupies only required width. | Styling spans, text emphasis.         |
| `inline-block`    | Inline layout with block features.                 | Buttons, styled inline elements.      |
| `none`            | Hides the element.                                 | Conditional rendering.                |

---

### **Best Practices**

- Use relative units like `%`, `em`, and `rem` for responsive designs.
- Apply `block` or `inline-block` for elements requiring explicit layout control.
- Avoid excessive use of `display: none;` as it removes elements from accessibility tools like screen readers.

---
