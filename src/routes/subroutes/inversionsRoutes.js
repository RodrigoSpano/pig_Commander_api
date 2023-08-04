const { Router } = require('express');
const getAllInversions = require('../../controllers/inversions/getAllInversions');
const postInversion = require('../../controllers/inversions/postInversion');
const updateInversion = require('../../controllers/inversions/updateInversion');
const deleteInversion = require('../../controllers/inversions/deleteInversion');
const inversionPostMiddleware = require('../../utils/middlewares/inversionPostMiddleware');
const inversionDeleteMiddleware = require('../../utils/middlewares/inversionDeleteMiddleware');
const inversionUpdateMiddleware = require('../../utils/middlewares/inversionUpdateMiddleware');

const router = Router();

router.get('/', getAllInversions);
router.post('/', inversionPostMiddleware, postInversion);
router.delete('/:id', inversionDeleteMiddleware, deleteInversion);
router.put('/:id', inversionUpdateMiddleware, updateInversion);

module.exports = router;
