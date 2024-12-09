# CSS Flexbox Notes  

Flexbox is a powerful layout module in CSS designed to help arrange elements in a flexible and predictable way, even when their sizes are dynamic. It allows efficient alignment and distribution of space among items in a container.  

---

## **What is `display: flex`?**  
The `display: flex` property enables the Flexbox layout on a container (parent element). Once applied, it turns the container's direct child elements into flex items.  

### **Where to Apply:**  
- Apply `display: flex` **to the parent container**.  
- It makes the immediate children of the parent behave as flex items.  

### **What It Does:**  
- Aligns child elements in a row or column (based on the `flex-direction`).  
- Simplifies alignment and spacing of child elements.  

**Example:**  
```css
.container {
  display: flex;
}
```

---

## **`flex-direction`**  

The `flex-direction` property defines the main axis along which flex items are placed in a flex container.  

### **Values:**  
- `row` (default): Items are placed in a row, from left to right.  
- `row-reverse`: Items are placed in a row, but in reverse order (right to left).  
- `column`: Items are placed in a column, from top to bottom.  
- `column-reverse`: Items are placed in a column, but in reverse order (bottom to top).  

### **Where to Apply:**  
- Apply to the **parent container**.  

**Example:**  
```css
.container {
  display: flex;
  flex-direction: column;
}
```

---

## **`justify-content`**  

The `justify-content` property aligns flex items along the main axis (as defined by `flex-direction`).  

### **Values:**  
- `flex-start` (default): Items align at the start of the main axis.  
- `flex-end`: Items align at the end of the main axis.  
- `center`: Items are centered along the main axis.  
- `space-between`: Items are evenly distributed, with space between them.  
- `space-around`: Items are evenly distributed, with space around them.  
- `space-evenly`: Items are evenly distributed, with equal space between and around items.  

### **Where to Apply:**  
- Apply to the **parent container**.  

**Example:**  
```css
.container {
  display: flex;
  justify-content: space-between;
}
```

---

## **`align-items`**  

The `align-items` property aligns flex items along the cross axis (perpendicular to the main axis).  

### **Values:**  
- `stretch` (default): Items stretch to fill the container (if no height is set).  
- `flex-start`: Items align at the start of the cross axis.  
- `flex-end`: Items align at the end of the cross axis.  
- `center`: Items are centered along the cross axis.  
- `baseline`: Items align along their text baselines.  

### **Where to Apply:**  
- Apply to the **parent container**.  

**Example:**  
```css
.container {
  display: flex;
  align-items: center;
}
```

---

## **Key Notes:**  
1. **Parent-Child Relationship:** Flex properties like `justify-content`, `align-items`, and `flex-direction` are always applied to the **parent container**, but they affect how the **child items** behave within the parent.  
2. **Default Behavior:** 
   - `flex-direction`: `row`  
   - `justify-content`: `flex-start`  
   - `align-items`: `stretch`  

---

**Example Usage:**  
```html
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
```

```css
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.item {
  background: lightblue;
  padding: 10px;
  margin: 5px;
}
```  

By mastering Flexbox, you can create robust, responsive layouts with ease!  