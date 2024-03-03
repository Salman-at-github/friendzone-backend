const bcrypt = require('bcryptjs');
const User = require('../models/User');
const authService = require('../services/authService');
const { handleValidationErrors } = require('../config/validation');

const signup = async (req, res) => {
  try {
    handleValidationErrors(req, res);

    const { name, email, password } = req.body;

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already registered' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    // Generate JWT tokens
    const { accessToken, refreshToken } = authService.generateTokens(newUser._id);

    // Respond with success and tokens
    res.json({ message: 'Signup successful', accessToken, refreshToken });
  } catch (error) {
    console.error('Error in signup:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const login = async (req, res) => {
  try {
    handleValidationErrors(req, res);

    const { email, password, googleId, googleName, googleEmail } = req.body;

    // If Google ID is present, handle Google login
    if (googleId) {
      // Check if the user exists with the provided Google ID
      let user = await User.findOne({ googleId });

      // If not, create a new user with Google information
      if (!user) {
        user = new User({ name: googleName, email: googleEmail, googleId });
        await user.save();
      }

      // Generate JWT tokens
      const { accessToken, refreshToken } = authService.generateTokens(user._id);

      // Respond with success and tokens
      return res.json({ message: 'Login successful', accessToken, refreshToken });
    }

    // For email/password login
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT tokens for email/password login
    const { accessToken, refreshToken } = authService.generateTokens(user._id);

    // Respond with success and tokens
    res.json({ message: 'Login successful', accessToken, refreshToken });
  } catch (error) {
    console.error('Error in login:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { signup, login };
