const { Op } = require('sequelize');
const { expenses } = require('../../db');

const getMonthlyHandler = async (id) => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // +1 porque los meses son en base 0
  const currentYear = currentDate.getFullYear();
  const firstDayOfMonth = new Date(currentYear, currentMonth - 1, 1);
  const lastDayOfMonth = new Date(currentYear, currentMonth, 0);

  const monthlyExpenses = await expenses.findAll({
    where: {
      createdAt: {
        [Op.between]: [firstDayOfMonth, lastDayOfMonth],
      },
      user_id: id,
    },
  });
  return monthlyExpenses;
};

module.exports = getMonthlyHandler;
