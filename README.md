Express API with Postman
A simple Node.js + Express REST API tested with Postman.
This project demonstrates setting up routes, handling requests/responses, and integrating with a database.

🚀 Features
Express server setup

Environment variables using dotenv

API endpoints for CRUD operations

PostgreSQL / Sequelize integration

Tested with Postman

Project Structure
├── config/          # Database configuration  
├── models/          # Sequelize models  
├── routes/          # API routes  
├── .env             # Environment variables  
├── server.js        # Entry point  
└── package.json     # Dependencies & scripts  

 Installation
Clone the repository\
git clone https://github.com/ayeshhatahir796/express_api_with_postman.git
cd express_api_with_postman

Install dependencies
npm install

Create a .env file and configure:
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=your_db_name
PORT=5000

Start the server
npm start

📬 API Testing
Use Postman to test the following endpoints:

GET /users – Fetch all users

POST /users – Create a new user

PUT /users/:id – Update a user

DELETE /users/:id – Delete a user
