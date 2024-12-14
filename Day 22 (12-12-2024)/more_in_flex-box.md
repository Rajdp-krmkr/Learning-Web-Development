# More of Flexbox

Flexbox provides advanced layout techniques for one-dimensional layouts. Here, we delve into some additional flexbox properties that enhance control over layouts.

---

## **flex-wrap**
The `flex-wrap` property controls whether flex items should wrap onto multiple lines if they overflow the container.

### **Syntax:**
```css
flex-wrap: nowrap | wrap | wrap-reverse;
```

### **Values:**
- **nowrap** (default): All flex items are placed in a single line.
- **wrap**: Items wrap onto multiple lines, starting from the top.
- **wrap-reverse**: Items wrap onto multiple lines, but in reverse order.

### **Example:**
```css
.container {
  display: flex;
  flex-wrap: wrap;
}
```

---

## **align-content**
The `align-content` property aligns a flex container’s lines when there is extra space along the cross-axis.

### **Syntax:**
```css
align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch;
```

### **Values:**
- **flex-start**: Lines packed to the start of the container.
- **flex-end**: Lines packed to the end of the container.
- **center**: Lines packed to the center.
- **space-between**: Equal space between lines.
- **space-around**: Equal space around lines.
- **space-evenly**: Equal space between and around lines.
- **stretch**: Lines stretch to fill the container.

### **Example:**
```css
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
}
```

---

## **flex-flow**
The `flex-flow` property is a shorthand for `flex-direction` and `flex-wrap`.

### **Syntax:**
```css
flex-flow: <flex-direction> <flex-wrap>;
```

### **Example:**
```css
.container {
  display: flex;
  flex-flow: row wrap;
}
```

---

## **gap, row-gap, and column-gap**
The `gap` properties define the spacing between flex items.

### **gap**
Shorthand property for `row-gap` and `column-gap`.

### **Syntax:**
```css
gap: <row-gap> <column-gap>;
```

### **row-gap**
Defines the spacing between rows in a flex container.

### **Syntax:**
```css
row-gap: <length>;
```

### **column-gap**
Defines the spacing between columns in a flex container.

### **Syntax:**
```css
column-gap: <length>;
```

### **Example:**
```css
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 20px; /* Row gap: 10px, Column gap: 20px */
}
```

---

## **order**
The `order` property specifies the order of the flex items.

### **Syntax:**
```css
order: <integer>;
```

### **Example:**
```css
.item {
  order: 2; /* Default is 0 */
}
```

---

## **flex-grow**
Defines how much a flex item will grow relative to the rest of the items in the container.

### **Syntax:**
```css
flex-grow: <number>;
```

### **Example:**
```css
.item {
  flex-grow: 1; /* Default is 0 */
}
```

---

## **flex-shrink**
Specifies how much a flex item will shrink relative to the rest of the items when space is limited.

### **Syntax:**
```css
flex-shrink: <number>;
```

### **Example:**
```css
.item {
  flex-shrink: 2; /* Default is 1 */
}
```

---

## **align-self**
The `align-self` property allows individual flex items to override the alignment set by `align-items`.

### **Syntax:**
```css
align-self: auto | flex-start | flex-end | center | baseline | stretch;
```

### **Values:**
- **auto**: Inherits `align-items` value from the parent.
- **flex-start**: Aligns the item at the start of the cross-axis.
- **flex-end**: Aligns the item at the end of the cross-axis.
- **center**: Aligns the item at the center of the cross-axis.
- **baseline**: Aligns the item’s baseline with the container’s baseline.
- **stretch**: Stretches the item to fill the container (default).

### **Example:**
```css
.item {
  align-self: center;
}
```

---

These properties offer granular control over how flex containers and items behave, making them essential for responsive designs.
