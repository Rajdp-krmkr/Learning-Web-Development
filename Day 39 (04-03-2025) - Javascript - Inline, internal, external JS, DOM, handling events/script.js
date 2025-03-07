function func() {
  alert("This is to notifiy that you are out of time");
  console.log("Hello world");
}

let x = document.getElementById("id_Name");
x.addEventListener("dblclick", func);

let y = document.getElementsByClassName("btn");

y[1].addEventListener("click", func);