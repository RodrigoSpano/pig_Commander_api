const getExpensesHandler = require('../../handlers/expenses/getExpensesHandler');

const getAllExpenses = async (req, res) => {
  try {
    const { id } = req.user.dataValues;
    const allExepenses = await getExpensesHandler(id);
    res.status(200).json(allExepenses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = getAllExpenses;
