const express = require("express");
const BooksRouter = express.Router();

BooksRouter.use((req, res, next) => {
  console.log(`Request to ${req.originalUrl}`);
  next();
});

BooksRouter.get("/:bookid", (req, res) => {
  const bookid = req.params.bookid;

  // code to fetch the book details from a database or service
  // fetch book front page, information, etc.
  res.sendFile(__dirname + `/books/${bookid}.html`);
});

BooksRouter.put("/:bookid", (req, res) => {
  const bookid = req.params.bookid;

  // code to update the book details in a database or service
  res.send(`Book with ID ${bookid} updated successfully!`);
});
