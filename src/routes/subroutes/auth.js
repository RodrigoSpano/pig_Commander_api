const express = require('express');
const { loginUser } = require('../../controllers/auth/loginControllers');

const router = express.Router();
/**
 * Get expenses
 * @openapi
 * /example:
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
 *          description: se pudo logear, devuelve objeto con token(jwt) y datos de usuario(name, latname, email, premium)
 *        '404':
 *          description: No encuentra el usuario
 *        '400':
 *          description: invalid credentials, es decir, no coincide la password 
 *        '500':
 *          description: internal sv error, puede ser un error de conexon, Network error
 *
 */
router.post('/login', loginUser);

module.exports = router;