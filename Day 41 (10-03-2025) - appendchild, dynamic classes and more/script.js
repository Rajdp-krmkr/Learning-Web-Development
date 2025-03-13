const new_Element = document.createElement("p");
new_Element.innerText = "This is a paragraph tag";
// document.body.appendChild(new_Element);

const container = document.getElementById("container"); //selecting the container
container.appendChild(new_Element); //appending child into the container

// const box = document.getElementsByClassName("box");
// box[0].remove();
// console.log(box);

const parent = document.getElementById("parent");
const child = document.getElementById("child");
parent.removeChild(child);

const box = document.getElementById("box");
box.classList.add("highlight"); //adding classname
box.classList.remove("highlight");
