const { Router } = require('express');
const getAllMethods = require('../../controllers/methods/getAllMethods');

const router = Router();
/**
 * Get methods
 * @openapi
 * /methods:
 *   get:
 *     tags:
 *       - Methods
 *     summary: "Get all methods"
 *     description: |
 *       Este endpoint es para traer todos los métodos de pago de la base de datos.
 *     responses:
 *       '200':
 *         description: Encuentra todos los métodos de pago.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/methods"
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *             example:
 *               - id: 1
 *                 name: Cash
 *               - id: 2
 *                 name: Debit
 *               - id: 3
 *                 name: Transfer
 *               - id: 4
 *                 name: Credit
 *       '404':
 *         description: No se encontraron los métodos de pago.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Methods not found.
 *
 */
router.get('/', getAllMethods);

module.exports = router;
