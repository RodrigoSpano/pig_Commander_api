/* eslint-disable no-console */
const jwt = require('jsonwebtoken');
const { user } = require('../../db');

const isAuth = (req, res, next) => {
  const token = req.headers['authorization'];
  const replacedToken = token.replace('token=', '');
  jwt.verify(replacedToken, `${process.env.JWT_SECRET}`, async (err, userData) => {
    if (err) {
      return res.status(401).json({ error: 'invalid token' });
    }
    const findUser = await user.findByPk(userData.id);
    if (!findUser) {
      return res.status(401).json({ error: 'invalid token' });
    }
    return next();
  });
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