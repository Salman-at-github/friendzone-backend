const authService = require('../services/authService');

const refreshToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;

    // Validate the refresh token
    const userId = authService.verifyRefreshToken(refreshToken);
    if (!userId) {
      return res.status(401).json({ message: 'Invalid refresh token' });
    }

    // Generate a new access token
    const accessToken = authService.generateAccessToken(userId);

    // Respond with the new access token
    res.json({ accessToken });
  } catch (error) {
    console.error('Error in refreshing token:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { refreshToken };
