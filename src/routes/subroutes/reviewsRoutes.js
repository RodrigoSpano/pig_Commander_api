const { Router } = require('express');
const deleteReview = require('../../controllers/reviews/deleteReview');
const postReview = require('../../controllers/reviews/postReview');
const isAdmin = require('../../utils/middlewares/adminMiddleware');

const router = Router();

router.delete('/:id', isAdmin, deleteReview);

router.post('/', postReview);

module.exports = router;
