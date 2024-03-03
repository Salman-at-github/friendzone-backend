const express = require('express');
const { getUserById } = require('../controllers/userController');

const router = express.Router();

// GET /users/:userId
router.get('/:userId', getUserById);

module.exports = router;
