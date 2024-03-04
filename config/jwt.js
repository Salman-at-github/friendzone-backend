module.exports = {
    secret: process.env.JWT_SECRET,
    accessTokenExpiresIn: '1h', // Token expiration time for access token
    refreshTokenExpiresIn: '7d', // Token expiration time for refresh token
  };
  