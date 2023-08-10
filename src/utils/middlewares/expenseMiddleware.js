/* eslint-disable no-unused-vars */
const { expenses } = require('../../db');

const postExpensesMiddleware = async (req, res, next) => {
  const { category_id, method_id, amount, name } = req.body;
  if (!category_id || !method_id || !amount || !name) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  if (amount < 1) {
    return res.status(400).json({ error: 'amount cannot be less than 1' });
  }
  return next();
};


const deleteExpensesMiddleware = async (req, res, next) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ error: 'Id not recieved' });
  return next();
};

const updateExpensesMiddleware = async (req, res, next) => {
  const { amount } = req.body;
  const { id } = req.params;

  if (amount <= 1) {
    return res.status(400).json({ error: 'amount cannot be less than 1' });
  }
  const existingExpense = await expenses.findByPk(id);
  if (!existingExpense) {
    return res.status(400).json({ error: 'Expense not found' });
  }
  return next();
};

module.exports = {
  postExpensesMiddleware,
  deleteExpensesMiddleware,
  updateExpensesMiddleware,
};
