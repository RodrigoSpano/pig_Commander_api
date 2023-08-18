const { user, expenses, incomes } = require('../../db');

const getTableUsers = async (req, res) => {
  try {
    const allUsers = await user.findAll({
      attributes: [
        'id',
        'name',
        'lastname',
        'email',
        'image',
        'premium',
        'deletedAt',
      ],
      include: [
        {
          model: expenses,
          attributes: ['amount'],
        },
        {
          model: incomes,
          attributes: ['amount'],
        },
      ],
      paranoid: false,
    });
    const userWithTotals = allUsers.map((User) => {
      const totalExpense = User.expenses.reduce(
        (total, expense) => total + expense.amount,
        0
      );
      const totalIncome = User.incomes.reduce(
        (total, income) => total + income.amount,
        0
      );
      const total = totalIncome - totalExpense;
      return {
        ...User.toJSON(),
        status: User.deletedAt !== null ? 'banned' : 'active',
        balance: `$ ${total}`,
        plan: User.premium ? 'pro' : 'basic',
      };
    });
    return res.status(200).json(userWithTotals);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getTableUsers;