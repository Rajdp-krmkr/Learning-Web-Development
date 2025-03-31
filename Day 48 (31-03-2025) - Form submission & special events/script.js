// const form = document.querySelector("#myForm");

// form.addEventListener("submit", (event) => {
//   // Prevent the default form submission behavior
//   event.preventDefault();
//   console.log("Form submitted!");
//   // server code to handle the form submission
//   window.location.reload();
// });

const button = document.querySelector("#btn");
const email = document.querySelector("#Email2");
button.addEventListener("click", () => {
  if (email.value === "") {
    alert("Please enter your email address.");
  } else {
    const emailValue = email.value;
    // server codes
    console.log(emailValue);
    email.value = ""; // Clear the input field after submission
  }
});

document.addEventListener("keydown", function (event) {
  console.log("Key down: ", event.key);
});
document.addEventListener("keyup", function (event) {
  console.log("Key released: ", event.key);
});
// document.addEventListener("keypress", function (event) {
//   console.log("Key pressed: ", event.key);
// });