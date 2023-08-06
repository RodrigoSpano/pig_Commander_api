const { Router } = require('express');
const getAllIncomes = require('../../controllers/incomes/getAllIncomes');
const createIncome = require('../../controllers/incomes/createIncome');
const deleteIncome = require('../../controllers/incomes/deleteIncome');
const updateIncome = require('../../controllers/incomes/updateIncome');
const getMonthlyIncomes = require('../../controllers/incomes/getMonthlyIncomes');
const {
  incomeExist,
  getIncomesMiddleware,
  mountValidate,
} = require('../../utils/middlewares/incomesMiddleware');

const router = Router();

/**
 * Get incomes
 * @openapi
 * /api/incomes:
 *   get:
 *     tags:
 *       - Incomes
 *     summary: "Get all incomes"
 *     description: |
 *       Este endpoint se utiliza para traer los ingresos de todos los usuarios
 *     responses:
 *       '200':
 *         description: Encuentra todos los ingresos(incomes).
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/incomes"
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   mount:
 *                     type: float
 *                   automatized:
 *                     type: boolean
 *                   auto_date:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                   updatedAt:
 *                     type: string
 *                   category_id:
 *                     type: integer
 *                   method_id:
 *                     type: integer
 *             example:
 *               - id: "4e1a381f-10ec-455e-b04f-2c45fccdb94d"
 *                 mount: 250.00
 *                 automatized: true
 *                 auto_date: "2023-10-25T15:30:00Z"
 *                 createdAt: "2023-08-03T17:54:38.428Z"
 *                 updatedAt: "2023-08-03T17:54:38.428Z"
 *                 category_id: 1
 *                 method_id: 2
 *               - id: "4e1a381f-10ec-455e-b04f-2c45fccdb94e"
 *                 mount: 520.00
 *                 automatized: false
 *                 auto_date: null
 *                 createdAt: "2023-08-03T17:54:38.428Z"
 *                 updatedAt: "2023-08-03T17:54:38.428Z"
 *                 category_id: 2
 *                 method_id: 1
 *       '400':
 *         description: El usuario no ha iniciado sesion.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: User not logged in
 *       '404':
 *         description: No se encontraron los ingresos.
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
router.get('/', getAllIncomes);
/**
 * Get monthly incomes
 * @openapi
 * /api/incomes/monthly:
 *   get:
 *     tags:
 *       - Incomes
 *     summary: "This endpoint retrieves the income records (Incomes) for the current month of a user from the database."
 *     description: |
 *       Este endpoint se utiliza para obtener todos los ingresos (Incomes) correspondientes al mes actual de un usuario desde la base de datos.
 *     responses:
 *       '200':
 *         description: Encuentra todos los ingresos(incomes) correspondientes al mes actual.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/incomes"
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   mount:
 *                     type: float
 *                   automatized:
 *                     type: boolean
 *                   auto_date:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                   updatedAt:
 *                     type: string
 *                   category_id:
 *                     type: integer
 *                   method_id:
 *                     type: integer
 *             example:
 *               - id: "4e1a381f-10ec-455e-b04f-2c45fccdb94d"
 *                 mount: 250.00
 *                 automatized: true
 *                 auto_date: "2023-10-25T15:30:00Z"
 *                 createdAt: "2023-08-03T17:54:38.428Z"
 *                 updatedAt: "2023-08-03T17:54:38.428Z"
 *                 category_id: 1
 *                 method_id: 2
 *               - id: "4e1a381f-10ec-455e-b04f-2c45fccdb94e"
 *                 mount: 520.00
 *                 automatized: false
 *                 auto_date: null
 *                 createdAt: "2023-08-03T17:54:38.428Z"
 *                 updatedAt: "2023-08-03T17:54:38.428Z"
 *                 category_id: 2
 *                 method_id: 1
 *
 *       '500':
 *         description: No se encontraron los ingresos del usuario, correspondientes al mes actual.
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
router.get('/monthly', getMonthlyIncomes);

/**
 * Post income
 * @openapi
 * /api/incomes:
 *    post:
 *      tags:
 *        - Incomes
 *      summary: "Post one income"
 *      description: Este endpoint es para crear un nuevo income ( ingreso ), recuerda que el ID se crea automaticamente con Sequelize,
 *       al igual que las fechas! Ten en cuenta que si automatized es false, auto_date sera null.
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/incomesPost"
 *      responses:
 *       '200':
 *         description: Se ha creado correctamente el 'income' y sera devuelto.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/incomes"
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   mount:
 *                     type: float
 *                   automatized:
 *                     type: boolean
 *                   auto_date:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                   updatedAt:
 *                     type: string
 *                   category_id:
 *                     type: integer
 *                   method_id:
 *                     type: integer
 *             example:
 *                 id: "4e1a381f-10ec-455e-b04f-2c45fccdb94d"
 *                 mount: 250.00
 *                 automatized: true
 *                 auto_date: "2023-10-25T15:30:00Z"
 *                 createdAt: "2023-08-03T17:54:38.428Z"
 *                 updatedAt: "2023-08-03T17:54:38.428Z"
 *                 category_id: 1
 *                 method_id: 2
 *
 *       '404':
 *         description: Faltan datos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Missing data..
 *       '400':
 *         description: El monto no existe o es menor a 1
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: mount cannot be less than 1
 *       '500':
 *         description: Errores internos de la base de datos
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
router.post('/',  createIncome);

/**
 * Delete income
 * @openapi
 * /api/incomes/:id:
 *    delete:
 *      tags:
 *        - Incomes
 *      summary: "Delete one income"
 *      description: Endpoint para eliminar un income
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: "ID of the income to delete."
 *      responses:
 *       '200':
 *         description: Se ha eliminado correctamente el income
 *         content:
 *           application/json:
 *             schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *             example:
 *                 delete: income deleted!
 *       '400':
 *         description: El monto deberia ser mayor que 1
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: mount should not be less than $1
 *       '404':
 *         description: Si el income no se encuentra
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Income not found!
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
router.delete('/:idIncome', incomeExist, deleteIncome);

/**
 * Put income
 * @openapi
 * /api/incomes/:idIncome:
 *    put:
 *      tags:
 *        - Incomes
 *      summary: "Update one income"
 *      description: Este endpoint es para actualizar las propiedades MOUNT, AUTOMATIZED Y AUTO_DATE, del income, solo envias Mount,automatized y auto_date.
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: "ID of the income to update."
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/incomesPut"
 *      responses:
 *       '200':
 *         description: Si lo actualiza, devuelve el income ( ingreso ) con los datos nuevos.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/incomes"
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   mount:
 *                     type: float
 *                   automatized:
 *                     type: boolean
 *                   auto_date:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                   updatedAt:
 *                     type: string
 *                   category_id:
 *                     type: integer
 *                   method_id:
 *                     type: integer
 *             example:
 *                 id: "4e1a381f-10ec-455e-b04f-2c45fccdb94d"
 *                 mount: 250.00
 *                 automatized: true
 *                 auto_date: "2023-10-25T15:30:00Z"
 *                 createdAt: "2023-08-03T17:54:38.428Z"
 *                 updatedAt: "2023-08-03T17:54:38.428Z"
 *                 category_id: 1
 *                 method_id: 2
 *
 *       '404':
 *         description: Si el income no se encuentra
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: income not found!
 *       '400':
 *         description: El monto no existe o es menor a 1
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: mount cannot be less than 1
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
router.put('/:idIncome', incomeExist, updateIncome);


module.exports = router;
