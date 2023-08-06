const { Router } = require('express');
const getAllMethods = require('../../controllers/methods/getAllMethods');

const router = Router();

router.get('/', getAllMethods);

module.exports = router;
