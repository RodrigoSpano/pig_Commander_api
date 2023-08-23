const { getTokenPayload, comparePassword } = require('../helpers/authHelpers');
const { user } = require('../../db');

const oldPasswordMiddleware = async (req, res, next) => {
  const { id } = getTokenPayload(req.headers['authorization']);
  const { oldPassword, newPassword } = req.body;
  const currentUser = await user.findOne({ where: { id } });
  const isOldPasswordCorrect = comparePassword(
    currentUser.password,
    oldPassword
  );
  if (isOldPasswordCorrect === false) {
    return res.status(401).json({ error: 'Incorrect old password' });
  }
  const equalPasswords = comparePassword(currentUser.password, newPassword);
  if (equalPasswords) {
    return res
      .status(401)
      .json({ error: 'New password cannot be equal to the old one' });
  }
  return next();
};

module.exports = oldPasswordMiddleware;
