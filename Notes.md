# Project Notes - User Endpoints

## Next Steps

### 1️⃣ Middleware for User Endpoints
Middleware ensures security, validation, and proper request handling. For the `users` routes, we should implement:

#### a) Authentication
- Verify that the user is logged in (JWT or session)
- Attach user info to `req.user` for controllers
- Example: `authenticate` middleware

#### b) Authorization
- Ensure the logged-in user can only update/view their own profile
- Compare `req.user.id` with `req.params.id`
- Example: `authorizeUser` middleware

#### c) Validation
- Validate incoming request body before updating the database
- Check for required fields (`username`, `email`)
- Ensure email format is valid
- Example: `validateUserUpdate` middleware

#### d) Logging (optional)
- Log incoming requests for debugging or analytics
- Example: `logger` middleware

---

### 2️⃣ Controllers and Models
- Controllers should call models to handle DB operations
- Models handle SQL only
- Example functions:
  - `createUser(username, email)`
  - `getUser(user_id)`
  - `updateUser(user_id, username, email)`

---

### 3️⃣ Routes
- Map endpoints to controllers with middleware
- Example routes:
  - `POST /api/users` → createUser
  - `GET /api/users/:id` → getUser
  - `PUT /api/users/:id` → updateUser (with middleware)

---

### 4️⃣ Testing
Plan to test endpoints after middleware and routes are set up:

#### a) Tools
- Use **Thunder client** for manual API testing
- Use **Jest + Supertest** for automated testing

#### b) What to test
- Authentication: ensure endpoints reject unauthenticated requests
- Authorization: users cannot update others’ profiles
- Validation: invalid/missing request body returns 400
- CRUD functionality: create, read, update users
- Edge cases: user not found, duplicate email, etc.

---

### 5️⃣ Best Practices
- Use **parameterized queries** to prevent SQL injection
- Keep **models separate from controllers**
- Middleware order matters:
  1. Authentication
  2. Authorization
  3. Validation
  4. Controller
  5. Error-handling middleware
- Keep `.env` private, but provide `.env.example` for collaborators

---

### 6️⃣ Optional Future Steps
- Add **password hashing** and login endpoint
- Implement **JWT token issuance and refresh**
- Add **pagination** and **filtering** for `getUsers`
- Add **unit tests** for each model and controller function
