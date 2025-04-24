const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();

//middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/submit", (req, res) => {
  const { name, email } = req.body;

  const userid = Math.floor(Math.random() * 10000000);

  const data = `"${userid}": {
    "${name}": "${email}"
  }, `;

  fs.appendFileSync("userdata.json", data);

  res.sendFile(__dirname + "/reponse.html");
});

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
