const { expenses } = require('../../db');

const deleteExpenses = async (req, res) => {
  try {
    const { id } = req.params;
    await expenses.destroy({
      where: {
        id,
      },
    });
    return res.status(200).json({ deleted: 'Expense deleted' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = deleteExpenses;
