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