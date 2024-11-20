### File 1: `selectors.md`

# CSS Selectors: Universal and Pseudo Selectors

## 1. Universal Selector (`*`)

The universal selector is used to select all elements in a document. It is represented by the `*` symbol.

### Syntax:

```css
* {
  margin: 0;
  padding: 0;
}
```

### Use Case:

The universal selector is often used to reset the styles of all elements on a page.

---

## 2. Pseudo Selectors

Pseudo-selectors define the state or specific parts of an element to apply styles.

### a) `:hover`

Applies styles when the user hovers over an element.

#### Syntax:

```css
a:hover {
  color: red;
}
```

### b) `:visited`

Styles a link after it has been visited.

#### Syntax:

```css
a:visited {
  color: purple;
}
```

### c) `:active`

Applies styles when an element is being clicked.

#### Syntax:

```css
button:active {
  background-color: gray;
}
```

### d) `:link`

Styles a link before it is visited.

#### Syntax:

```css
a:link {
  color: blue;
}
```

### e) `:nth-child()`

Selects elements based on their order in a parent element.

#### Syntax:

```css
li:nth-child(2) {
  color: green;
}
```

- Example: The above code will style the second list item.

### f) `:first-child`

Selects the first child element of a parent.

#### Syntax:

```css
p:first-child {
  font-weight: bold;
}
```

### g) `:selection`

Applies styles to the portion of a document that a user selects.

#### Syntax:

```css
::selection {
  background-color: yellow;
}
```

---

## Summary:

- **Universal Selector (`*`)**: Targets all elements.
- **Pseudo Selectors**: Allow targeting specific states or child elements.
  - Use cases: Styling links, hover effects, child elements, and user text selections.

---

---

# CSS Box Model

The CSS Box Model is the foundation of layout and design in CSS. It consists of four key parts: **content**, **padding**, **border**, and **margin**.

---

## Structure of the Box Model

### 1. Content

- The content area is where the actual text or elements (like images) are displayed.
- It is the innermost part of the box.

#### Example:

```css
div {
  width: 200px;
  height: 100px;
}
```

---

### 2. Padding

- Padding is the space between the content and the border.
- It creates inner spacing inside the element.

#### Example:

```css
div {
  padding: 20px;
}
```

---

### 3. Border

- The border surrounds the padding and content.
- Borders can have different widths, styles, and colors.

#### Example:

```css
div {
  border: 2px solid black;
}
```

---

### 4. Margin

- Margin is the space outside the border.
- It creates spacing between adjacent elements.

#### Example:

```css
div {
  margin: 15px;
}
```

![CSS Box model](https://productiveshop.com/wp-content/uploads/2024/03/Visual-representation-of-margin-and-padding-in-CSS-Box-Model-1024x401.webp)

---

## Summary Table:

| Property | Description                            | Example                  |
| -------- | -------------------------------------- | ------------------------ |
| Margin   | Space outside the border               | `margin: 10px;`          |
| Border   | Surrounds padding and content          | `border: 2px solid red;` |
| Padding  | Space between content and border       | `padding: 5px;`          |
| Content  | Actual text or elements inside the box | `width: 200px;`          |

---

## Box Model Example:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <style>
      .box {
        width: 200px;
        padding: 20px;
        border: 5px solid black;
        margin: 15px;
        background-color: lightblue;
      }
    </style>
  </head>
  <body>
    <div class="box">This is a box!</div>
  </body>
</html>
```

---

# CSS Margin Collapse

## What is Margin Collapse?

In CSS, **margin collapse** occurs when the top or bottom margins of two block-level elements come into contact and combine to form a single margin, rather than adding up. This behavior applies only to vertical margins (top and bottom) and not horizontal margins (left and right).

---

## Key Scenarios of Margin Collapse

1. **Adjacent Sibling Elements**  
   When two block-level elements are next to each other, their top and bottom margins collapse into a single margin, equal to the larger of the two.

- Example:
  ```html
  <div style="margin-bottom: 20px;">Block 1</div>
  <div style="margin-top: 30px;">Block 2</div>
  ```
  The resulting margin between the two blocks will be **30px**, not 50px.

2. **Parent and Child Elements**  
   If a block-level element is the first or last child of its parent, and no padding or borders separate the margins, the child's margin may collapse with the parent's margin.

   - Example:
     ```html
     <div style="margin-top: 20px;">
       <p style="margin-top: 30px;">Child Paragraph</p>
     </div>
     ```
     The resulting margin at the top will be **30px**, not 50px.

3. **Empty Elements**  
   If a block element has no content, no padding, and no border, its top and bottom margins collapse into one.

---

## How to Prevent Margin Collapse

1. **Add Padding**  
   Padding prevents the margins from collapsing as it introduces space between the elements.
   ```html
   <div style="padding-top: 10px;">
     <p style="margin-top: 20px;">Paragraph</p>
   </div>
   ```
