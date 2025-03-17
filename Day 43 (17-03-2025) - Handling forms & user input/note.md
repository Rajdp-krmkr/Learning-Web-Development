# **JavaScript Day 6: More on DOM Manipulation and Event Handling**

## **1. Adding and Removing Elements in the DOM**

### **a) Creating New Elements**

You can create new HTML elements dynamically using JavaScript using `document.createElement` and then insert them into the page using methods like `appendChild`.

```js
const newElement = document.createElement("p"); // Creates a new paragraph element
newElement.innerText = "This is a new paragraph!"; // Adds text inside the paragraph
document.body.appendChild(newElement); // Appends it to the body
```

You can also append elements inside a specific container:

```js
const container = document.getElementById("container");
const newDiv = document.createElement("div");
newDiv.classList.add("box");
newDiv.innerText = "New Box";
container.appendChild(newDiv);
```

### **b) Removing Elements**

To remove an element from the DOM, you can use the `remove` method:

```js
const elementToRemove = document.getElementById("removeMe");
elementToRemove.remove();
```

Alternatively, using `removeChild`:

```js
const parent = document.getElementById("parentDiv");
const child = document.getElementById("childDiv");
parent.removeChild(child);
```

---

## **2. Modifying CSS Classes Dynamically**

### **a) Adding and Removing Classes**

Manipulate CSS classes using `classList.add` and `classList.remove`:

```js
document.getElementById("box").classList.add("highlight");
document.getElementById("box").classList.remove("highlight");
```

### **b) Toggling Classes**

You can toggle a class on and off with `classList.toggle`:

```js
document.getElementById("box").classList.toggle("hidden");
```

### **c) Checking if an Element has a Class**

```js
const hasClass = document.getElementById("box").classList.contains("highlight");
console.log("Has highlight class?", hasClass);
```

---

## **3. Advanced Event Handling**

### **a) Handling Multiple Elements**

You can attach event listeners to multiple elements using `querySelectorAll`:

```js
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    alert("Button Clicked: " + this.innerText);
  });
});
```

### **b) Event Bubbling**

Event bubbling means that when an event is triggered on a child element, it also triggers on its parent elements.

```js
document.getElementById("child").addEventListener("click", function () {
  alert("Child clicked");
});
document.getElementById("parent").addEventListener("click", function () {
  alert("Parent clicked");
});
```

---

## **4. Forms and User Input Handling**

### **a) Retrieving Input Values**

To get the value of an input field:

```js
const inputValue = document.getElementById("username").value;
console.log("User entered: ", inputValue);
```

### **b) Updating Content Dynamically Based on Input**

```js
document.getElementById("username").addEventListener("input", function (event) {
  document.getElementById("displayName").innerText = event.target.value;
});
```

---

## **5. Class Assignment**

1. Create a button that, when clicked, adds a new paragraph to the page.
2. Create a list with items. Clicking an item should remove it from the list.
3. Create a simple form with a name field. When submitted, display the name below the form without reloading the page.
4. Create a div that changes background color when hovered and returns to normal when the mouse leaves.

---

## **Next Class Preview: Introduction to Local Storage and Session Storage**

- Storing data in the browser
- Retrieving stored data
- Difference between local and session storage
- Practical examples

Happy Coding! 🚀
