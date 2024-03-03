const jwt = require('jsonwebtoken');
const { secret } = require('../config/jwt');

const authenticate = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized - Missing token' });
  }

  try {
    const decoded = jwt.verify(token, secret);
    req.user = { userId: decoded.userId }; // Attach user information to the request object
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized - Invalid token' });
  }
};

module.exports = authenticate;
