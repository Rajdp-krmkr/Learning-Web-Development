
## 🧩 Real-Life Problem: **"Create a Job Application Backend API"**

### 🔍 Problem Statement:

You are hired as a backend developer for a startup called **JobNest**, a platform where job seekers can apply to jobs and companies can post job openings. Your task is to build a basic **RESTful API using Express.js** to support this functionality.

---

### 🎯 Requirements:

#### 📁 1. **User Management**

- Users can be of two types: `job_seeker` and `recruiter`.
- Each user should have:

  - `id` (auto-generated)
  - `name`
  - `email`
  - `userType` (`job_seeker` or `recruiter`)
  - `password` (hashed, not plain text)

#### API Endpoints:

- `POST /api/register`: Register a new user
- `POST /api/login`: Login a user and return a token (JWT)

---

#### 📄 2. **Job Posting (Recruiters only)**

- Recruiters can post jobs with:

  - `id` (auto-generated)
  - `title`
  - `companyName`
  - `location`
  - `description`
  - `postedBy` (user ID of recruiter)

#### API Endpoints:

- `POST /api/jobs`: Create a job post (auth required)
- `GET /api/jobs`: Get all job posts
- `GET /api/jobs/:id`: Get job post by ID
- `DELETE /api/jobs/:id`: Delete job post (only by the creator)

---

#### 📥 3. **Job Applications (Job Seekers only)**

- Job seekers can apply to jobs. Application includes:

  - `applicationId` (auto-generated)
  - `jobId`
  - `applicantId`
  - `coverLetter`

#### API Endpoints:

- `POST /api/jobs/:id/apply`: Apply to a job
- `GET /api/users/:id/applications`: View all applications by a user

---

### 🛡️ Authentication & Authorization

- Use **JWT** for authentication.
- Protect routes like job posting and applying using middleware.
- Recruiters can post/delete only their own jobs.
- Job seekers can only view/apply.

---

### 📦 Tech Stack (suggested)

- **Express.js**
- **MongoDB** (or in-memory store if preferred)
- **Mongoose** (if using MongoDB)
- **bcrypt** for password hashing
- **jsonwebtoken** for auth

---

### 📌 Bonus Features (Optional for extra credit)

- Implement pagination in `/api/jobs`
- Add search filters: `?location=...&title=...`
- Send email confirmation on successful application using Nodemailer

---

Let me know if you want the solution skeleton, Postman collection, or a starter project setup.
