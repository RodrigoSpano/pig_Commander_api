/* eslint-disable no-unused-vars */
const { expenses } = require('../../db');

const postExpensesMiddleware = async (req, res, next) => {
  const { category_id, method_id, mount, automatized, auto_date } = req.body;
  if (!category_id || !method_id || !mount) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  if (mount < 1) {
    return res.status(400).json({ error: 'mount cannot be less than 1' });
  }
  return next();
};

const getExpensesMiddleware = async (req, res, next) => {
  const { id: user_id } = req.user.dataValues;
  const allExepenses = await expenses.findAll({
    where: { user_id },
  });
  if (allExepenses.length === 0) {
    res.status(404).json({ error: 'Expenses not found' });
  }
  return next();
};

const deleteExpensesMiddleware = async (req, res, next) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ error: 'Id not recieved' });
  return next();
};

const updateExpensesMiddleware = async (req, res, next) => {
  const { mount, automatized, auto_date } = req.body;
  const { id } = req.params;

  if (!mount || !auto_date || !automatized) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  if (mount < 1) {
    return res.status(400).json({ error: 'mount cannot be less than 1' });
  }
  const existingExpense = await expenses.findByPk(id);
  if (!existingExpense) {
    return res.status(400).json({ error: 'Expense not found' });
  }
  return next();
};

module.exports = {
  postExpensesMiddleware,
  getExpensesMiddleware,
  deleteExpensesMiddleware,
  updateExpensesMiddleware,
};
