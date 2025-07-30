//how to make task --> first schema, then model, then add new task

const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  title: { type: String, require: true },
  description: { type: String },
  isCompleted: { type: Boolean, default: false },
});

module.exports = mongoose.model("Task", taskSchema);
