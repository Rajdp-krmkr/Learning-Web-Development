A **REST API** (Representational State Transfer Application Programming Interface) is a way for systems to communicate over the internet using standard HTTP methods. Here's a breakdown:

### **Key Principles of REST API:**

1. **Stateless:**  
   Each request from the client to the server must contain all the information the server needs to fulfill that request. The server doesn't store client state between requests.

2. **Client-Server Architecture:**  
   The client and server are independent, allowing them to evolve separately.

3. **Uniform Interface:**  
   Resources (like data) are identified by URLs, and the same standard methods are used for all resources.

4. **HTTP Methods in REST API:**
   - **GET**: Retrieve data (like reading from a database).
   - **POST**: Send data to the server (like adding a new record).
   - **PUT**: Update existing data.
   - **DELETE**: Remove data.

---

### **How a REST API Works (Principle Explanation):**

- A **client (like your browser or Postman)** sends an HTTP request (e.g., a GET request to `https://api.example.com/users`).
- The **server processes the request** and performs the necessary operations (like fetching user data from a database).
- The **server sends back an HTTP response** with the requested data (in JSON format) or an appropriate status code (like 200 OK or 404 Not Found).

---

### **Example of REST API in Express.js:**

```js
app.get("/users", (req, res) => {
  res.json([{ id: 1, name: "Rajdeep" }]);
});
```

- **GET `/users`** returns a list of users in JSON format.
