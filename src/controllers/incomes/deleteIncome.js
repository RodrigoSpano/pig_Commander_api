const { incomes } = require('../../db');

const deleteIncome = async (req, res) => {
  try {
    const { idIncome } = req.params;
    const incomeToDelete = await incomes.destroy({
      where: {
        idIncome,
      },
    });
    if (incomeToDelete > 0) {
      return res.status(200).json({ deleted: 'Income deleted' });
    }
    return res.status(404).json({ deleted: 'Income not found' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = deleteIncome

