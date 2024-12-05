

---
# Position Property in CSS

## Overview
The `position` property in CSS specifies the positioning method for an element. It defines how an element is placed in the document flow and whether it is affected by other elements.

## Values of `position`

1. **`static` (default)**:
   - The element is positioned according to the normal document flow.
   - Top, right, bottom, and left properties have no effect.

2. **`relative`**:
   - The element is positioned relative to its original position in the document flow.
   - Top, right, bottom, and left can adjust its position without affecting surrounding elements.

3. **`fixed`**:
   - The element is positioned relative to the viewport.
   - It does not move when the page is scrolled.

4. **`sticky`**:
   - The element toggles between `relative` and `fixed` based on the user's scroll position.
   - Requires at least one of `top`, `right`, `bottom`, or `left` properties to function.

5. **`absolute`**:
   - The element is positioned relative to the nearest **positioned ancestor** (an ancestor with a position value other than `static`).
   - If no such ancestor exists, it is positioned relative to the initial containing block (usually the `<html>` element).

## Exceptions for Positioned Parent
For elements using `perspective`, `transform`, or `filter` properties, the **nearest ancestor with a position other than `static`** will act as the positioned parent.

### Example:
```html
<div style="position: relative; transform: translateX(50px);">
  <div style="position: absolute; top: 0; left: 0;">
    I'm positioned relative to the transformed parent.
  </div>
</div>
```

## Examples
```css
/* Relative positioning */
.relative-box {
  position: relative;
  top: 10px;
  left: 20px;
}

/* Fixed positioning */
.fixed-box {
  position: fixed;
  bottom: 0;
  right: 0;
}

/* Absolute positioning */
.absolute-box {
  position: absolute;
  top: 50px;
  left: 50px;
}
```


