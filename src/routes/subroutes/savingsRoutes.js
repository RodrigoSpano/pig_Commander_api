const { Router } = require('express');
const getAllSavings = require('../../controllers/savings/getAllSavings');
const postSaving = require('../../controllers/savings/postSaving');

const router = Router();

router.post('/', postSaving);
router.get('/', getAllSavings);

module.exports = router;
