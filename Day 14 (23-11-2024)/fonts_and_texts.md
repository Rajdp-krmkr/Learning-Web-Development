# CSS Typography and Text Properties

CSS provides a variety of text and font-related properties to control and enhance the appearance of text on a webpage. Below are the detailed notes for each property, including their default values and uses.

---
## Font Properties

### 1. `font-family`  
**Definition**: Specifies the font or fonts to be applied to an element.  
**Default Value**: Depends on the browser, usually `"Times New Roman"` or similar.  
**Syntax**:  
```css
font-family: "Arial", "Helvetica", sans-serif;
```
**Use**:  
Defines the typeface for text and allows fallbacks.  

---

### 2. `font-size`  
**Definition**: Sets the size of the font.  
**Default Value**: `16px` (or `medium`) in most browsers.  
**Syntax**:  
```css
font-size: 20px;
font-size: 1.5em; /* Relative to parent element */
```
**Use**:  
Controls how large or small the text appears.

---

### 3. `font-style`  
**Definition**: Specifies the style of the font (normal, italic, or oblique).  
**Default Value**: `normal`.  
**Syntax**:  
```css
font-style: italic;
```
**Use**:  
Used for emphasis, such as italicizing text.

---

## Text Styling Properties

### 4. `text-decoration`  
**Definition**: Adds decoration to the text (underline, overline, line-through, or none).  
**Default Value**: `none`.  
**Syntax**:  
```css
text-decoration: underline;
```
**Use**:  
Adds or removes text decorations like underlining links.

---

### 5. `text-decoration-color`  
**Definition**: Specifies the color of the text decoration.  
**Default Value**: Same as the text color.  
**Syntax**:  
```css
text-decoration-color: red;
```
**Use**:  
Customizes the color of underlines or other decorations.

---

### 6. `text-decoration-style`  
**Definition**: Defines the style of text decoration (solid, wavy, dotted, dashed, or double).  
**Default Value**: `solid`.  
**Syntax**:  
```css
text-decoration-style: wavy;
```
**Use**:  
Enhances the visual appearance of text decorations.

---

### 7. `text-decoration-thickness`  
**Definition**: Sets the thickness of the text decoration line.  
**Default Value**: Depends on font size and browser.  
**Syntax**:  
```css
text-decoration-thickness: 2px;
```
**Use**:  
Adjusts the width of underlines or other decorations.

---

## Spacing and Transformation Properties

### 8. `line-height`  
**Definition**: Specifies the space between lines of text.  
**Default Value**: `normal` (usually 1.2 times the font size).  
**Syntax**:  
```css
line-height: 1.5;
```
**Use**:  
Improves text readability by adjusting line spacing.

---

### 9. `letter-spacing`  
**Definition**: Defines the spacing between characters.  
**Default Value**: `normal` (depends on the font).  
**Syntax**:  
```css
letter-spacing: 2px;
```
**Use**:  
Customizes the spacing between individual letters.

---

### 10. `text-transform`  
**Definition**: Specifies text capitalization (uppercase, lowercase, capitalize).  
**Default Value**: `none`.  
**Syntax**:  
```css
text-transform: uppercase;
```
**Use**:  
Applies consistent text case transformations.

---

### 11. `text-indent`  
**Definition**: Specifies the indentation of the first line in a block of text.  
**Default Value**: `0`.  
**Syntax**:  
```css
text-indent: 20px;
```
**Use**:  
Visually separates paragraphs by adding indentation.

---

### 12. `text-overflow`  
**Definition**: Specifies how overflowed text content is handled.  
**Default Value**: `clip`.  
**Syntax**:  
```css
text-overflow: ellipsis;
```
**Use**:  
Adds ellipses or clips text that overflows its container.

---

### 13. `word-break`  
**Definition**: Specifies how words should break when they overflow the container.  
**Default Value**: `normal`.  
**Syntax**:  
```css
word-break: break-word;
```
**Use**:  
Prevents layout issues by breaking long words.

---

## Alignment Properties

### 14. `text-align`  
**Definition**: Specifies horizontal alignment of text.  
**Default Value**: `left` (for LTR languages).  
**Syntax**:  
```css
text-align: center;
```
**Possible Values**:  
- `left`  
- `right`  
- `center`  
- `justify`  

**Use**:  
Aligns text for better visual structure.

---

## Examples  

### Example 1: Using Font and Text Styling  
```css
p {
  font-family: "Arial", sans-serif;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 1px;
  text-transform: capitalize;
}
```

### Example 2: Combining Decorations  
```css
h1 {
  text-decoration: underline;
  text-decoration-color: blue;
  text-decoration-style: dashed;
  text-decoration-thickness: 3px;
}
```

### Example 3: Alignment and Overflow  
```css
div {
  text-align: justify;
  text-overflow: ellipsis;
  word-break: break-word;
}
```

---

These properties provide precise control over text appearance and layout, ensuring a visually appealing and accessible web design.