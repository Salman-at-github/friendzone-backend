const { check, validationResult } = require('express-validator');

const validateSignup = [
  check('name').trim().notEmpty().withMessage('Name is required').isLength({ max: 50 }).withMessage('Name cannot exceed 50 characters'),
  check('email').trim().isEmail().withMessage('Invalid email format').isLength({min:2, max: 100 }).withMessage('Email must be between 2 to 100 characters'),
  check('password').isLength({ min: 6, max: 100 }).withMessage('Password must be between 6 and 20 characters long'),
];

const validateLogin = [
  check('email').trim().isEmail().withMessage('Invalid email format').isLength({ max: 100 }).withMessage('Email cannot exceed 100 characters'),
  check('password').isLength({ max:100 }).withMessage('Incorrect password size'),
];

const validatePost = [
  check('title').trim().notEmpty().withMessage('Title is required').isLength({ max: 255 }).withMessage('Title cannot exceed 255 characters'),
  check('content').trim().notEmpty().withMessage('Content is required'),
  check('user').isMongoId().withMessage('Invalid user ID')
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { validateSignup, validateLogin, validatePost, handleValidationErrors };
