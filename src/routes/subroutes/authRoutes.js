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
 *      summary: "auth login"
 *      description: Este endpoint es para logearse con un usuario existente en la db
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
 *        '404':
 *          description: No encuentra el usuario
 *        '400':
 *          description: invalid credentials, es decir, no coincide la password 
 *        '500':
 *          description: internal sv error, puede ser un error de conexon, Network error
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
 *          description: se pudo crear el usuario, retorna success de tipo booleano
 *        '400':
 *          description: fields are require, faltan campos requeridos o error inesperado al crear user
 *        '500':
 *          description: internal sv error, puede ser un error de conexon, Network error

 *
 */
router.post('/signup', userAlreadyExistsMiddleware, signupUser);
/**
 * GET secret
 * @openapi
 * /api/auth/secret:
 *    get:
 *      tags:
 *        - auth
 *      summary: 'auth secret'
 *      description: Este endpoint es para autorizar al usuario(auth)
 *      parameters:
 *        - name: Authorization
 *          in: header
 *          description: Bearer ${token}
 *          required: true
 *      responses:
 *        '200':
 *          description: el token es valido, por lo que tenes acceso a las rutas

 */
router.get('/secret', passport.authenticate('jwt', { session: true, failureMessage: 'Invalid token' }), (req, res) => {
  res.status(200).json({ logged: true });
});

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
 *          description: la session se destruye correctamente
 *        '400':
 *          description: la session no se pudo destruir correctamente
 *        '500':
*            description: internal sv error, puede ser un error de conexon, Network error

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
 *          description: el usuario se elimina correctamente
 *        '404':
 *          description: el usuario no existe
 *        '500':
*            description: internal sv error, puede ser un error de conexon, Network error

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