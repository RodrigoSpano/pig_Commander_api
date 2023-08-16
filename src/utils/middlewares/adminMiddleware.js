const { getTokenPayload } = require('../helpers/authHelpers');

const isAdmin = (req, res, next) => {
  const { email } = getTokenPayload(req.headers['authorization']);
  if (email !== 'pigcommandersp@gmail.com') {
    return res.status(403).json({ error: 'Access denied' });
  }
  return next();
};

module.exports = isAdmin;
