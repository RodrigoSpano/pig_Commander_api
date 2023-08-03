const { expenses } = require('../../db');

const deleteExpenses = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedExpense = await expenses.destroy({
      where: {
        id,
      },
    });
    if (deletedExpense > 0) {
      return res.status(200).json({ deleted: 'Expense deleted' });
    }
    return res.status(404).json({ deleted: 'Expense not found' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = deleteExpenses;
