# 📝 **Note: Deploying Express.js Server to Render**

* **Create Render Account**:
  Go to [https://render.com](https://render.com) → Sign up via GitHub/GitLab/Email → Authorize repo access.

* **Prepare Your Express Server**:
  Ensure the server listens on `process.env.PORT`:

  ```js
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  ```

  Also ensure `package.json` has:

  ```json
  "scripts": {
    "start": "node index.js"
  }
  ```

* **Push Code to GitHub** (or GitLab/Bitbucket).

* **Deploy on Render**:
  Render Dashboard → **New Web Service** → Connect repo
  Set:

  * **Build Command**: `npm install`
  * **Start Command**: `npm start`

* **Wait for Deploy**:
  Logs will show progress → Live on `https://your-app-name.onrender.com`.

* **Edit Server Settings**:

  * Change env vars in **Environment**
  * Edit commands in **Build & Deploy**
  * Redeploy if needed

* **To Redeploy**:
  Push changes to repo or click **Manual Deploy** in dashboard.

* **Use `.env`** securely via Render’s Environment section.