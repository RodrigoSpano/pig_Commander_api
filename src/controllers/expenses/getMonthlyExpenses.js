const getMonthlyHandler = require('../../handlers/expenses/getMonthlyHandler');

const getMonthlyExpenses = async (req, res) => {
  try {
    const { id } = req.user.dataValues;
    const monthlyExpenses = await getMonthlyHandler(id);
    return res.status(200).json(monthlyExpenses);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getMonthlyExpenses;
