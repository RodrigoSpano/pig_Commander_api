const { expenses } = require('../../db');

const updateExpenses = async (req, res) => {
  try {
    const { id } = req.params;
    const { mount, automatized, auto_date } = req.body;

    const existingExpense = await expenses.findByPk(id);
    if (!existingExpense) {
      return res.status(400).json({ error: 'Expense not found' });
    }
    await expenses.update(
      {
        mount,
        automatized,
        auto_date,
      },
      {
        where: { id },
      }
    );
    const updatedExpense = await expenses.findByPk(id);
    return res.status(200).json(updatedExpense);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = updateExpenses;
