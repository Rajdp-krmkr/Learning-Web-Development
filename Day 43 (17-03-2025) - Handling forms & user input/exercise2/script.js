/*
    steps:
        1. create a select tag
        2. add value in the options of the select tag
        3. target the select tag
        4. extract the value from the select input
        5. update the paragraphs font using the extracted value
*/

const selectFont = document.getElementById("font");
const paragraph = document.getElementById("paragraph");

selectFont.addEventListener("input", function (event) {
  const font = event.target.value;
  paragraph.style.fontSize = font;
});
