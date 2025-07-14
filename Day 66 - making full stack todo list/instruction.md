# 💼 Project Task: **Build a To-Do List Web App using HTML, CSS, JS, Express.js, and MongoDB**

---

### 🎯 Objective:

Create a full-stack **To-Do List** application where users can add, view, update, and delete their tasks. The frontend will interact with a backend API built using Express.js, and all tasks will be stored in a MongoDB database.

---

### 📦 Technologies to Use:

| Layer              | Tech Stack                 |
| ------------------ | -------------------------- |
| Frontend           | HTML, CSS, JavaScript      |
| Backend            | Node.js, Express.js        |
| Database           | MongoDB (Compass or Atlas) |
| Optional Dev Tools | Postman, MongoDB Compass   |

---

### 🛠️ Requirements:

#### ✅ Functional Features:

1. **Add a Task**

   - Each task must contain:

     - `title` (required)
     - `description` (optional)
     - `isCompleted` (boolean, default: `false`)

   - A form should allow users to add new tasks.

2. **View All Tasks**

   - Display a list of all tasks from the database on the frontend.
   - Completed tasks should be visually distinguishable (e.g., strikethrough or different color).

3. **Mark a Task as Complete / Incomplete**

   - Allow users to toggle the `isCompleted` status by clicking a checkbox or a button.

4. **Delete a Task**

   - Add a delete button to remove a task permanently.

---

### 🗂️ API Endpoints to Implement (Backend)

| Method | Endpoint         | Description                         |
| ------ | ---------------- | ----------------------------------- |
| POST   | `/api/tasks`     | Add a new task                      |
| GET    | `/api/tasks`     | Get all tasks                       |
| PUT    | `/api/tasks/:id` | Update a task (complete/incomplete) |
| DELETE | `/api/tasks/:id` | Delete a task                       |

---

### 🧱 Folder Structure (Suggested)

```
todo-app/
├── backend/
│   ├── models/Task.js
│   ├── routes/taskRoutes.js
│   ├── server.js
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
├── .env
├── package.json
```

---

### 📝 Instructions for Students:

1. **Set up the Backend** using Express.js

   - Initialize Node project and install dependencies:

     ```
     npm init -y
     npm install express mongoose cors dotenv
     ```

   - Create a MongoDB model for `Task` using Mongoose.

2. **Connect to MongoDB**

   - Use MongoDB Atlas or Compass.
   - Store your connection string in a `.env` file.

3. **Build API Endpoints**

   - Implement CRUD routes (`POST`, `GET`, `PUT`, `DELETE`) for tasks.
   - Test them using Postman before connecting to frontend.

4. **Build the Frontend**

   - Use HTML/CSS/JavaScript (no frameworks).
   - Use `fetch()` to interact with the API.
   - Show the list of tasks and allow add/update/delete from the UI.

5. **Run the Project**

   - Run backend with: `node server.js`
   - Open `index.html` directly in browser (or use Live Server in VS Code).

---

### 📌 Submission Checklist:

- [ ] Working `index.html` that shows the task list
- [ ] Ability to add, update (toggle), and delete tasks
- [ ] Express.js server that serves API requests
- [ ] MongoDB storing all task data
- [ ] Clean UI (CSS styled)
- [ ] Clear folder structure

---

### 💡 Bonus (Optional)

- Add "Edit" functionality to modify task title or description
- Sort tasks by completed/incomplete
- Display task creation date