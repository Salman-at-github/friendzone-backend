const express = require('express');
const { signup, login } = require('../controllers/authController');
const { validateSignup, validateLogin, handleValidationErrors } = require('../middleware/validation');

const router = express.Router();

// POST /signup
router.post('/signup', validateSignup, handleValidationErrors, signup);

// POST /login
router.post('/login', validateLogin, handleValidationErrors, login);

module.exports = router;
