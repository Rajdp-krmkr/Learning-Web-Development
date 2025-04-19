const express = require("express");

const app = express();

//add a middleware to handle json data
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Hello, this is express server</h1>");
});

app.post("/submit", (req, res) => {
  // request : browser --> server
  // response: server ---> browser
  console.log(req.body);
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }
  res.json({ message: "Data received successfully!", data: req.body });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});