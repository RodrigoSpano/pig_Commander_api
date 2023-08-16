const { Router } = require('express');
const combinedFilters = require('../../controllers/filters/postFilters');

const router = Router();

router.get('/', combinedFilters);

module.exports = router;
