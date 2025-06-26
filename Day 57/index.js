// initialize express
// middleware
// get post put delete
// app.listen , start the server

// Create new tasks.
// Read all tasks or a single task. (both single task and all task)
// Update existing tasks.
// Delete tasks.

const express = require("express");
const app = express();

//to store the tasks
let taskArray = [];

//to handle the json data in future
app.use(express.json());

//adding a task
app.post("/task/add", (req, res) => {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({ message: "task title not found" });
  }

  let newTask = {
    id: taskArray.length + 1,
    title: title,
    description: description || "",
  };

  taskArray.push(newTask);
  res.status(200).json({ message: "Task added successfully" });
});

//showing all tasks
app.get("/tasks/show", (req, res) => {
  res.json({ data: taskArray, message: "Task showing successfully" });
});

app.get("/tasks/show/:taskid", (req, res) => {
  const taskid = req.params.taskid;
  const searchedTask = taskArray.find((task) => task.id == taskid);

  if (!searchedTask) {
    console.log("Searched task: ", searchedTask);
    return res.status(404).json({ message: "Task not found" });
  }
  res
    .status(200)
    .json({ data: searchedTask, message: "Task found successfully" });
});

app.listen(3000, () => {
  console.log("Server is running on port:3000");
});