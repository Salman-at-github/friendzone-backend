const User = require('../models/User');

const getUserById = async (userId) => {
  try {
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    console.error('Error in getUserById:', error);
    return null;
  }
};

const createUser = async (userData) => {
  try {
    const newUser = new User(userData);
    await newUser.save();
    return newUser;
  } catch (error) {
    console.error('Error in createUser:', error);
    return null;
  }
};

// Include any additional logic related to user management here

module.exports = { getUserById, createUser };
