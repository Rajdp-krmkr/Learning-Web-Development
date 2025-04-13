const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  res.send("<h2>Welcome to the Home Page</h2>");
}); // "/home" route

app.get("/about", (req, res) => {
  res.send("<h2>Welcome to about page</h2>");
}); // "/about" route

app.get("/contact", (req, res) => {
  res.send("<h2>Welcome to the contact page</h2>");
}); // "/contact" route


app.get("/", (req, res) => {
//   console.log(__dirname + "/home.html");
  res.sendFile(__dirname + "/home.html");
});


app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
// const express = require("express");
