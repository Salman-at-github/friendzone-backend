const express = require('express');
const { refreshToken } = require('../controllers/tokenController');

const router = express.Router();

// POST /refresh-token
router.post('/refresh-token', refreshToken);

module.exports = router;
