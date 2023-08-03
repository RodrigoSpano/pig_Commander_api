const express = require('express');
const getAllExpenses = require('../../controllers/expenses/getAllExpenses');
const postExpenses = require('../../controllers/expenses/postExpenses');
const deleteExpenses = require('../../controllers/expenses/deleteExpenses');
const updateExpenses = require('../../controllers/expenses/updateExpenses');
const getMonthlyExpenses = require('../../controllers/expenses/getMonthlyExpenses');

const router = express.Router();

router.get('/monthly', getMonthlyExpenses);

router.put('/:id', updateExpenses);

router.delete('/:id', deleteExpenses);

router.post('/', postExpenses);

router.get('/:id', getAllExpenses);

module.exports = router;
