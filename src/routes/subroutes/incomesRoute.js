const { Router } = require('express');
const getAllIncomes = require('../../controllers/incomes/getAllIncomes');
const createIncome = require('../../controllers/incomes/createIncome');
const deleteIncome = require('../../controllers/incomes/deleteIncome');
const updateIncome = require('../../controllers/incomes/updateIncome');
const getMonthlyIncomes = require('../../controllers/incomes/getMonthlyIncomes');
const { incomeExist } = require('../../utils/middlewares/incomesMiddleware');

const router = Router();

/**
 * Get incomes
 * @openapi
 * /api/incomes:
 *    get:
 *      tags:
 *        - Incomes
 *      summary: "Get all incomes"
 *      description: Este endpoint es para listar las expenses totales
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/example"
 *      responses:
 *        '200':
 *          description: Encuentra los gastos totales
 *        '404':
 *          description: No encuentra los gastos totales
 *
 */

router.get('/', getAllIncomes); // ?
router.post('/', createIncome);
router.delete('/:idIncome', incomeExist, deleteIncome);
router.put('/:idIncome', incomeExist, updateIncome);

router.get('/monthly/:idUser', getMonthlyIncomes);

module.exports = router;
