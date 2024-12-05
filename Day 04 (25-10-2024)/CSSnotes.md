# CSS Basics: `background-color` and `color`

## Introduction
In web design, colors play a crucial role in enhancing readability and visual appeal. Two essential CSS properties that control color in HTML elements are `background-color` and `color`. This guide explains these properties and provides examples of their usage in common HTML elements, such as headings, paragraphs, and links.

---

## Properties Overview

### 1. `background-color`
   - **Purpose**: Sets the background color of an element.
   - **Syntax**:
     ```css
     selector {
       background-color: color_value;
     }
     ```
   - **Accepted Values**:
     - **Named Colors**: e.g., `red`, `blue`, `green`
     - **HEX Colors**: e.g., `#FF5733`
     - **RGB Colors**: e.g., `rgb(255, 87, 51)`
     - **HSL Colors**: e.g., `hsl(9, 100%, 60%)`

   - **Example**:
     ```css
     h1 {
       background-color: #4CAF50; /* Green background */
     }
     ```

### 2. `color`
   - **Purpose**: Sets the text color of an element.
   - **Syntax**:
     ```css
     selector {
       color: color_value;
     }
     ```
   - **Accepted Values**:
     - Same as `background-color` (Named Colors, HEX, RGB, and HSL).

   - **Example**:
     ```css
     p {
       color: #333333; /* Dark grey text */
     }
     ```

---

## Complete Example with HTML and CSS

Here’s how to apply the `background-color` and `color` properties to a heading (`<h1>`), a paragraph (`<p>`), and a link (`<a>`) in an HTML file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Colors Example</title>
  <style>
    /* Styling for Heading */
    h1 {
      background-color: #4CAF50; /* Green background */
      color: white; /* White text */
      padding: 10px;
    }

    /* Styling for Paragraph */
    p {
      background-color: #f2f2f2; /* Light grey background */
      color: #333; /* Dark grey text */
      padding: 10px;
    }

    /* Styling for Link */
    a {
      color: #0066cc; /* Blue text */
      background-color: #e6f7ff; /* Light blue background */
      padding: 5px;
      text-decoration: none;
    }

    /* Hover Effect for Link */
    a:hover {
      background-color: #cceeff; /* Slightly darker blue on hover */
    }
  </style>
</head>
<body>
  <h1>Welcome to My Webpage</h1>
  <p>This is a sample paragraph showcasing the use of color and background-color properties.</p>
  <a href="https://github.com/username">Visit My GitHub Profile</a>
</body>
</html>
