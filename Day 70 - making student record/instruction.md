## 🚀 Project: Student Record System with JWT Auth

---

### 🔐 Core Features:

#### 🔑 **Authentication (JWT)**:

* Register new users
* Login with credentials
* Get a JWT token on login
* Protect student record routes (only logged-in users can access)

#### 📚 **Student Management (CRUD)**:

* Add new student with `name`, `roll`, `marks`
* View all students (in a table)
* Sort by marks (high to low)
* Search student by name
* Update and delete student (optional)

---

## 🏗️ Folder Structure (Suggestion)

```
student-records-app/
│
├── backend/
│   ├── models/ (User.js, Student.js)
│   ├── routes/ (auth.js, students.js)
│   ├── middleware/ (authMiddleware.js)
│   └── server.js
│
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   ├── style.css
│   └── script.js
```

---

## 📌 Task Breakdown (with JWT Auth)

---

### 🧩 **Auth System (JWT)**

#### 🔹 Backend Tasks:

1. Setup Express server
2. Connect MongoDB with Mongoose
3. Create `User` model
4. Setup routes:

   * `POST /api/register` → Register new user
   * `POST /api/login` → Authenticate and return JWT
5. Create `authMiddleware.js` to:

   * Verify JWT token
   * Attach `userId` to request if token is valid

---

### 🎓 **Student Record System**

#### 🔹 Backend Tasks:

6. Create `Student` model: `name`, `roll`, `marks`, `userId`
7. Setup routes:

   * `POST /api/students` → Add new student (Protected)
   * `GET /api/students` → Get all students for logged-in user (Protected)
   * `GET /api/students?search=...&sort=...` → Add query for filtering
   * `DELETE /api/students/:id` → Delete student (Protected)
   * `PUT /api/students/:id` → (Optional) Update student

---

### 💻 Frontend Tasks:

8. **Login/Register Pages**

   * Collect user credentials
   * Send requests to backend
   * Store JWT token in `localStorage`

9. **Dashboard Page**

   * Show student form and student list
   * Include:

     * Add student form
     * Sort dropdown (`highest → lowest`, `lowest → highest`)
     * Search box (filter by name)
     * Logout button (clear token)

10. **Script Logic**

* Fetch token from `localStorage` for API requests
* Redirect to login if token is missing
* Display students dynamically from API
* Handle add/delete actions with feedback

---

## 🧪 Bonus Tasks:

* ✅ Client-side form validation
* 🔒 Expire JWT after a time
* 💾 Edit/update student records
* 🚀 Deploy on Render (backend) and Vercel/Netlify (frontend)
