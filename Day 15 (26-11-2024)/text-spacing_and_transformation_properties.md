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
