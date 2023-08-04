const { Router } = require('express');
const getAllSavings = require('../../controllers/savings/getAllSavings');
const postSaving = require('../../controllers/savings/postSaving');
const deleteSaving = require('../../controllers/savings/deleteSaving');
const updateSaving = require('../../controllers/savings/updateSaving');
const savingMiddleware = require('../../utils/middlewares/savingMiddlewares');
const savingPostMiddleware = require('../../utils/middlewares/savingPostMiddleware');
const savingUpdateMiddleware = require('../../utils/middlewares/savingUpdateMiddleware');

const router = Router();

/**
 * Get savings
 * @openapi
 * /api/savings:
 *   get:
 *     tags:
 *       - Savings
 *     summary: "Get all savings"
 *     description: |
 *       Este endpoint es para traer todos los ahorros(Savings) de la base de datos
 *     responses:
 *       '200':
 *         description: Encuentra todos los ahorros(Savings).
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/savings"
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   mount:
 *                     type: integer
 *                   goal:
 *                     type: integer
 *                   createdAt:
 *                     type: string
 *                   updatedAt:
 *                     type: string
 *             example:
 *               - id: 1
 *                 name: Ahorrar para moto
 *                 mount: 200
 *                 goal: 1000
 *                 createdAt: "2023-08-03T17:54:38.428Z"
 *                 updatedAt: "2023-08-03T17:54:38.428Z"
 *               - id: 2
 *                 name: Ahorrar para auto
 *                 mount: 2000
 *                 goal: 100000
 *                 createdAt: "2023-08-03T17:54:38.428Z"
 *                 updatedAt: "2023-08-03T17:54:38.428Z"
 *
 *       '404':
 *         description: No se encontraron los ahorros.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Savings not found!
 *
 */
router.get('/', getAllSavings);

/**
 * Post saving
 * @openapi
 * /api/savings:
 *    post:
 *      tags:
 *        - Savings
 *      summary: "Post one saving"
 *      description: Este endpoint es para crear un nuevo ahorro ( Saving ), recuerda que el ID se crea automaticamente con Sequelize,
 *       al igual que las fechas!
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/savingPost"
 *      responses:
 *       '200':
 *         description: Si lo creo, devuelve al ahorro ( Saving ) creado con sus propiedades
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/savings"
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   mount:
 *                     type: integer
 *                   goal:
 *                     type: integer
 *                   createdAt:
 *                     type: string
 *                   updatedAt:
 *                     type: string
 *             example:
 *                 id: 1
 *                 name: Ahorrar para moto
 *                 mount: 200
 *                 goal: 1000
 *                 createdAt: "2023-08-03T17:54:38.428Z"
 *                 updatedAt: "2023-08-03T17:54:38.428Z"
 *
 *       '400':
 *         description: Si no envian el NAME-MOUNT-GOAL por body (EL PARAMETRO EN EL ERROR CAMBIA SEGUN EL PARAMETRO QUE FALTA)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Parameter NAME is not defined
 *       '404':
 *         description: Si el usuario no se encuentra logueado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: User not found
 *       '409':
 *         description: Si el ahorro ya existe
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: This saving already exists!
 *       '500':
 *         description: Errores internos de la base de dato
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Message of error
 *
 */
router.post('/', savingPostMiddleware, postSaving);

/**
 * Delete saving
 * @openapi
 * /api/savings/:id:
 *    delete:
 *      tags:
 *        - Savings
 *      summary: "Delete one Saving"
 *      description: Endpoint para eliminar un Saving
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: "ID of the Saving to delete."
 *      responses:
 *       '200':
 *         description: Si lo deletea
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/savings"
 *               items:
 *                 type: object
 *                 properties:
 *                   deleted:
 *                     type: string
 *             example:
 *                 delete: Saving deleted!
 *       '404':
 *         description: Si el saving no se encuentra
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Saving not found!
 *
 *       '500':
 *         description: Error de la base de datos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Message of error!
 *
 */
router.delete('/:id', savingMiddleware, deleteSaving);

/**
 * Put saving
 * @openapi
 * /api/savings/:id:
 *    put:
 *      tags:
 *        - Savings
 *      summary: "Update one saving"
 *      description: Este endpoint es para updatear las propiedades MOUNT y GOAL de los ahorros, solo envias Mount y Goal.
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: "ID of the saving to update."
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/savingPut"
 *      responses:
 *       '200':
 *         description: Si lo updatea, devuelve al ahorro ( Saving ) updateado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/savings"
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   mount:
 *                     type: integer
 *                   goal:
 *                     type: integer
 *                   createdAt:
 *                     type: string
 *                   updatedAt:
 *                     type: string
 *             example:
 *                 id: 1
 *                 name: Ahorrar para moto
 *                 mount: 300
 *                 goal: 400
 *                 createdAt: "2023-08-03T17:54:38.428Z"
 *                 updatedAt: "2023-08-03T17:54:38.428Z"
 *
 *       '404':
 *         description: Si el saving no se encuentra
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Saving not found!
 *       '400':
 *         description: Si no recibe los parametros Mount  y Goals, el parametro del msj cambia segun el que falta
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: 'Parameter MOUNT is not defined'
 *
 *       '500':
 *         description: Error de la base de datos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Message of error!
 *
 */
router.put('/:id', savingUpdateMiddleware, updateSaving);
module.exports = router;
