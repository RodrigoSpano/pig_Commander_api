const getMonthlyHandler = require('../../handlers/incomes/getMonthlyHandler');

const getMonthlyIncomes = async (req, res) => {
  try {
    const { id } = req.user.dataValues;
    const monthlyIncomes = await getMonthlyHandler(id);

    return res.status(200).json(monthlyIncomes);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getMonthlyIncomes;
