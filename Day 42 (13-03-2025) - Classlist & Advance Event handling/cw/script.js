/*
    steps:
    1. create a button in html
    2. create a span where the no. of clicks are shown
    3. Create a variable "count" that will be initialized with 0
    4. target the button using getElementById
    5. Execute a function on clicking on the button that will increase the "count" by 1
    6. Display the "count" in the html as an innerText
    
*/

let count = 0;

const button = document.querySelector("button");

button.addEventListener("click", () => {
  count = count + 1;
  //   count += 1;
  //   ++count;

  document.getElementById("count").innerText = count;
});
