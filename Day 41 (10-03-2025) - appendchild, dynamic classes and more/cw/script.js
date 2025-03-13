/* steps: 
1. target the button
2. add an event to "click"
3. create a function that creates a p tag, and add some text in it.
4. target the container to add the p tag.
5. append the p tag as a child inside container
*/

const add_button = document.getElementById("add_button"); //step 1

add_button.addEventListener("click", function () {
  //step 2
  const paragraph = document.createElement("p"); // step 3
  paragraph.innerText = "This is a new paragraph";

  paragraph.classList.add("styled_paragraph"); //adding styles into the paragraph

  const container = document.getElementById("container"); //step 4
  container.appendChild(paragraph); //step 5
});

const delete_button = document.getElementById("delete_button");

delete_button.addEventListener("click", function () {
  const paragraph = document.getElementsByTagName("p");
  paragraph[0].remove();
});
