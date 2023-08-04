const express = require('express');
const getMaxSpend = require('../../controllers/maxSpend/getMaxSpend');
const postMaxSpend = require('../../controllers/maxSpend/postMaxSpend');
const updateMaxSpend = require('../../controllers/maxSpend/updateMaxSpend');
const deleteMaxSpend = require('../../controllers/maxSpend/deleteMaxSpend');
const {
  deleteMaxSpendMiddleware,
  updateMaxSpendMiddleware,
  postMaxSpendMiddleware,
  getMaxSpendMiddleware,
} = require('../../utils/middlewares/maxSpendMiddleware');

const router = express.Router();

/**
 * @swagger
 * /api/maxspend:
 *   get:
 *     summary: Obtener el gasto máximo del usuario actual
 *     tags:
 *       - MaxSpend
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Gasto máximo obtenido con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MaxSpend'
 *       '500':
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/', getMaxSpendMiddleware, getMaxSpend);

/**
 * @swagger
 * /api/maxspend:
 *   post:
 *     summary: Crear un nuevo gasto máximo
 *     tags:
 *       - MaxSpend
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MaxSpendInput'
 *     responses:
 *       '201':
 *         description: Gasto máximo creado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MaxSpend'
 *       '400':
 *         description: Datos de entrada inválidos
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       '500':
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post('/', postMaxSpendMiddleware, postMaxSpend);

/**
 * @swagger
 * /api/maxspend/{id}:
 *   put:
 *     summary: Actualizar un gasto máximo existente
 *     tags:
 *       - MaxSpend
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID del gasto máximo a actualizar
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MaxSpendInput'
 *     responses:
 *       '200':
 *         description: Gasto máximo actualizado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MaxSpend'
 *       '400':
 *         description: Datos de entrada inválidos
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       '404':
 *         description: Gasto máximo no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       '500':
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

router.put('/:id', updateMaxSpendMiddleware, updateMaxSpend);

/**
 * @swagger
 * /api/maxspend/{id}:
 *   delete:
 *     summary: Eliminar un gasto máximo existente
 *     tags:
 *       - MaxSpend
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID del gasto máximo a eliminar
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Gasto máximo eliminado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MaxSpend'
 *       '404':
 *         description: Gasto máximo no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       '500':
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

router.delete('/:id', deleteMaxSpendMiddleware, deleteMaxSpend);

module.exports = router;
