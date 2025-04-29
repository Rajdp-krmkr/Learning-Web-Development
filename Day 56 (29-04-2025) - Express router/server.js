const express = require("express");
const app = express();
const router = require("./user");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/user", router);

app.use("/other", router);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
