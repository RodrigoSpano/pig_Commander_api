const express = require('express');
const getAllExpenses = require('../../controllers/expenses/getAllExpenses');
const postExpenses = require('../../controllers/expenses/postExpenses');
const deleteExpenses = require('../../controllers/expenses/deleteExpenses');
const updateExpenses = require('../../controllers/expenses/updateExpenses');
const getMonthlyExpenses = require('../../controllers/expenses/getMonthlyExpenses');
const {
  postExpensesMiddleware,
  getExpensesMiddleware,
  deleteExpensesMiddleware,
  updateExpensesMiddleware,
} = require('../../utils/middlewares/expenseMiddleware');

const router = express.Router();

/**
 * Get Monthly expenses
 * @openapi
 * /api/expenses/monthly/{user_id}:
 *    get:
 *      tags:
 *        - Expenses
 *      summary: "Get monthly expenses"
 *      description: "Endpoint to retrieve all expenses for the current month for a specific user."
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
router.get('/monthly/:user_id', getMonthlyExpenses);

/**
 * Update expense
 * @openapi
 * /api/expenses/{id}:
 *    put:
 *      tags:
 *        - Expenses
 *      summary: "Update one expense"
 *      description: "Endpoint to update an existing expense."
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
 * /api/expenses/{id}:
 *    delete:
 *      tags:
 *        - Expenses
 *      summary: "Delete one expense"
 *      description: "Endpoint to delete an existing expense."
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
 *      description: "Endpoint to create a new expense."
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
 * /api/expenses/{id}:
 *    get:
 *      tags:
 *        - Expenses
 *      summary: "Get all expenses"
 *      description: "Endpoint to retrieve all expenses for a specific user."
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
router.get('/:id', getExpensesMiddleware, getAllExpenses);

module.exports = router;
