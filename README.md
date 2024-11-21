# Node.js MySQL CRUD API with Authentication

This project is a RESTful API built using Node.js, MySQL, and Express. It includes CRUD operations for employee data, authentication with JWT, and middleware for protected routes.

---

## Features

- employee registration and login
- Authentication using JSON Web Tokens (JWT)
- Middleware for protected routes
- CRUD operations for employee data
- MySQL database integration

---

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)
- A code editor like [VS Code](https://code.visualstudio.com/)

---

## Setup Instructions

1. **Clone the Repository**  
   Clone this repository to your local machine:
   git clone https://github.com/MohammedZaid2803/employee_management.git
   cd employee_management

2. **Install Dependencies**
   npm install

3. **Create a .env file in the project root and configure the following variables**
   PORT=5000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=employer_management
   JWT_SECRET=your_jwt_secret

4. **Create a database in MySQL:**

   CREATE DATABASE employer_management;
   USE employer_management;

5. **Create a employer table**

   CREATE TABLE employers (
   id INT AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(255) NOT NULL,
   email VARCHAR(255) NOT NULL UNIQUE,
   password VARCHAR(255) NOT NULL,
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );

6. **Run the Application**
   npm start

## API Endpoints

Authentication
POST /api/register
Registers a new user.
Request body:

  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }

POST /api/login
Logs in an existing user and returns a JWT.
Request body:

   {
     "email": "john@example.com",
     "password": "password123"
   }

Protected Routes (require JWT)

GET /api/employers   
Retrieves all employees


PUT /api/employer/:id
req.params : 1

req.body :

   {
     "name": "Updated Name",
     "email": "updatedemail@example.com"
   }


DELETE /api/employer/:id
req.params : 1

Delete Employees by id

**Use Postman or any API testing tool to interact with the endpoints. Include the JWT in the Authorization header for protected routes**

    Authorization: Bearer <your_jwt_token>


