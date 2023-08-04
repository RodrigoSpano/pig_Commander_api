const { expenses } = require('../../db');

const getAutomatizedIncomes = async (req, res) => {
  try {
    const { id } = req.user.dataValues;

    // * Buscar Expenses si esta automatizado
    const allExpenses = await expenses.findAll({
      where: { user_id: id, automatized: true },
    });

    if (allExpenses.length === 0) throw Error('Expenses not found..');

    return res.status(200).json(allExpenses);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getAutomatizedIncomes;
