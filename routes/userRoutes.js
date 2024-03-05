const express = require('express');
const { getUserById } = require('../controllers/userController');
const authenticate = require('../middleware/authenticate');

const router = express.Router();

// GET /users/:userId
router.get('/get', authenticate,getUserById);

module.exports = router;
