const { maxSpend } = require('../../db');
const { getTokenPayload } = require('../helpers/authHelpers');

const postMaxSpendMiddleware = async (req, res, next) => {
  const { amount } = req.body;
  const { id: user_id } = getTokenPayload(req.headers['authorization']);

  if (!amount) return res.status(400).json({ error: 'All fields are required' });
  if (amount < 1) {
    return res.status(400).json({ error: 'amount cannot be less than 1' });
  }
  const existingMaxSpend = await maxSpend.findOne({
    where: { user_id },
  });
  if (existingMaxSpend) {
    return res.status(400).json({ error: 'User already has a max Spend' });
  }
  return next();
};

const getMaxSpendMiddleware = async (req, res, next) => {
  const { id: user_id } = getTokenPayload(req.headers['authorization']);
  const maxSpendsUser = await maxSpend.findOne({
    where: { user_id },
  });
  if (!maxSpendsUser) {
    return res.status(202).json({ maxSpend: maxSpendsUser });
  }
  return next();
};
const deleteMaxSpendMiddleware = async (req, res, next) => {
  const { id: user_id } = getTokenPayload(req.headers['authorization']);
  const foundedMaxSpend = await maxSpend.findOne({
    where: { user_id },
  });
  if (!foundedMaxSpend)
    return res.status(404).json({ error: 'Max Spend not founded' });
  return next();
};

const updateMaxSpendMiddleware = async (req, res, next) => {
  const { amount } = req.body;
  const { id: user_id } = getTokenPayload(req.headers['authorization']);
  if (!amount) return res.status(400).json({ error: 'amount field is required' });
  if (amount < 1)
    return res.status(400).json({ error: 'amount cannot be less than 1' });

  const existing = await maxSpend.findOne({
    where: { user_id },
  });
  if (!existing) return res.status(400).json({ error: 'Max Spend not found' });
  return next();
};

module.exports = {
  postMaxSpendMiddleware,
  getMaxSpendMiddleware,
  deleteMaxSpendMiddleware,
  updateMaxSpendMiddleware,
};
