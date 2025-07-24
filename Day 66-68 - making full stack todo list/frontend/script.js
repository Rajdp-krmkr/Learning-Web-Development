const form = document.getElementById("task-form");
const API = "http://localhost:3000/api/tasks";

const list = document.getElementById("task-list");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;

  const response = await fetch(API, {
    method: "POST", // which request we are performing
    headers: { "content-Type": "application/json" },
    body: JSON.stringify({ title, description }),
  });

  if (response.status == 200) {
    alert(`Your task '${title}' added successfully`);
  }
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";

  // fetch a request to get the tasks and show them in the frontend
  const result = await fetch(API);
  const tasks = await result.json();

  list.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");

    if (task.isCompleted) {
      li.className = "completed";
    } else {
      li.className = "";
    }
    li.innerHTML =
      '<div><input type="checkbox" name="" id="" class="checkbox" /><span>Title</span></div><button class="delete_btn">Delete</button>';
  });

  // list --> empty
});

// remaining Get and Put and delete request

// when at the first time on the webpage at "/", fetch a GET request to get the tasks and print them in the console (or you can show them in the frontend)

//getting tasks

function loadTask() {
  // code to fetch tasks via GET request
  // search how to fetch a get request in google
}
