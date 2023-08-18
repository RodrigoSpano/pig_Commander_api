const { user, expenses, incomes } = require('../../db');

const getUserDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const allReviews = await user.findOne({
      where: {
        id,
      },
      include: [
        {
          model: expenses,
          attributes: ['name', 'amount', 'category_id', 'method_id'],
        },
        {
          model: incomes,
          attributes: ['name', 'amount', 'category_id', 'method_id'],
        },
      ],
      paranoid: false,
    });
    return res.status(200).json(allReviews);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = getUserDetail;
