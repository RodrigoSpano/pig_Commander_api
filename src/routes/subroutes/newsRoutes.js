const { Router } = require('express');
const getAllNews = require('../../controllers/news/getAllNews');

const router = Router();

router.get('/', getAllNews);

module.exports = router;
