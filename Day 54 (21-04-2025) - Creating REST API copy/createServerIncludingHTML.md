### 1. **HTML Form (`index.html`)**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Form Example</title>
  </head>
  <body>
    <form action="/submit" method="POST">
      <label>Name: <input type="text" name="name" required /></label><br />
      <label>Email: <input type="email" name="email" required /></label><br />
      <button type="submit">Submit</button>
    </form>
  </body>
</html>
```

---

### 2. **Express Server (`server.js`)**

```javascript
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs"); // optional: for saving to a file

const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML form
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Handle form submission
app.post("/submit", (req, res) => {
  const { name, email } = req.body;

  // Example: save to a simple file or use a database
  const data = `Name: ${name}, Email: ${email}\n`;
  fs.appendFileSync("submissions.txt", data);

  res.send("Form submitted successfully!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

---

### 3. **Install Required Packages**

Make sure to install the necessary packages:

```bash
npm init -y
npm install express body-parser
```

---

### 4. **Run the Server**

```bash
node server.js
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to test the form.

---

Would you like the data to be saved to a database (like MongoDB or MySQL) instead of a file?
