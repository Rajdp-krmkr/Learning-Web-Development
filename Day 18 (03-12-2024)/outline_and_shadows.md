# **CSS Notes: Shadows, Outlines, and Borders**

This document provides an overview of the CSS properties for creating shadows, outlines, border-radius, and offsets. It includes syntaxes and examples for better understanding.

---

## **1. Box Shadows**
The `box-shadow` property in CSS is used to add shadows to elements.

### **Syntax**
```css
box-shadow: offset-x offset-y blur-radius spread-radius color;
```

### **Values**
- **offset-x**: Horizontal shadow offset. Positive values move the shadow to the right, and negative values move it to the left.  
- **offset-y**: Vertical shadow offset. Positive values move the shadow downward, and negative values move it upward.  
- **blur-radius** *(optional)*: The blurring effect of the shadow. Higher values create more blur.  
- **spread-radius** *(optional)*: Expands or contracts the shadow's size.  
- **color**: Specifies the shadow color (can use `rgba` for transparency).  

### **Example**
```css
/* Simple shadow */
box-shadow: 5px 5px 10px gray;

/* Shadow with spread radius */
box-shadow: 3px 3px 8px 2px rgba(0, 0, 0, 0.3);
```

---

## **2. Text Shadows**
The `text-shadow` property adds shadows to text elements.

### **Syntax**
```css
text-shadow: offset-x offset-y blur-radius color;
```

### **Values**
- **offset-x**: Horizontal shadow offset.  
- **offset-y**: Vertical shadow offset.  
- **blur-radius** *(optional)*: The blurring effect of the shadow.  
- **color**: The color of the text shadow.  

### **Example**
```css
/* Simple text shadow */
text-shadow: 2px 2px 4px black;

/* Neon effect shadow */
text-shadow: 0 0 5px cyan, 0 0 10px blue, 0 0 20px purple;
```

---

## **3. Outlines**
The `outline` property draws a line outside the border of an element.

### **Syntax**
```css
outline: outline-width outline-style outline-color;
```

### **Values**
- **outline-width**: The thickness of the outline (e.g., `thin`, `medium`, `thick`, or specific units).  
- **outline-style**: The style of the outline (e.g., `solid`, `dashed`, `dotted`, `none`).  
- **outline-color**: The color of the outline.  

### **Example**
```css
/* Simple outline */
outline: 2px solid red;

/* Dotted outline */
outline: 3px dotted blue;
```

---

## **4. Outline Offset**
The `outline-offset` property moves the outline away from the border.

### **Syntax**
```css
outline-offset: length;
```

### **Values**
- **length**: The distance between the border and the outline (positive or negative values).  

### **Example**
```css
/* Outline offset example */
outline: 2px solid orange;
outline-offset: 5px;
```

---

## **5. Border Radius**
The `border-radius` property is used to create rounded corners for an element.

### **Syntax**
```css
border-radius: length | percentage;
```

### **Values**
- **length**: The radius in absolute units (e.g., `px`, `em`).  
- **percentage**: The radius as a percentage of the element's size (e.g., `50%` for circular shapes).  

### **Shorthand Syntax**
```css
border-radius: top-left top-right bottom-right bottom-left;
```

### **Example**
```css
/* Simple rounded corners */
border-radius: 10px;

/* Fully circular element */
border-radius: 50%;

/* Different radii for each corner */
border-radius: 10px 20px 30px 40px;
```

---

## **6. Combining Properties**
You can combine these properties to create sophisticated visual effects.

### **Example**
```css
/* Card with shadow, outline, and rounded corners */
.card {
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  outline: 2px dashed teal;
  outline-offset: 5px;
  border-radius: 15px;
  padding: 20px;
  background-color: white;
}
```

---

## **Exercises**
1. Create a button with a shadow and rounded corners.  
2. Style a text heading with a glowing shadow effect.  
3. Add a dashed outline to an image and offset it by 10px.  