const express = require("express");
const app = express();
const router = require("./user");
const BooksRouter = require("./Books");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/user", router);

app.use("/books", BooksRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
