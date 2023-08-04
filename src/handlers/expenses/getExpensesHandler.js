const { expenses } = require('../../db');

const getAllExpensesHandler = async (id) => {
  try {
    const expensesAux = await expenses.findAll({
      where: { user_id: id, automatized: false },
    });
    return expensesAux;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = getAllExpensesHandler;
