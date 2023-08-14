const { review } = require('../../db');
const { getTokenPayload } = require('../../utils/helpers/authHelpers');

const getAllReviews = async (req, res) => {
  try {
    const { id: user_id } = getTokenPayload(req.headers['authorization']);
    const allReviews = await review.findAll({
      where: {
        user_id,
      },
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
