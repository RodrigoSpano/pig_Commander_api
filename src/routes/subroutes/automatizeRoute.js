const { Router } = require('express');
const { createAutoTransaction } = require('../../controllers/automatization/createAutomatization');

const router = Router();

router.post('/transaction', createAutoTransaction);

module.exports = router;