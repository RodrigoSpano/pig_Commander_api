const { expenses } = require('../../db');

const getAllExpensesHandler = async (user_id) => {
  try {
    const expensesAux = await expenses.findAll({
      where: { user_id },
    });
    return expensesAux;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = getAllExpensesHandler;
