// document.getElementById("box").classList.toggle("hidden");

//handling multiple events
// const is_classname_available = document
//   .getElementById("box")
//   .classList.contains("hidden");
// console.log("Is the class is available? ", is_classname_available);

// const buttons = document.querySelectorAll("button");

// buttons.forEach((button) => {
//   button.addEventListener("click", function () {
//     alert("Button Clicked");
//     console.log("BUtton clicked");
//   });
// });

//event bubbling
const parent = document.getElementById("parent");
const grandParent = document.getElementById("grandParent");
const child = document.getElementById("child");

child.addEventListener("click", (e) => {
  e.stopPropagation();
  alert("Child was clicked");
});

parent.addEventListener("click", (e) => {
  e.stopPropagation();
  alert("Parent was clicked");
});

grandParent.addEventListener("click", () => {
  alert("Grand parent was clicked");
});
