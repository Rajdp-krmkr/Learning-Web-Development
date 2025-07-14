// CRUD operation / REST API
const express = require("express");
const router = express.Router();

const Task = require("../models/task");

//showing all tasks
router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

//saving new task
router.post("/", async (req, res) => {
  const { title, description } = req.body;
  if (!title) {
    return res
      .status(400)
      .json({ message: "Title is not found, please give a title" });
  }

  try {
    const newTask = new Task({ title, description });
    const savedTask = await newTask.save();
    res.status(200).json({ message: "Task added successfully", savedTask });
  } catch (error) {
    console.error("Error in storing data: ", error);
    res
      .status(400)
      .json({ message: "Failed to add task, please try again later" });
  }
});

//on completing task
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  if (!title) {
    return res
      .status(400)
      .json({ message: "Title is not found, please give a title" });
  }

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, description, isCompleted: true },
      { new: true }
    );

    res.status(200).json({ message: "Task updated successfully", updatedTask });
  } catch (error) {
    console.error("Task failed to be updated", error);
    res.status(400).json({ message: "Task failed to be updated" });
  }
});


