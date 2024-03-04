const express = require('express');
const { getPosts, createPost } = require('../controllers/postController');
const authenticate = require('../middleware/authenticate'); // Custom authentication middleware
const { validatePost, handleValidationErrors } = require('../middleware/validation'); // Import post validation middleware

const router = express.Router();

// GET /posts
router.get('/get', authenticate, getPosts);

// POST /posts (create a new post)
router.post('/add', authenticate, validatePost, handleValidationErrors, createPost);

module.exports = router;
