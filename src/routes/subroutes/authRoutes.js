const express = require('express');
const passport = require('passport');
const loginUser = require('../../controllers/auth/loginController');
const signupUser = require('../../controllers/auth/signupController');
const logoutUser = require('../../controllers/auth/logoutController');
const deleteUser = require('../../controllers/auth/deleteUserController');
const { userExistsDeleteMiddleware, userAlreadyExistsMiddleware } = require('../../utils/middlewares/authMiddleware');

const router = express.Router();
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
 *                 token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1lc3NpQG1lc3NpLmNvbSIsImlkIjoiYTU2OTMxZGYtYWRiOS00MzIyLWFiNmYtMjI4MTUwMTg5YjVkIiwiaWF0IjoxNjkxMjYwNDU1fQ.h8MFbq3r8m7e5yvNgEmVPWIoOfHg1Mrml21u2MJwQUY"
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
router.post('/login', loginUser);
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
router.post('/signup', userAlreadyExistsMiddleware, signupUser);


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
router.delete('/logout', logoutUser);

/**
 * DELETE user
 * @openapi
 * /api/auth/user/:id:
 *    delete:
 *      tags:
 *        - auth
 *      summary: 'delete user'
 *      description: Este endpoint es para eliminar un usuario
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
router.delete('/user/:id', userExistsDeleteMiddleware, deleteUser);

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
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email'],
}));
router.get('/google/callback', passport.authenticate('google', {
  successRedirect: 'http://localhost:8080/api/google/success',
  failureRedirect: 'http://localhost:8080/api/auth/login',
}));



module.exports = router;