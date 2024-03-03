const jwt = require('jsonwebtoken');
const { secret, accessTokenExpiresIn, refreshTokenExpiresIn } = require('../config/jwt');

const generateTokens = (userId) => {
  const accessToken = jwt.sign({ userId }, secret, { expiresIn: accessTokenExpiresIn });
  const refreshToken = jwt.sign({ userId }, secret, { expiresIn: refreshTokenExpiresIn });
  return { accessToken, refreshToken };
};

const verifyRefreshToken = (refreshToken) => {
  try {
    const decoded = jwt.verify(refreshToken, secret);
    return decoded.userId;
  } catch (error) {
    return null;
  }
};

const generateAccessToken = (userId) => {
  return jwt.sign({ userId }, secret, { expiresIn: accessTokenExpiresIn });
};

module.exports = { generateTokens, verifyRefreshToken, generateAccessToken };
