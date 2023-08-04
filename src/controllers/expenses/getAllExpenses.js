const { expenses } = require('../../db');

const getAllExpenses = async (req, res) => {
  try {
    const { id: user_id } = req.user.dataValues;
    const allExepenses = await expenses.findAll({ where: { user_id, automatized: false } });
    if (!allExepenses.length) return res.status(404).json({ message: 'expenses is empty' });
    return res.status(200).json(allExepenses);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = getAllExpenses;
