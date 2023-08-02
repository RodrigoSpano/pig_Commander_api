const express = require('express');
const loginUser = require('../../controllers/auth/loginControllers');
const signupUser = require('../../controllers/auth/signupController');

const router = express.Router();
/**
 * Get expenses
 * @openapi
 * /api/auth/login:
 *    post:
 *      tags:
 *        - auth
 *      summary: "auth login"
 *      description: Este endpoint es para logearse con un usuario existente en al db
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
 *                items:
 *                  type: object
 *                  properties:
 *                    token:
 *                      type: string
 *                    user: 
 *                      type: object
 *        '404':
 *          description: No encuentra el usuario
 *        '400':
 *          description: invalid credentials, es decir, no coincide la password 
 *        '500':
 *          description: internal sv error, puede ser un error de conexon, Network error

 *
 */
router.post('/login', loginUser);
/**
 * Get expenses
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
router.post('/signup', signupUser);

module.exports = router;