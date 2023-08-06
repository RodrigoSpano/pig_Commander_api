const express = require('express');
const getAllExpenses = require('../../controllers/expenses/getAllExpenses');
const postExpenses = require('../../controllers/expenses/postExpenses');
const deleteExpenses = require('../../controllers/expenses/deleteExpenses');
const updateExpenses = require('../../controllers/expenses/updateExpenses');
const getMonthlyExpenses = require('../../controllers/expenses/getMonthlyExpenses');
const getAutomatizedExpenses = require('../../controllers/expenses/getAutomatizedExpenses');

const {
  postExpensesMiddleware,
  deleteExpensesMiddleware,
  updateExpensesMiddleware,
} = require('../../utils/middlewares/expenseMiddleware');

const router = express.Router();

router.get('/automatized', getAutomatizedExpenses);

router.get('/monthly', getMonthlyExpenses);

router.put('/:id', updateExpensesMiddleware, updateExpenses);

router.delete('/:id', deleteExpensesMiddleware, deleteExpenses);

router.post('/', postExpensesMiddleware, postExpenses);

router.get('/', getAllExpenses);

module.exports = router;
