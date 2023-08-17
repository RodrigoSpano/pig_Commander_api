const { user } = require('../../db');

const isBannedMiddleware = async (req, res, next) => {
  const findUser = await user.findOne({ where: { email: req.body.email }, paranoid: false });
  if (findUser && findUser.deletedAt !== null) return res.status(401).json({ message: 'this email account has been banned' });
  return next();
};

module.exports = { isBannedMiddleware };