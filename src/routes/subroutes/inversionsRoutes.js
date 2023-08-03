const { Router } = require('express');
const getAllInversions = require('../../controllers/inversions/getAllInversions');
const postInversion = require('../../controllers/inversions/postInversion');
const updateInversion = require('../../controllers/inversions/updateInversion');
const deleteInversion = require('../../controllers/inversions/deleteInversion');
const inversionPostMiddleware = require('../../utils/middlewares/inversionPostMiddleware');

const router = Router();

router.get('/', getAllInversions);
router.post('/', inversionPostMiddleware, postInversion);
router.delete('/:id', updateInversion);
router.put('/:id', deleteInversion);

module.exports = router;
