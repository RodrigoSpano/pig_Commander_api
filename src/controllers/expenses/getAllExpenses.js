const getExpensesHandler = require('../../handlers/expenses/getExpensesHandler');

const getAllExpenses = async (req, res) => {
  try {
    const { user_id } = req.params;
    const allExepenses = await getExpensesHandler(user_id);
    res.status(200).json(allExepenses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = getAllExpenses;
