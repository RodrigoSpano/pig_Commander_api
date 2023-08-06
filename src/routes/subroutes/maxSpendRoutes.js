const express = require('express');
const getMaxSpend = require('../../controllers/maxSpend/getMaxSpend');
const postMaxSpend = require('../../controllers/maxSpend/postMaxSpend');
const updateMaxSpend = require('../../controllers/maxSpend/updateMaxSpend');
const deleteMaxSpend = require('../../controllers/maxSpend/deleteMaxSpend');
const {
  deleteMaxSpendMiddleware,
  updateMaxSpendMiddleware,
  postMaxSpendMiddleware,
  getMaxSpendMiddleware,
} = require('../../utils/middlewares/maxSpendMiddleware');

const router = express.Router();

router.get('/', getMaxSpendMiddleware, getMaxSpend);

router.post('/', postMaxSpendMiddleware, postMaxSpend);

router.put('/', updateMaxSpendMiddleware, updateMaxSpend);

router.delete('/', deleteMaxSpendMiddleware, deleteMaxSpend);

module.exports = router;
