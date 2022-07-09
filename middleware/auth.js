const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    // Verify token legit and get payload
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    // Declare user from payload
    req.user = decoded.user;
    next();
  } catch (err) {
    // Return error if invalid token
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
