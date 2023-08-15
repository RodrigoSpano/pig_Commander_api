const { Router } = require('express');
const { createAutoTransaction } = require('../../controllers/automatization/createAutomated');
const stopAutomatize = require('../../controllers/automatization/stopAutomated');
const automatedExistsMiddleware = require('../../utils/middlewares/automatedMiddleware');
const getAllAutomatedTransactions = require('../../controllers/automatization/getAllAutomated');

const router = Router();

router.get('/transactions', getAllAutomatedTransactions);
router.post('/transaction', automatedExistsMiddleware, createAutoTransaction);
router.delete('/stop/:jobName', stopAutomatize);



module.exports = router;