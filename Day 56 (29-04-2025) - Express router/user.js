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

module.exports = router;
