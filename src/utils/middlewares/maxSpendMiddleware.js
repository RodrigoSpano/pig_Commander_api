const { maxSpend } = require('../../db');

const postMaxSpendMiddleware = async (req, res, next) => {
  const { mount } = req.body;
  const { id: user_id } = req.user.dataValues;

  if (!mount) return res.status(400).json({ error: 'All fields are required' });
  if (mount < 1) {
    return res.status(400).json({ error: 'mount cannot be less than 1' });
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
  const { id: user_id } = req.user.dataValues;
  const maxSpendsUser = await maxSpend.findOne({
    where: { user_id },
  });
  if (!maxSpendsUser) {
    res.status(404).json({ error: 'Max Spend not found' });
  }
  return next();
};
const deleteMaxSpendMiddleware = async (req, res, next) => {
  const { id } = req.user.dataValues;
  const foundedMaxSpend = await maxSpend.findOne({
    where: { user_id: id },
  });
  if (!foundedMaxSpend)
    return res.status(404).json({ error: 'Max Spend not founded' });
  return next();
};

const updateMaxSpendMiddleware = async (req, res, next) => {
  const { mount } = req.body;
  const { id } = req.user.dataValues;
  if (!mount) return res.status(400).json({ error: 'Mount field is required' });
  if (mount < 1)
    return res.status(400).json({ error: 'mount cannot be less than 1' });

  const existing = await maxSpend.findOne({
    where: { user_id: id },
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