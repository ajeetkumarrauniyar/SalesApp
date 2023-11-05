// Importing necessary libraries and modules
const express = require('express');
const authRouter = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

// Defining a POST route for user registration
authRouter.post('/api/user/register', registerUser);

// Defining a POST route for user login
authRouter.post('/api/user/login', loginUser);

// Export the authentication router as "authRouter"
module.exports = authRouter;