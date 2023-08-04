const { maxSpend } = require('../../db');

const postMaxSpendMiddleware = async (req, res, next) => {
  const { mount } = req.body;
  if (mount) return res.status(400).json({ error: 'All fields are required' });
  if (mount < 1)
    return res.status(400).json({ error: 'mount cannot be less than 1' });
  return next();
};

const getMaxSpendMiddleware = async (req, res, next) => {
  const { id: user_id } = req.user.dataValues;
  const allExepenses = await maxSpend.findAll({
    where: { user_id },
  });
  if (allExepenses.length === 0) {
    res.status(404).json({ error: 'Expenses not found' });
  }
  return next();
};
const deleteMaxSpendMiddleware = async (req, res, next) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ error: 'Id not recieved' });
  return next();
};

const updateMaxSpendMiddleware = async (req, res, next) => {
  const { mount } = req.body;
  const { id } = req.params;
  if (!mount) return res.status(400).json({ error: 'Mount field is required' });
  if (mount < 1)
    return res.status(400).json({ error: 'mount cannot be less than 1' });
  const existing = await maxSpend.findByPk(id);
  if (!existing) return res.status(400).json({ error: 'Expense not found' });
  return next();
};

module.exports = {
  postMaxSpendMiddleware,
  getMaxSpendMiddleware,
  deleteMaxSpendMiddleware,
  updateMaxSpendMiddleware,
};
