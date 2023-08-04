const { Router } = require('express');
const getAllInversions = require('../../controllers/inversions/getAllInversions');
const postInversion = require('../../controllers/inversions/postInversion');
const updateInversion = require('../../controllers/inversions/updateInversion');
const deleteInversion = require('../../controllers/inversions/deleteInversion');
const inversionPostMiddleware = require('../../utils/middlewares/inversionPostMiddleware');
const inversionDeleteMiddleware = require('../../utils/middlewares/inversionDeleteMiddleware');
const inversionUpdateMiddleware = require('../../utils/middlewares/inversionUpdateMiddleware');

const router = Router();

/**
 * Get inversions
 * @openapi
 * /api/inversions:
 *   get:
 *     tags:
 *       - Inversions
 *     summary: "Get all Inversions"
 *     description: |
 *       Este endpoint es para traer todos las inversiones (Inversions) de la base de datos
 *     responses:
 *       '200':
 *         description: Encuentra las inversiones (Inversions).
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/inversions"
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   started_on:
 *                     type: string
 *                   finish_at:
 *                     type: string
 *                   mount:
 *                     type: integer
 *                   earning:
 *                     type: integer
 *                   user_id:
 *                     type: string
 *             example:
 *               - id: 1
 *                 started_on: 2023-08-04
 *                 finish_at: 2024-08-04
 *                 mount: 1000
 *                 earning: 25
 *                 user_id: 4e26e88c-79b5-4d0c-b609-92555cfc2266
 *               - id: 2
 *                 started_on: 2023-08-04
 *                 finish_at: 2024-08-04
 *                 mount: 10000
 *                 earning: 250
 *                 user_id: 4e26e88c-79b5-4d0c-b609-92555cfc2266
 *
 *       '404':
 *         description: No se encontraron las inversiones.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Inversions not found!
 *       '500':
 *         description: Error interno del server.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Mensaje del error! 
 *
 */
router.get('/', getAllInversions);

/**
 * Post inversion
 * @openapi
 * /api/inversions:
 *    post:
 *      tags:
 *        - Inversions
 *      summary: "Post one inversion"
 *      description: Este endpoint es para crear una nueva inversion (Inversions), recuerda que el ID se crea automaticamente con Sequelize,
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/inversionPost"
 *      responses:
 *       '200':
 *         description: Si lo creo, devuelve a la inversion ( Inversion ) creado con sus propiedades
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/inversions"
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   started_on:
 *                     type: string
 *                   finish_at:
 *                     type: string
 *                   mount:
 *                     type: integer
 *                   earning:
 *                     type: integer
 *                   user_id:
 *                     type: string
 *             example:
 *                 id: 1
 *                 started_on: 2023-08-04
 *                 finish_at: 2024-08-04
 *                 mount: 1000
 *                 earning: 25
 *                 user_id: 4e26e88c-79b5-4d0c-b609-92555cfc2266
 *
 *       '400':
 *         description: Si no envian el MOUNT-EARNING-FECHAS por body (EL PARAMETRO EN EL ERROR CAMBIA SEGUN EL PARAMETRO QUE FALTA)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Parameter MOUNT is not defined
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
router.post('/', inversionPostMiddleware, postInversion);

/**
 * Delete inversion
 * @openapi
 * /api/inversion/:id:
 *    delete:
 *      tags:
 *        - Inversions
 *      summary: "Delete one Inversion"
 *      description: Endpoint para eliminar una Inversion
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: "ID of the Inversion to delete."
 *      responses:
 *       '200':
 *         description: Si lo deletea
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/inversions"
 *               items:
 *                 type: object
 *                 properties:
 *                   deleted:
 *                     type: string
 *             example:
 *                 delete: Inversion deleted!
 *       '404':
 *         description: Si la inversion no se encuentra
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Inversion not found!
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
router.delete('/:id', inversionDeleteMiddleware, deleteInversion);

/**
 * Put inversion
 * @openapi
 * /api/inversions/:id:
 *    put:
 *      tags:
 *        - Inversions
 *      summary: "Update one inversion"
 *      description: Este endpoint es para updatear las propiedades MOUNT y EARNING de los ahorros, solo envias EARNING y MOUNT.
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: "ID of the inversion to update."
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/inversionPut"
 *      responses:
 *       '200':
 *         description: Si lo updatea, devuelve la inversion ( Inversion ) updateado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/inversions"
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   started_on:
 *                     type: string
 *                   finish_at:
 *                     type: string
 *                   mount:
 *                     type: integer
 *                   earning:
 *                     type: integer
 *                   user_id:
 *                     type: string
 *             example:
 *                 id: 1
 *                 started_on: 2023-08-04
 *                 finish_at: 2024-08-04
 *                 mount: 1000
 *                 earning: 25
 *                 user_id: 4e26e88c-79b5-4d0c-b609-92555cfc2266
 *
 *       '404':
 *         description: Si la inversion no se encuentra
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Inversion not found!
 *       '400':
 *         description: Si no recibe los parametros Mount  y Earnings, el parametro del msj cambia segun el que falta
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
router.put('/:id', inversionUpdateMiddleware, updateInversion);

module.exports = router;
