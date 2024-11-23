# CSS Pseudo-Elements: `::before` and `::after`

## Introduction  
The `::before` and `::after` pseudo-elements are used to insert content before or after the content of an HTML element. They allow developers to add decorative or functional content without modifying the HTML structure.

## Syntax  
```css
selector::before {
  content: "Text or value";
  /* Additional styles */
}

selector::after {
  content: "Text or value";
  /* Additional styles */
}
```

## Key Features  
1. Both `::before` and `::after` require the `content` property to function.  
2. They are used in combination with a selector to target specific elements.  
3. They are commonly used for visual enhancements, icons, or adding additional information.

---

# How They Are Used  

## Adding Decorative Content  
```html
<p class="quote">Life is beautiful.</p>
```

```css
.quote::before {
  content: "“"; /* Opening quotation mark */
  font-size: 20px;
}

.quote::after {
  content: "”"; /* Closing quotation mark */
  font-size: 20px;
}
```
**Output:**  
```
“Life is beautiful.”
```

## Styling Buttons  
```html
<button class="cta">Click Me</button>
```

```css
.cta::before {
  content: "👉"; /* Adds an arrow icon before text */
  margin-right: 5px;
}
```
**Output:**  
```
👉 Click Me
```

## Adding Icons Dynamically  
```html
<a href="#" class="link">Home</a>
```

```css
.link::after {
  content: "🔗"; /* Adds a link icon */
  margin-left: 5px;
}
```
**Output:**  
```
Home 🔗
```

---

## Where They Are Used  

1. **Decorative Purposes**:  
   - Add quotation marks, arrows, or icons.  
   - Create decorative elements without cluttering HTML.

2. **Dynamic Visual Effects**:  
   - Use animations or transitions for hover states.  

3. **Accessibility Enhancements**:  
   - Add extra labels or indicators for better user understanding.  

4. **Styling List Items or Headers**:  
   - Create custom bullets or section markers.  

---

## Example of Styling with Both  
```html
<h1 class="header">Welcome</h1>
```

```css
.header::before {
  content: "🌟"; /* Star before the header */
  margin-right: 10px;
}

.header::after {
  content: "✨"; /* Sparkle after the header */
  margin-left: 10px;
}
```

**Output:**  
🌟 Welcome ✨

---