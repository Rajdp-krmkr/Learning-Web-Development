const express = require("express");
const app = express();

const users = [
  {
    id: 1,
    name: "Rajdeep Karmakar",
    email: "Rajdeep@gmail.com",
  },
];

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hi this is Subhadip Samanta.");
});

// get all users
app.get("/users", (req, res) => {
  res.json(users);
});

//post a new user
app.post("/users", (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required" });
  }
  const newUser = { id: users.length + 1, name: name, email: email };
  users.push(newUser);

  res.status(201).json({ message: "User added succesfully" });
});

//update user
app.put("/users", (req, res) => {
  const { id, name, email } = req.body;
  console.log(req.body);
  let user = users.find((u) => u.id == id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  if (!name || !email) {
    return res.status(400).json({ message: "Please provide email and name" });
  }
  user.name = name;
  user.email = email;
  res.status(200).json({ message: "user updated successfully" });
});

app.delete("/users", (req, res) => {
  //   [0, 1, 2, 3, 4, 5, 6];
  const { id } = req.body;
  const userIndex = users.findIndex((u) => u.id == id);

  if (userIndex === -1) {
    return res.status(404).json({ message: `user not found with id: ${id}` });
  }

  users.splice(userIndex, 1);
  res.status(200).json({ message: "user deleted successfully" });
});

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
