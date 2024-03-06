const User = require('../models/User');

const getUserById = async (req, res) => {
  try {
    const { userId } = req.user;

    // Fetch user by ID, excluding the password and _id fields
    const user = await User.findById(userId).select('-password');

    // Respond with the user data
    res.json(user);
  } catch (error) {
    console.error('Error in fetching user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { getUserById };
