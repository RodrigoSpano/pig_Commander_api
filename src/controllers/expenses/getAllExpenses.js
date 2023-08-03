const getExpensesHandler = require('../../handlers/expenses/getExpensesHandler');

const getAllExpenses = async (req, res) => {
  try {
    const { user_id } = req.params;
    const allExepenses = await getExpensesHandler(user_id);
    if (allExepenses.length === 0) {
      res.status(404).json({ error: 'Expenses not found' });
    } else {
      res.status(200).json(allExepenses);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = getAllExpenses;
