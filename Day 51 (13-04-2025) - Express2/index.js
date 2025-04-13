//step 1: importing express
const express = require("express");

//step 2: backend application initialization
const app = express();

//routing handling
// "/home" ,  "/about" , "/contact" are the routes

app.get("/home", (req, res) => {
  res.send("<h2>Welcome to the Home Page</h2>");
}); // "/home" route

app.get("/about", (req, res) => {
  res.send("<h2>Welcome to about page</h2>");
}); // "/about" route

app.get("/contact", (req, res) => {
  res.send("<h2>Welcome to the contact page</h2>");
}); // "/contact" route

app.get("/data", (req, res) => {
  res.status(502).json({
    name: "John Doe",
    age: 30,
    city: "New York",
  });
});

app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ]);
});

//middleware function

const myMiddleware = (req, res, next) => {
  console.log("Middleware executed!");
  next(); // Pass control to the next middleware or route handler
};

// Apply Middleware to All Routes
app.use(myMiddleware);

// app.use((req, res) => {
//   res.status(404).send("<h2>This page does not exist</h2>");
// });

const PORT = 5000; //port number

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
