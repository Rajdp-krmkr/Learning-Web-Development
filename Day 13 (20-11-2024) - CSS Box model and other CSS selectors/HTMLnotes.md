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

