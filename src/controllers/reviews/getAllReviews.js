const { review, user } = require('../../db');

const getAllReviews = async (req, res) => {
  try {
    const allReviews = await review.findAll({
      include: [
        {
          model: user,
          attributes: ['image', 'name', 'lastname'],
        },
      ],
      paranoid: false,
    });
    if (allReviews.length === 0) {
      return res.status(404).json({ error: 'Reviews not found' });
    }
    return res.status(200).json(allReviews);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = getAllReviews;
