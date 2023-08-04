const { expenses } = require('../../db');

const updateExpenses = async (req, res) => {
  try {
    const { id } = req.params;
    await expenses.updateOne(req.body, {
      where: { id },
    });
    const updatedExpense = await expenses.findByPk(id);
    return res.status(200).json(updatedExpense);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = updateExpenses;
