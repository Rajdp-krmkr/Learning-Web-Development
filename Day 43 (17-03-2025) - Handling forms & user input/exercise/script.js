//Create a simple form with a name field.
// When submitted, display the name below the form without reloading the page.

/*
    steps:
        1. create input field, button and a paragraph to display name in html
        2. target them.
        3. collect value from the input field by ".value"
        4. add an eventlistner to the button that will display the name in the paragraph
        5. display the name inside the paragraph 
*/

const button = document.getElementById("submit_button");
const nameInput = document.getElementById("name");
const displayName = document.getElementById("displayName");

button.addEventListener("click", function () {
    const nameValue = nameInput.value;
    displayName.innerText = nameValue;
})