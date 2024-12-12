# **CSS Media Queries**

Media queries enable responsive design by applying different styles based on device characteristics such as screen size, resolution, and orientation.  

---

## **Syntax**  

```css
@media (media-type) and (condition) {
  /* CSS Rules */
}
```

---

## **Common Media Query Types**  

### **1. Screen and Width**  

#### **Max-Width**  
Apply styles to devices with a maximum width.  

```css
@media screen and (max-width: 768px) {
  body {
    font-size: 14px;
  }
}
```

#### **Min-Width**  
Apply styles to devices with a minimum width.  

```css
@media screen and (min-width: 1024px) {
  body {
    font-size: 18px;
  }
}
```

---

### **2. Orientation**  

#### **Portrait Mode**  

```css
@media screen and (orientation: portrait) {
  div {
    width: 100%;
  }
}
```

#### **Landscape Mode**  

```css
@media screen and (orientation: landscape) {
  div {
    width: 50%;
  }
}
```

---

### **3. Aspect Ratio**  

Match devices with specific aspect ratios.  

```css
@media screen and (aspect-ratio: 16/9) {
  video {
    width: 100%;
  }
}
```

---

## **Advanced Media Queries**  

### **Combining Conditions**  

```css
@media screen and (min-width: 768px) and (max-width: 1200px) {
  .container {
    padding: 20px;
  }
}
```
<!-- 
### **Targeting High-Resolution Screens**  

```css
@media screen and (min-resolution: 2dppx) {
  img {
    filter: grayscale(50%);
  }
}
``` -->

---

## **Use Cases of Media Queries**  

1. **Responsive Design:** Adjust layouts for mobile, tablet, and desktop.  
2. **Optimizing Performance:** Serve appropriate styles for specific devices.  
3. **Design Adaptation:** Change styles dynamically based on device properties.  
