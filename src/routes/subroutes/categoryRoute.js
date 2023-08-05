const { Router } = require('express');
const getAllCategories = require('../../controllers/category/getAllCategories');
const createCategory = require('../../controllers/category/createCategory');
const deleteCategory = require('../../controllers/category/deleteCategory');
const {
  categoryExist,
  postCategoriesMiddleware,
} = require('../../utils/middlewares/categoryMiddleware');
const getDefaultCategories = require('../../controllers/category/getDefaultsCategory');

const router = Router();

/**
 * Get methods
 * @openapi
 * /api/category:
 *   get:
 *     tags:
 *       - Category
 *     summary: "Get all category"
 *     description: |
 *       Este endpoint es para traer todas las categorias de la base de datos.
 *     responses:
 *       '200':
 *         description: Encuentra todas las categorias.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/categories"
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *             example:
 *               - id: 1
 *                 name: Food
 *               - id: 2
 *                 name: Entertainment
 *               - id: 3
 *                 name: Health
 *       '404':
 *         description: No se encontraron las categorias.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Message error.
 *
 */
router.get('/', getAllCategories);
/**
 * Get methods 
 * @openapi
 * /api/category/default:
 *   get:
 *     tags:
 *       - Category
 *     summary: "Get all categories by default"
 *     description: |
 *       Este endpoint verifica que ciertas categorias predeterminadas ya esten presentes en la base de datos, en caso de que no, las crea.
 *        Las categorias predeterminadas son: entertainment, health, education, transport, food. 
 *     responses:
 *       '201':
 *         description: Las categorias predeterminadas fueron agregadas.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/categories"
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *             example:
 *               - id: 1
 *                 name: Food
 *               - id: 2
 *                 name: Entertainment
 *               - id: 3
 *                 name: Health
 *       '302':
 *         description: La categorias predeterminadas ya existen en la base de datos.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: that categories already exists
 *       '500':
 *         description: No se encontraron las categorias.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Message of error.
 *
 */
router.get('/defaults', getDefaultCategories);
/**
 * Post category
 * @openapi
 * /api/category:
 *    post:
 *      tags:
 *        - Category
 *      summary: "Post one category"
 *      description: Este endpoint es para crear una nueva category ( categoria ).
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/categoriesPost"
 *      responses:
 *       '201':
 *         description: Se ha creado correctamente la categoria y sera retornado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/categories"
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                   name:
 *                     type: string
 *             example:
 *                 id: 1
 *                 name: "Pet food"
 *       '400':
 *         description: No se ha recibido un nombre de categoria
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: category name is required
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
router.post('/', postCategoriesMiddleware, createCategory);
/**
 * Delete income
 * @openapi
 * /api/category/:idCategory:
 *    delete:
 *      tags:
 *        - Category
 *      summary: "Delete one category"
 *      description: Endpoint para eliminar una categoria
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: number
 *          required: true
 *          description: "ID of the category to delete."
 *      responses:
 *       '200':
 *         description: Se ha eliminado correctamente la categoria
 *         content:
 *           application/json:
 *             schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *             example:
 *                 deleted: category deleted
 *       '404':
 *         description: Si la categoria no se encuentra
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: category not found
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
router.delete('/:idCategory', categoryExist, deleteCategory);

module.exports = router;
