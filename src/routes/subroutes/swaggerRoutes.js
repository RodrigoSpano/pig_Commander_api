//! PROFILE
/**
 * Get user data
 * @openapi
 * /api/profile:
 *   get:
 *     tags:
 *       - profile
 *     summary: "Get user data"
 *     description: |
 *       Este endpoint es para traer la informacion del usuario.
 *     responses:
 *       '200':
 *         description: Encuentra la informacion.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/user"
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   googleId:
 *                     type: string
 *                   name:
 *                     type: string
 *                   lastname:
 *                     type: string
 *                   password:
 *                     type: string
 *                   email:
 *                     type: string
 *                   image:
 *                     type: string
 *                   premium:
 *                     type: boolean
 *             example:
 *               - id: 1
 *                 googleId: null
 *                 name: lionel
 *                 lastname: messi
 *                 password: password12
 *                 email: 'lio@messi.com'
 *                 image: urlofimage
 *                 premium: false
 *       '404':
 *         description: No se encuentra al usuario.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: user not found.
 *       '500':
 *          description: internal server error! Puede ser un error de conexion, Network error
 *          content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Message of error
 */

/**
 * DELETE user
 * @openapi
 * /api/profile/:id:
 *    delete:
 *      tags:
 *        - profile
 *      summary: 'delete user'
 *      description: Este endpoint es para eliminar un usuario
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: number
 *          required: true
 *          description: "ID of the user to delete."
 *      responses:
 *        '200':
 *          description: El usuario se ha eliminado correctamente
 *          content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *        '404':
 *          description: El usuario no existe
 *          content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: user not found
 *        '500':
 *          description: Internal server error, puede ser un error de conexon, Network error
 *          content:
 *           application/json:
 *            schema:
 *              type: object
 *              properties:
 *                error:
 *                  type: string
 *                  example: Message of error
 */
/**
 * POST profile pic
 * @openapi
 * /api/profile:
 *    post:
 *      tags:
 *        - profile
 *      summary: "Post profile picture"
 *      description: Este endpoint es para agregar una foto de perfil al usuario
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  image:
 *                    type: string
 *      responses:
 *        '200':
 *          description: Se agrego con exito la foto de perfil, se devuelve la foto de perfil.
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  image:
 *                    type: string
 *              example:
 *                 image: urldeimagen
 *        '400':
 *          description: No se ha ingresado una imagen
 *          content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Missing file
 *        '500':
 *          description: internal server error! Puede ser un error de conexon, Network error
 *          content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Message of error
 */
/**
 * Update profile pic
 * @openapi
 * /api/profile:
 *    put:
 *      tags:
 *        - profile
 *      summary: "Update profile pic"
 *      description: "Endpoint para actualizar la foto de perfil."
 *      requestBody:
 *          required: true
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  image:
 *                    type: string
 *      responses:
 *        '200':
 *          description: "La foto de perfil se actualizo correctamente"
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  image:
 *                    type: string
 *              example:
 *                 image: urldeimagen
 *        '500':
 *          description: "Internal server error, could be a connection error or network error."
 *          content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Message of error
 */
/**
 * DELETE profile pic
 * @openapi
 * /api/profile:
 *    delete:
 *      tags:
 *        - profile
 *      summary: 'delete profile pic'
 *      description: Este endpoint es para eliminar la foto de perfil del usuario
 *      requestBody:
 *          required: true
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  image:
 *                    type: string
 *      responses:
 *        '200':
 *          description: El usuario se ha eliminado correctamente
 *          content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 deleted:
 *                   type: string
 *                   example: Profile pic deleted
 *        '400':
 *          description: Falta la imagen
 *          content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: No profile image to delete
 *        '500':
 *          description: Internal server error, puede ser un error de conexon, Network error
 *          content:
 *           application/json:
 *            schema:
 *              type: object
 *              properties:
 *                error:
 *                  type: string
 *                  example: Message of error
 */

//! AUTH
/**
 * POST login
 * @openapi
 * /api/auth/login:
 *    post:
 *      tags:
 *        - auth
 *      summary: "Auth login"
 *      description: Este endpoint es para logearse con un usuario existente en la base de datos
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/userLogin"
 *      responses:
 *        '202':
 *          description: se pudo logear, devuelve objeto con token(jwt) y datos de usuario
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  success:
 *                    type: boolean
 *                  token:
 *                    type: string
 *                  user:
 *                    $ref: "#/components/schemas/user"
 *              example:
 *                 success: true
 *                 token: "Tok3n"
 *                 user:
 *                   id: "a56931df-adb9-4322-ab6f-228150189b5d"
 *                   name: "exam"
 *                   lastname: "ple"
 *                   email: "exam@ple.com"
 *                   image: "https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg"
 *                   premium: false
 *        '404':
 *          description: No encuentra el usuario
 *          content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: user not found
 *        '400':
 *          description: invalid credentials, es decir, no coincide la password
 *          content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: invalid credentials
 *        '500':
 *          description: internal server error! Puede ser un error de conexon, Network error
 *          content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Message of error
 */
/**
 * Post signup
 * @openapi
 * /api/auth/signup:
 *    post:
 *      tags:
 *        - auth
 *      summary: "auth signup"
 *      description: Este endpoint es para crear un usuario, registrarse en la db
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/userSignup"
 *      responses:
 *        '201':
 *          description: Se ha creado el usuario, retorna success de tipo booleano
 *          content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *        '400':
 *          description: Faltan campos requeridos o Error inesperado al crear usuario
 *          content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: fields are required
 *                 error:
 *                   type: string
 *                   example: user already exists or cant create user
 *        '500':
 *          description: internal server error, puede ser un error de conexon, Network error
 *          content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Message of error
 */
/**
 * DELETE logout
 * @openapi
 * /api/auth/logout:
 *    delete:
 *      tags:
 *        - auth
 *      summary: 'auth logout'
 *      description: Este endpoint es para cerrar session, se destruye la misma
 *      responses:
 *        '200':
 *          description: La session se destruye correctamente
 *          content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *        '400':
 *          description: La session no se pudo destruir correctamente
 *          content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Message of error
 *        '500':
 *          description: Internal server error, puede ser un error de conexon, Network error
 *          content:
 *           application/json:
 *            schema:
 *              type: object
 *              properties:
 *                error:
 *                  type: string
 *                  example: Message of error
 */
/**
 * GET login google
 * @openapi
 * /api/auth/google:
 *    get:
 *      tags:
 *        - auth
 *      summary: 'login with google'
 *      description: Este endpoint es para logearse con google
 */
//! CATEGORY
/**
 * Get categories
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
//! EXPENSES
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
 *              $ref: "#/components/schemas/Postexpenses"
 *      responses:
 *        '201':
 *          description: "Expense created successfully."
 *        '500':
 *          description: "Internal server error, could be a connection error or network error."
 */

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
//! INCOMES
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
 *                   amount:
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
 *                 amount: 250.00
 *                 automatized: true
 *                 auto_date: "2023-10-25T15:30:00Z"
 *                 createdAt: "2023-08-03T17:54:38.428Z"
 *                 updatedAt: "2023-08-03T17:54:38.428Z"
 *                 category_id: 1
 *                 method_id: 2
 *               - id: "4e1a381f-10ec-455e-b04f-2c45fccdb94e"
 *                 amount: 520.00
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
/**
 * Get monthly incomes
 * @openapi
 * /api/incomes/monthly:
 *   get:
 *     tags:
 *       - Incomes
 *     summary: "This endpoint retrieves the income records (Incomes) for the current month of a user from the database."
 *     description: |
 *       Endpoint  para obtener todos los ingresos (Incomes) correspondientes al mes actual de un usuario desde la base de datos.
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
 *                   amount:
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
 *                 amount: 250.00
 *                 automatized: true
 *                 auto_date: "2023-10-25T15:30:00Z"
 *                 createdAt: "2023-08-03T17:54:38.428Z"
 *                 updatedAt: "2023-08-03T17:54:38.428Z"
 *                 category_id: 1
 *                 method_id: 2
 *               - id: "4e1a381f-10ec-455e-b04f-2c45fccdb94e"
 *                 amount: 520.00
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
 *                   amount:
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
 *                 amount: 250.00
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
 *                   example: amount cannot be less than 1
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
 *                   example: amount should not be less than $1
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

/**
 * Put income
 * @openapi
 * /api/incomes/:idIncome:
 *    put:
 *      tags:
 *        - Incomes
 *      summary: "Update one income"
 *      description: Endpoint para actualizar propiedades amount, AUTOMATIZED, AUTO_DATE, solo envias amount,automatized y auto_date.
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
 *                   amount:
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
 *                 amount: 250.00
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
 *                   example: amount cannot be less than 1
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

//! INVERSION

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
 *                   amount:
 *                     type: integer
 *                   earning:
 *                     type: integer
 *                   user_id:
 *                     type: string
 *             example:
 *               - id: 1
 *                 started_on: 2023-08-04
 *                 finish_at: 2024-08-04
 *                 amount: 1000
 *                 earning: 25
 *                 user_id: 4e26e88c-79b5-4d0c-b609-92555cfc2266
 *               - id: 2
 *                 started_on: 2023-08-04
 *                 finish_at: 2024-08-04
 *                 amount: 10000
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
 *                   amount:
 *                     type: integer
 *                   earning:
 *                     type: integer
 *                   user_id:
 *                     type: string
 *             example:
 *                 id: 1
 *                 started_on: 2023-08-04
 *                 finish_at: 2024-08-04
 *                 amount: 1000
 *                 earning: 25
 *                 user_id: 4e26e88c-79b5-4d0c-b609-92555cfc2266
 *
 *       '400':
 *         description: Si no envian el amount-EARNING-FECHAS por body (EL PARAMETRO EN EL ERROR CAMBIA SEGUN EL PARAMETRO QUE FALTA)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Parameter amount is not defined
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

/**
 * Put inversion
 * @openapi
 * /api/inversions/:id:
 *    put:
 *      tags:
 *        - Inversions
 *      summary: "Update one inversion"
 *      description: Este endpoint es para updatear las propiedades amount y EARNING de los ahorros, solo envias EARNING y amount.
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
 *                   amount:
 *                     type: integer
 *                   earning:
 *                     type: integer
 *                   user_id:
 *                     type: string
 *             example:
 *                 id: 1
 *                 started_on: 2023-08-04
 *                 finish_at: 2024-08-04
 *                 amount: 1000
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
 *         description: Si no recibe los parametros amount  y Earnings, el parametro del msj cambia segun el que falta
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: 'Parameter amount is not defined'
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

//! MAXSPEND
/**
 * @openapi
 * /api/maxspend:
 *   get:
 *     tags:
 *       - Max Spend
 *     summary: "Get max spend"
 *     description: |
 *       Endpoint para devolver el maximo gasto.
 *     responses:
 *       '200':
 *         description: Returns the max spend.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 maxSpend:
 *                   type: integer
 *             example:
 *               maxSpend: 1000
 *       '404':
 *         description: Max spend not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Max spend not found!
 *
 */

/**
 * Create max spend
 * @openapi
 * /api/maxspend:
 *   post:
 *     tags:
 *       - Max Spend
 *     summary: "Create max spend"
 *     description: |
 *       Endpoint para crear un nuevo maximo gasto.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/maxSpend"
 *           example:
 *             maxSpend: 1000
 *     responses:
 *       '201':
 *         description: Max spend created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 maxSpend:
 *                   type: integer
 *                 example:
 *                     id: 1
 *                     maxSpend: 1000
 *
 *       '400':
 *         description: Bad request. Invalid input data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Invalid input data.
 *
 */

/**
 * Update max spend
 * @openapi
 * /api/maxspend:
 *   put:
 *     tags:
 *       - Max Spend
 *     summary: "Update max spend"
 *     description: |
 *       Endpoint para editar el gasto maximo.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/maxSpend"
 *           example:
 *             maxSpend: 1500
 *     responses:
 *       '200':
 *         description: Max spend updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 maxSpend:
 *                   type: integer
 *             example:
 *               id: 1
 *               maxSpend: 1500
 *
 *       '400':
 *         description: Bad request. Invalid input data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Invalid input data.
 *
 *       '404':
 *         description: Max spend not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Max spend not found!
 *
 */

/**
 * Delete max spend
 * @openapi
 * /api/maxspend:
 *   delete:
 *     tags:
 *       - Max Spend
 *     summary: "Delete max spend"
 *     description: |
 *       Endpoint para borrar el gasto maximo.
 *     responses:
 *       '200':
 *         description: Max spend deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Max spend deleted successfully.
 *
 *       '404':
 *         description: Max spend not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Max spend not found!
 *
 */
//! METHOD
/**
 * Get methods
 * @openapi
 * /api/methods:
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

//! SAVINGS
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
 *                   amount:
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
 *                 amount: 200
 *                 goal: 1000
 *                 createdAt: "2023-08-03T17:54:38.428Z"
 *                 updatedAt: "2023-08-03T17:54:38.428Z"
 *               - id: 2
 *                 name: Ahorrar para auto
 *                 amount: 2000
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
 *                   amount:
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
 *                 amount: 200
 *                 goal: 1000
 *                 createdAt: "2023-08-03T17:54:38.428Z"
 *                 updatedAt: "2023-08-03T17:54:38.428Z"
 *
 *       '400':
 *         description: Si no envian el NAME-amount-GOAL por body (EL PARAMETRO EN EL ERROR CAMBIA SEGUN EL PARAMETRO QUE FALTA)
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

/**
 * Put saving
 * @openapi
 * /api/savings/:id:
 *    put:
 *      tags:
 *        - Savings
 *      summary: "Update one saving"
 *      description: Este endpoint es para updatear las propiedades amount y GOAL de los ahorros, solo envias amount y Goal.
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
 *                   amount:
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
 *                 amount: 300
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
 *         description: Si no recibe los parametros amount  y Goals, el parametro del msj cambia segun el que falta
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: 'Parameter amount is not defined'
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
