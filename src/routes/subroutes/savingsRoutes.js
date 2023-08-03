const { Router } = require('express');
const getAllSavings = require('../../controllers/savings/getAllSavings');
const postSaving = require('../../controllers/savings/postSaving');
const deleteSaving = require('../../controllers/savings/deleteSaving');
const updateSaving = require('../../controllers/savings/updateSaving');
const savingMiddleware = require('../../utils/middlewares/savingMiddlewares');
const savingPostMiddleware = require('../../utils/middlewares/savingPostMiddleware');

const router = Router();

router.post('/', savingPostMiddleware, postSaving);
router.delete('/:id', savingMiddleware, deleteSaving);
router.get('/', getAllSavings);
router.put('/:id', savingMiddleware, updateSaving);
module.exports = router;
