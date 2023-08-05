const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

function hashPassword(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

function comparePassword(OriginPassword, entryPassword) {
  return bcrypt.compareSync(entryPassword, OriginPassword);
}

function createJwtToken(id, email) {
  return jwt.sign({ email, id }, `${process.env.JWT_SECRET}`, { expiresIn: '1d' });
}

function getTokenPayload(token) {
  const replacedToken = token.replace('token=', '');
  let payload;
  jwt.verify(replacedToken, `${process.env.JWT_SECRET}`, async (err, user) => {
    if (err) {
      throw new Error('invalid token');
    } else {
      payload = user.id;
    }
  });
  return payload;
}

module.exports = { hashPassword, comparePassword, createJwtToken, getTokenPayload };