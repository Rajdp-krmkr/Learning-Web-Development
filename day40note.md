# **JavaScript Day 6: More on DOM Manipulation and Event Handling**

## **1. Adding and Removing Elements in the DOM**
### **a) Creating New Elements**
You can create new HTML elements dynamically using JavaScript.
```js
const newElement = document.createElement("p"); // Creates a new paragraph element
newElement.innerText = "This is a new paragraph!"; // Adds text inside the paragraph
document.body.appendChild(newElement); // Appends it to the body
```

### **b) Removing Elements**
To remove an element from the DOM:
```js
const elementToRemove = document.getElementById("removeMe");
elementToRemove.remove();
```
Alternatively:
```js
const parent = document.getElementById("parentDiv");
const child = document.getElementById("childDiv");
parent.removeChild(child);
```

---

## **2. Modifying CSS Classes Dynamically**
### **a) Adding and Removing Classes**
```js
document.getElementById("box").classList.add("highlight");
document.getElementById("box").classList.remove("highlight");
```

### **b) Toggling Classes**
```js
document.getElementById("box").classList.toggle("hidden");
```

---

## **3. Advanced Event Handling**
### **a) Handling Multiple Elements**
```js
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", function() {
        alert("Button Clicked: " + this.innerText);
    });
});
```

### **b) Event Bubbling and Capturing**
#### **i) Event Bubbling (Default Behavior: Inner to Outer)**
```js
document.getElementById("child").addEventListener("click", function() {
    alert("Child clicked");
});
document.getElementById("parent").addEventListener("click", function() {
    alert("Parent clicked");
});
```
#### **ii) Event Capturing (Outer to Inner)**
```js
document.getElementById("parent").addEventListener("click", function() {
    alert("Parent clicked");
}, true); // Capture phase enabled
```

---

## **4. Forms and User Input Handling**
### **a) Retrieving Input Values**
```js
const inputValue = document.getElementById("username").value;
console.log("User entered: ", inputValue);
```

### **b) Preventing Default Form Submission**
```js
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents page reload
    alert("Form submitted successfully!");
});
```

---

## **5. Class Assignment**
1. Create a button that, when clicked, adds a new paragraph to the page.
2. Create a list with items. Clicking an item should remove it from the list.
3. Create a simple form with a name field. When submitted, display the name below the form without reloading the page.

---

## **Next Class Preview: Introduction to Local Storage and Session Storage**
- Storing data in the browser
- Retrieving stored data
- Difference between local and session storage
- Practical examples

Happy Coding! 🚀

