const { Router } = require('express');

const router = Router();
/**
 * Get expenses
 * @openapi
 * /example:
 *    get:
 *      tags:
 *        - Example
 *      summary: "Get all expenses"
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
router.get('/example', (req, res) => {
  res.status(200).send('ok');
});
/**
 * Delete all expenses
 * @openapi
 * /example:
 *    delete:
 *      tags:
 *        - Example
 *      summary: "Delete all expenses"
 *      description: Este endpoint es para eliminar los gastos
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/example"
 *      responses:
 *        '200':
 *          description: Se elimino correctamente
 *        '400':
 *          description: No se elimino
 *
 */

router.delete('/example/:id', (req, res) => {
  res.status(201).send('ok');
});

module.exports = router;