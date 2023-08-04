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
  getExpensesMiddleware,
} = require('../../utils/middlewares/expenseMiddleware');

const router = express.Router();

router.get('/:automatized', getAutomatizedExpenses);
/**
 * Get Monthly expenses
 * @openapi
 * /api/expenses/monthly:
 *    get:
 *      tags:
 *        - Expenses
 *      summary: "Get monthly expenses"
 *      description: "Endpoint para devolver todos los gastos del usuario del mes actual."
 *      parameters:
 *        - in: path
 *          name: user_id
 *          schema:
 *            type: string
 *          required: true
 *          description: "ID of the user to get expenses for."
 *      responses:
 *        '200':
 *          description: "Returns the list of expenses for the current month."
 *        '404':
 *          description: "No expenses found for the user in the current month."
 *        '500':
 *          description: "Internal server error, could be a connection error or network error."
 */
router.get('/monthly', getMonthlyExpenses);

/**
 * Update expense
 * @openapi
 * /api/expenses/:id:
 *    put:
 *      tags:
 *        - Expenses
 *      summary: "Update one expense"
 *      description: "Endpoint para actualizar un gasto existente."
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: "ID of the expense to update."
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/expenses"
 *      responses:
 *        '200':
 *          description: "Expense updated successfully."
 *        '404':
 *          description: "Expense not found."
 *        '500':
 *          description: "Internal server error, could be a connection error or network error."
 */

router.put('/:id', updateExpensesMiddleware, updateExpenses);

/**
 * Delete expenses
 * @openapi
 * /api/expenses/:id:
 *    delete:
 *      tags:
 *        - Expenses
 *      summary: "Delete one expense"
 *      description: "Endpoint para borrar un gasto existente."
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: "ID of the expense to delete."
 *      responses:
 *        '200':
 *          description: "Expense deleted successfully."
 *        '404':
 *          description: "Expense not found."
 *        '500':
 *          description: "Internal server error, could be a connection error or network error."
 */
router.delete('/:id', deleteExpensesMiddleware, deleteExpenses);

/**
 * Post expense
 * @openapi
 * /api/expenses:
 *    post:
 *      tags:
 *        - Expenses
 *      summary: "Post expense"
 *      description: "Endpoint para crear un gasto."
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/expenses"
 *      responses:
 *        '201':
 *          description: "Expense created successfully."
 *        '500':
 *          description: "Internal server error, could be a connection error or network error."
 */
router.post('/', postExpensesMiddleware, postExpenses);

/**
 * Get all expenses
 * @openapi
 * /api/expenses/:id:
 *    get:
 *      tags:
 *        - Expenses
 *      summary: "Get all expenses"
 *      description: "Endpoint para recibir todos los gastos de un usuario."
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: "ID of the user to get expenses for."
 *      responses:
 *        '200':
 *          description: "Returns the list of expenses for the user."
 *        '500':
 *          description: "Internal server error, could be a connection error or network error."
 */
router.get('/', getExpensesMiddleware, getAllExpenses);

module.exports = router;
