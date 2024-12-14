
# CSS Transitions and Transformations  

CSS provides powerful tools to create smooth animations and transformations, enhancing the user experience. This note covers `transition` properties, as well as `filter` and `transform` with their different values.

---

## **CSS Transitions**

Transitions allow smooth changes between property values over a specified duration.

### **1. transition-property**
Specifies the CSS property to apply the transition to.  

**Syntax:**  
```css
transition-property: all | none | <property-name>;
```  

**Values:**  
- `all`: Applies transitions to all properties (default).  
- `none`: No property will have transitions.  
- Specific property name (e.g., `background-color`, `transform`).

**Example:**  
```css
.box {
  transition-property: background-color, transform;
}
```

---

### **2. transition-duration**
Defines the length of time a transition takes to complete.  

**Syntax:**  
```css
transition-duration: <time>;
```  

**Values:**  
- `<time>`: Specify time in seconds (`s`) or milliseconds (`ms`).

**Example:**  
```css
.box {
  transition-duration: 0.5s;
}
```

---

### **3. transition-delay**
Specifies the delay before a transition starts.  

**Syntax:**  
```css
transition-delay: <time>;
```  

**Values:**  
- `<time>`: Specify delay in seconds (`s`) or milliseconds (`ms`).

**Example:**  
```css
.box {
  transition-delay: 0.2s;
}
```

---

### **4. transition-timing-function**
Defines how the intermediate values during a transition are calculated.  

**Syntax:**  
```css
transition-timing-function: ease | linear | ease-in | ease-out | ease-in-out | cubic-bezier(n, n, n, n);
```  

**Values:**  
- `ease` (default): Starts slow, speeds up, then slows down.  
- `linear`: Transition progresses at a constant speed.  
- `ease-in`: Slow start.  
- `ease-out`: Slow end.  
- `ease-in-out`: Slow start and end.  
- `cubic-bezier`: Custom curve for advanced control.

**Example:**  
```css
.box {
  transition-timing-function: ease-in-out;
}
```

---

### **Shorthand Property: transition**
The `transition` shorthand combines all the above properties.  

**Syntax:**  
```css
transition: <property> <duration> <timing-function> <delay>;
```  

**Example:**  
```css
.box {
  transition: transform 0.3s ease-in 0.1s;
}
```

---

## **CSS Transform**

The `transform` property allows you to apply 2D or 3D transformations to elements.

### **Syntax:**  
```css
transform: <function>;
```  

### **Transform Functions:**  
- **`translate(x, y)`**: Moves the element along the X and Y axis.  
  Example:  
  ```css
  transform: translate(50px, 100px);
  ```  

- **`scale(x, y)`**: Scales the element size.  
  Example:  
  ```css
  transform: scale(1.5, 1.5);
  ```  

- **`rotate(angle)`**: Rotates the element by the given degree.  
  Example:  
  ```css
  transform: rotate(45deg);
  ```  

- **`skew(x-angle, y-angle)`**: Skews the element.  
  Example:  
  ```css
  transform: skew(20deg, 10deg);
  ```  

- **`matrix(a, b, c, d, e, f)`**: Combines multiple transformations.  

---

## **CSS Filter**

The `filter` property applies visual effects such as blurring or color shifting.

### **Syntax:**  
```css
filter: <function>;
```  

### **Filter Functions:**  
- **`blur(px)`**: Applies a blur effect.  
  Example:  
  ```css
  filter: blur(5px);
  ```  

- **`brightness(%)`**: Adjusts brightness.  
  Example:  
  ```css
  filter: brightness(150%);
  ```  

- **`contrast(%)`**: Adjusts contrast.  
  Example:  
  ```css
  filter: contrast(80%);
  ```  

- **`grayscale(%)`**: Converts the element to grayscale.  
  Example:  
  ```css
  filter: grayscale(100%);
  ```  

- **`opacity(%)`**: Adjusts transparency.  
  Example:  
  ```css
  filter: opacity(50%);
  ```  

- **`invert(%)`**: Inverts colors.  
  Example:  
  ```css
  filter: invert(100%);
  ```  

- **`sepia(%)`**: Applies a sepia tone.  
  Example:  
  ```css
  filter: sepia(50%);
  ```  

- **`drop-shadow(offset-x, offset-y, blur-radius, color)`**: Adds a shadow effect.  
  Example:  
  ```css
  filter: drop-shadow(10px 10px 5px black);
  ```  

---