// Step 1: Import express
const express = require("express");

// Step 2: Create an express app instance
const app = express();

//step 3: define a port
const PORT = 3000;

app.get("/", (request, response) => {
  response.send("Hello there, this is an express server");
});

app.get("/about", (request, response) => {
  response.send("This is about page, this express server used to run backend");
});

app.listen(PORT, () => {
  console.log("server is running at Port: 3000");
});
