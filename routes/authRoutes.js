const express = require('express');
const { signup, login } = require('../controllers/authController');
const { validateSignup, validateLogin, handleValidationErrors } = require('../config/validation');

const router = express.Router();

// POST /signup
router.post('/signup', validateSignup, handleValidationErrors, signup);

// POST /login
router.post('/login', validateLogin, handleValidationErrors, login);

module.exports = router;
