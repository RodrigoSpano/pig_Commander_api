const { Router } = require('express');
const { createAutoTransaction } = require('../../controllers/automatization/createAutomatization');
const stopAutomatize = require('../../controllers/automatization/stopAutomated');
const automatedExistsMiddleware = require('../../utils/middlewares/automatedMiddleware');

const router = Router();

router.post('/transaction', automatedExistsMiddleware, createAutoTransaction);
router.delete('/stop/:jobName', stopAutomatize);



module.exports = router;