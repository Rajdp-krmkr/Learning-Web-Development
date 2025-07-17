// get (all task fetch)
// post (add task)
// put (task edit, task completion)
// delete (deleting task )

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

//middleware
app.use(
  cors()
  // {origin: ""}
);
app.use(express.json());

//Mongoose data store
const uri = ""; // change the uri with mongodb uri

//connect mongoose
mongoose
  .connect(uri)
  .then(() => {
    console.log("Mongodb connected");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

//CRUD (create, read, update, delete) operation
const taskRouter = require("./routes/taskRoutes");
app.use("/api/tasks", taskRouter);

//run the server
app.listen(3000, () => {
  console.log("App is running on http://localhost:3000");
});
