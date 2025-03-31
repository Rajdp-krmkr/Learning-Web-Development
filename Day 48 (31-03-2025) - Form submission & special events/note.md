# JavaScript Day 11 - Form & Keyboard Events

## Form Events

Form events allow us to interact with user inputs in forms. These events help validate, modify, or capture data before submission.

### 1. `submit` Event

- Triggers when a form is submitted.
- Used to validate form data before sending it to a server.
- Prevent default behavior using `event.preventDefault()` to stop actual submission.

**Example:**

```javascript
const form = document.querySelector("#myForm");
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevents page reload
  console.log("Form Submitted!");
});
```

### 2. `change` Event

- Triggers when the value of an input, select, or _textarea_ changes and the focus moves away.

**Example:**

```javascript
const input = document.querySelector("#username");
input.addEventListener("change", function () {
  console.log("Input changed: ", input.value);
});
```

## Keyboard Events

Keyboard events allow us to track when the user presses or releases keys.

### 1. `keydown` Event

- Fires when a key is pressed down.
- Useful for detecting when a user starts pressing a key.

**Example:**

```javascript
document.addEventListener("keydown", function (event) {
  console.log("Key down: ", event.key);
});
```

### 2. `keyup` Event

- Fires when a key is released.
- Useful for detecting when a user finishes pressing a key.

**Example:**

```javascript
document.addEventListener("keyup", function (event) {
  console.log("Key released: ", event.key);
});
```

### 3. `keypress` Event

- Fires continuously while a key is being pressed down.
- **Note:** `keypress` is deprecated in modern browsers; use `keydown` instead.

**Example:**

```javascript
document.addEventListener("keypress", function (event) {
  console.log("Key pressed: ", event.key);
});
```

## Classwork Task

1. Create a form with an input field and a submit button.
2. Prevent form submission and log input data to the console.
3. Detect when a user presses the "Enter" key and display an alert.

This concludes Day 11! 🎉
