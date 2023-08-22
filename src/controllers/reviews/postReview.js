const { review } = require('../../db');
const { getTokenPayload } = require('../../utils/helpers/authHelpers');
const { sendReviewNotification } = require('../../utils/helpers/sendMailHelper');

const postReview = async (req, res) => {
  try {
    const { content, rating } = req.body;

    const { id: user_id } = getTokenPayload(req.headers['authorization']);

    const searchedReview = await review.findOne({
      where: {
        user_id,
      },
    });
    if (searchedReview)
      return res.status(400).json({ Error: 'User already has a review' });

    const newReview = await review.create({
      content,
      rating,
      user_id,
    });
    sendReviewNotification(user_id, content);
    return res.status(201).json(newReview);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postReview;
