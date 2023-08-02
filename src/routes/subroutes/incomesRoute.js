const getAllIncomes  = require("../../controllers/incomes/getAllIncomes");
const createIncome = require("../../controllers/incomes/createIncome")
const { Router } = require('express');
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

router.get('/:userId',getAllIncomes) // ?
router.post('/',createIncome)

module.exports = router

/* si automatize false => auto_date null */