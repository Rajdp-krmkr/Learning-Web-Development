// const paragraph = document.getElementsByTagName("p");
// console.log(paragraph);

//query selector using tagname
const heading = document.querySelector("h1");
const paragraph = document.querySelector("p");

console.log("This is heading: ", heading);
console.log("This is paragraph: ", paragraph);

const headingAll = document.querySelectorAll("h1");
const paragraphAll = document.querySelectorAll("p");

console.log("These are the headings: ", headingAll);
console.log("These are the paragraphs: ", paragraphAll);

//query selector using classname
const button = document.querySelector(".btn");
const buttonAll = document.querySelectorAll(".btn");

console.log("This is the first button: ", button);
console.log("These are the buttons: ", buttonAll);

//query selector using ID name
const title = document.querySelector("#title");
title.innerText = "Updated title";

const buttonInsideDiv = document.querySelector("div .btn"); // Selects a button inside a div
buttonInsideDiv.style.backgroundColor = "green";

document.getElementById("content").innerHTML = "<strong>New Content</strong>";
// document.getElementById("content").innerText = "<strong>New Content</strong>";

document.getElementById("box").style.backgroundColor = "blue";

document.getElementById("image").src =
  "https://images.unsplash.com/photo-1740231614830-30ce7f2e8dbb?q=80&w=2018&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

document.getElementById("inputBox").placeholder = "this is updated";

document.getElementById("inputBox").addEventListener("change", function () {
  console.log("Input changed to: " + this.value);
});
