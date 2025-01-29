### **CSS Selectors: First-line, First-letter, First-child, Nth-child, and More**

CSS provides various selectors to target specific elements based on their position, attributes, or even their first letter and line. Below are some commonly used selectors with explanations and examples.

---

## **1. `::first-line`**
The `::first-line` pseudo-element styles only the first line of a block-level element.

**Syntax:**
```css
p::first-line {
  font-weight: bold;
  color: blue;
}
```

**Example:**
```html
<p>This is an example paragraph. The first line of this text will appear bold and blue.</p>
```

---

## **2. `::first-letter`**
The `::first-letter` pseudo-element styles only the first letter of a block-level element.

**Syntax:**
```css
p::first-letter {
  font-size: 2em;
  color: red;
}
```

**Example:**
```html
<p>This paragraph starts with a larger red letter.</p>
```

---

## **3. `:first-child`**
The `:first-child` pseudo-class selects the first child of its parent.

**Syntax:**
```css
div p:first-child {
  color: green;
}
```

**Example:**
```html
<div>
  <p>This is the first child paragraph.</p>
  <p>This is another paragraph.</p>
</div>
```
*Only the first `<p>` inside `<div>` will be green.*

---

## **4. `:nth-child(n)`**
The `:nth-child(n)` pseudo-class selects elements based on their position in a parent element.

**Syntax:**
```css
ul li:nth-child(2) {
  color: blue;
}
```

**Example:**
```html
<ul>
  <li>Item 1</li>
  <li>Item 2 (styled blue)</li>
  <li>Item 3</li>
</ul>
```
*Only the second `<li>` will be blue.*

---

## **5. `:nth-last-child(n)`**
The `:nth-last-child(n)` pseudo-class selects elements based on their position from the end.

**Syntax:**
```css
ul li:nth-last-child(1) {
  color: purple;
}
```

**Example:**
```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3 (last item, styled purple)</li>
</ul>
```
*The last `<li>` will be purple.*

---

## **6. `:nth-child(odd)` & `:nth-child(even)`**
These pseudo-classes select elements in alternating order.

**Syntax:**
```css
tr:nth-child(odd) {
  background-color: lightgray;
}

tr:nth-child(even) {
  background-color: white;
}
```

**Example:**
```html
<table>
  <tr><td>Row 1</td></tr>
  <tr><td>Row 2</td></tr>
  <tr><td>Row 3</td></tr>
  <tr><td>Row 4</td></tr>
</table>
```
*Odd rows have a light gray background, even rows have a white background.*

---

## **7. Universal Selector within a Specific Tag (`*`)**
The universal selector (`*`) selects all elements, but when used under a specific tag, it affects only its children.

**Syntax:**
```css
div * {
  border: 1px solid black;
}
```

**Example:**
```html
<div>
  <p>Paragraph inside div.</p>
  <span>Span inside div.</span>
</div>
```
*All elements inside `<div>` will have a black border.*

---

## **8. Attribute Selectors**
Attribute selectors target elements with specific attributes.

### **Exact Match `[attr="value"]`**
```css
input[type="text"] {
  border: 2px solid blue;
}
```
*Targets `<input>` fields with `type="text"`.*

### **Contains `[attr*="value"]`**
```css
a[href*="example"] {
  color: red;
}
```
*Targets links containing "example" in their `href`.*

### **Starts With `[attr^="value"]`**
```css
a[href^="https"] {
  font-weight: bold;
}
```
*Targets links that start with "https".*

### **Ends With `[attr$="value"]`**
```css
img[src$=".png"] {
  border-radius: 10px;
}
```
*Targets images that end in `.png`.*

---

### **Conclusion**
These selectors provide powerful ways to style elements based on their position, attributes, and structure. Using them effectively helps in writing clean, maintainable CSS.

Let me know if you need any modifications! 🚀