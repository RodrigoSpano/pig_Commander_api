const { review } = require('../../db');
const { getTokenPayload } = require('../../utils/helpers/authHelpers');

const deleteReview = async (req, res) => {
  try {
    const { id } = getTokenPayload(req.headers['authorization']);
    await review.destroy({
      where: {
        user_id: id,
      },
    });
    return res.status(200).json(id);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = deleteReview;
