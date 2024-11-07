Here's a structured `README.md` file on HTML form elements and attributes:

---

# HTML Label tag, Autofocus and required attribute, Inline and Block elements, id and class
---

## Table of Contents

1. [Label Tag](#label-tag)
2. [Autofocus and Required Attributes](#autofocus-and-required-attributes)
3. [Inline Elements](#inline-elements)
4. [Block Elements](#block-elements)

---
## 1. Label Tag

The `<label>` tag is used to label form elements, making forms more accessible. It links to a specific input using the `for` attribute.

<b>we have to correctly put the `id` of `<input>` in the `for` attribute in `<label>`


### Example

```html
<label for="username">Username:</label>
<input type="text" id="username" name="username" />
<!-- "for" in <label> and "id" in <input> must be same -->
```

---

## 2. Autofocus and Required Attributes

- **`autofocus`**: Automatically focuses on a specific input when the page loads.

  ```html
  <input type="text" name="username" autofocus />
  ```

- **`required`**: Ensures that a field must be filled out before submission.
<b>Alerts a user if the input field is empty<b>
  ```html
  <input type="email" name="email" required />
  ```

---
## 1. Inline Elements

Inline elements are elements that only occupy as much width as necessary. They do not start on a new line and allow other inline elements to appear next to them. Commonly used inline elements include:

- `<span>`: A generic inline container for phrasing content, often used for styling.
- `<a>`: The anchor tag for hyperlinks.
- `<img>`: Used to embed images.
- `<strong>` and `<em>`: Used for emphasizing text.

### Example
```html
<p>This is an inline <span>element</span> inside a paragraph.</p>
<a href="#">This is a link</a> and <img src="image.jpg" alt="example image">.
```

### Key Points
- Inline elements flow with the text.
---
## 2. Block Elements
Block elements occupy the entire width of their container and start on a new line. They are commonly used to create structural layout sections. Common block elements include:

- `<div>`: A generic block container, often used for layout or grouping content.
- `<h1>` to `<h6>`: Heading elements.
- `<p>`: Paragraphs.
- `<ul>` and `<ol>`: Unordered and ordered lists.
- `<section>` : section 
### Example

```html
<div>
  <h1>This is a block element</h1>
  <p>Paragraphs are also block elements.</p>
</div>
```

### Key Points
- Block elements begin on a new line and stretch across the page.
- They can contain both inline and other block elements.

---