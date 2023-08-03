const getAllIncomes = require('../../controllers/incomes/getAllIncomes');
const createIncome = require('../../controllers/incomes/createIncome');
const deleteIncome = require('../../controllers/incomes/deleteIncome');
const updateIncome = require('../../controllers/incomes/updateIncome');
const { Router } = require('express');
const getMonthlyIncomes = require('../../controllers/incomes/getMonthlyIncomes');
const router = Router();

/* dos rutas get
una para un Mes especifico de un usuario en especifico
y otra para todas */

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
router.delete('/:idIncome', deleteIncome);
router.put('/:idIncome', updateIncome);

router.get('/monthly/:idUser',getMonthlyIncomes);

module.exports = router;

/* si automatize false => auto_date null */
