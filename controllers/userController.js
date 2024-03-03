const User = require('../models/User');

const getUserById = async (req, res) => {
  try {
    const { userId } = req.params;

    // Fetch user by ID
    const user = await User.findById(userId);

    // Respond with the user data
    res.json(user);
  } catch (error) {
    console.error('Error in fetching user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { getUserById };
