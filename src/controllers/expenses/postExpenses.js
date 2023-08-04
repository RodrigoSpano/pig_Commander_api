const { expenses } = require('../../db');

const postExpenses = async (req, res) => {
  try {
    const { id: user_id } = req.user.dataValues;
    const { category_id, method_id, mount, automatized, auto_date } = req.body;
    const newExpense = await expenses.create({
      mount,
      automatized,
      auto_date: automatized && auto_date,
      method_id,
      category_id,
      user_id,
    });
    return res.status(201).json(newExpense);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = postExpenses;
