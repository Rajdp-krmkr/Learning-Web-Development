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

# CSS Priority Order: Inline, Internal, and External CSS  

When multiple CSS methods are applied to the same element, the priority order is as follows:  

1. **Inline CSS**:  
   - **Highest priority**.  
   - Styles written directly within the `style` attribute of an HTML element.  
   - Overrides both internal and external CSS.  

2. **Internal CSS**:  
   - **Medium priority**.  
   - Styles defined inside the `<style>` tag within the `<head>` section of the HTML document.  
   - Overrides external CSS but is overridden by inline styles.  

3. **External CSS**:  
   - **Lowest priority**.  
   - Styles written in a separate `.css` file and linked to the HTML document.  
   - Overridden by both inline and internal CSS.  

### Example of Priority:  

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css"> <!-- External CSS -->
  <style>
    p {
      color: blue; /* Internal CSS */
    }
  </style>
</head>
<body>
  <p style="color: red;">This is a paragraph.</p> <!-- Inline CSS -->
</body>
</html>
```

- **Result**: The paragraph text color will be red because inline CSS takes the highest priority, followed by internal, and then external CSS.

