const { Router } = require('express');
const getAllReviews = require('../../controllers/reviews/getAllReviews');
const deleteReview = require('../../controllers/reviews/deleteReview');
const postReview = require('../../controllers/reviews/postReview');

const router = Router();

router.get('/', getAllReviews);

router.delete('/:id', deleteReview);

router.post('/', postReview);

module.exports = router;
