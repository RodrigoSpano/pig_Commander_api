const { review } = require('../../db');

const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    await review.destroy({
      where: {
        id,
      },
    });
    return res.status(200).json({ deleted: 'Review deleted' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = deleteReview;
