const { Router } = require('express');
const getAllIncomes = require('../../controllers/incomes/getAllIncomes');
const createIncome = require('../../controllers/incomes/createIncome');
const deleteIncome = require('../../controllers/incomes/deleteIncome');
const updateIncome = require('../../controllers/incomes/updateIncome');
const getMonthlyIncomes = require('../../controllers/incomes/getMonthlyIncomes');
const { incomeExist } = require('../../utils/middlewares/incomesMiddleware');

const router = Router();

router.get('/', getAllIncomes);

router.get('/monthly', getMonthlyIncomes);

router.post('/', createIncome);

router.delete('/:idIncome', incomeExist, deleteIncome);

router.put('/:idIncome', incomeExist, updateIncome);

module.exports = router;
