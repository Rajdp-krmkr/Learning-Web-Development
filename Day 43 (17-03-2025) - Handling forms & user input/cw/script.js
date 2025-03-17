// Task 3: Show and Hide Content
// Create a <div> with some text and a button.
// When the button is clicked, hide the <div> if it is visible and show it again if it is hidden.
// Use style.display to achieve this effect.

/*
    steps: 
        1. create a div with some text and a button in html
        2. target the button and also target the div
        3. add an event listener "click" to the button
        4. check if the div is visible or not 
        5. if visible, hide it. if hidden, show it.
*/
const button = document.getElementById("btn");
const container = document.getElementById("container");

button.addEventListener("click", function () {
  if (container.style.display == "none") {
    container.style.display = "block";
  } else {
    container.style.display = "none";
  }
});