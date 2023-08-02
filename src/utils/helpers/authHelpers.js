const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

function hashPassword(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

function comparePassword(OriginPassword, entryPassword) {
  return bcrypt.compareSync(entryPassword, OriginPassword);
}

function createJwtToken(id, email) {
  return jwt.sign({ email, id }, `${process.env.JWT_SECRET}`);
}

module.exports = { hashPassword, comparePassword, createJwtToken };