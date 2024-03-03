# FriendZone Backend

FriendZone Backend is the server-side component of the FriendZone application, providing a robust and secure API for user authentication, post management, and user-related operations.

## Table of Contents
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Features](#features)
- [Security](#security)
- [Dependencies](#dependencies)
- [License](#license)

## Project Structure
The project follows a modular structure to organize code into different directories based on functionality. Here is a brief overview:

- **config**: Configuration files for the database, JWT, mailer, express middleware, and validation.
- **controllers**: Contains controllers for different entities (auth, token, post, user).
- **middleware**: Custom middleware functions, including authentication and error handling.
- **models**: Mongoose models for Post and User entities.
- **routes**: Express routes for different entities (auth, token, post, user).
- **services**: Business logic services (auth, token, user) interacting with the database.
- **utils**: Utility functions, including a paginator for paginated fetching.
- **app.js**: Express application setup.
- **server.js**: Entry point to start the server.
- **package.json**: Project configuration and dependencies.

## Installation
1. Clone the repository: `git clone https://github.com/Salman-at-github/friendzone-backend`
2. Navigate to the project directory: `cd friendzone-backend`
3. Install dependencies: `npm install`

## Usage
1. Set up your database by configuring the `config/db.js` file, and the .env file
2. Configure other settings in the `config` directory if needed.
3. Start the server: `npm start` or `node server.js`

## API Endpoints
- **Authentication**
  - `POST /auth/signup`: User registration
  - `POST /auth/login`: User login

- **Posts**
  - `GET /posts`: Fetch paginated posts
  - `POST /posts`: Create a new post

- **User**
  - User logic

- **Tokens**
  - Token logic

For detailed API documentation, refer to individual route/controller files.

## Features
- **User Authentication**: Secure user registration and login using encrypted passwords.
- **Post Management**: Create and retrieve posts with pagination for efficient data handling.
- **Google Authentication**: Optionally, users can log in using their Google accounts.
- **JWT Tokens**: Generation and validation of JSON Web Tokens for secure authentication.
- **Email Notifications**: Welcome emails for successful user registration.

## Security
- **Password Hashing**: User passwords are securely hashed using bcrypt for enhanced security.
- **JWT Tokens**: JSON Web Tokens are used for authentication, providing a stateless and secure way to authorize requests.
- **Input Validation**: Utilizes express-validator for thorough validation of user inputs, preventing common security issues like injection attacks.
- **CORS Protection**: CORS middleware is employed to control cross-origin resource sharing, enhancing the security of your API.

## Dependencies
- Express: Web framework for Node.js
- Mongoose: MongoDB object modeling tool
- Bcrypt.js: Library for hashing passwords
- JSONWebToken: Authentication library for token generation and validation
- Nodemailer: Library for sending emails
- Express-validator: Middleware for input validation
- CORS: Middleware for handling Cross-Origin Resource Sharing
- Dotenv: Module for loading environment variables

## License
This project is licensed under the [MIT License](LICENSE). Nah just kidding. It's free.
