const express = require("express");
const router = express.Router();

// Middleware to log request details
router.use((req, res, next) => {
  console.log(`Request to ${req.originalUrl}`);
  next();
});

// main route = "/user/"
router.get("/", (req, res) => {
  res.send("Hello user!");
  // res.sendFile(__dirname + "/index.html");
});

// main route = "/user/profile"
router.get("/profile", (req, res) => {
  res.send("User profile data received!");
});

router.post("/profile", (req, res) => {
  const { email, name } = req.body;
  res.send(`User profile data posted! ${email} & ${name}`);
});

module.exports = router;
