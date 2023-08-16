const { Op } = require('sequelize');
const { incomes, expenses } = require('../../db');

async function combinedFilters(req, res) {
  try {
    const { method, category, transaction } = req.query;

    const expensesFiltered = await expenses.findAll({
      where: {
        method_id: method ? { [Op.eq]: method } : { [Op.ne]: null },
        category_id: category ? { [Op.eq]: category } : { [Op.ne]: null },
      },
    });

    const incomesFiltered = await incomes.findAll({
      where: {
        method_id: method ? { [Op.eq]: method } : { [Op.ne]: null },
        category_id: category ? { [Op.eq]: category } : { [Op.ne]: null },
      },
    });

    if (transaction === 'all') {
      return res.status(200).json([...expensesFiltered, ...incomesFiltered]);
    }

    if (transaction === 'expenses') {
      return res.status(200).json(expensesFiltered);
    }

    if (transaction === 'incomes') {
      return res.status(200).json(incomesFiltered);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = combinedFilters;
