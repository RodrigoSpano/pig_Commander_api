const { user } = require('../../db');

const isAuth = (req, res, next) => {
  if (!req.isAuthenticated()) return res.redirect('/api/auth/login');
  return next();
};

const userExistsDeleteMiddleware = async (req, res, next) => {
  const findUser = await user.findByPk(req.params.id);
  if (!findUser) return res.status(404).json({ error: 'user not found' });
  return next();
};

const userAlreadyExistsMiddleware = async (req, res, next) => {
  const findUser = await user.findOne({ where: { email: req.body.email } });
  if (findUser) return res.status(400).json({ error: 'user already exists' });
  return next();
};

module.exports = { isAuth, userExistsDeleteMiddleware, userAlreadyExistsMiddleware };