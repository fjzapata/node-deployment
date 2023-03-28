import { Router } from "express";
const router = Router();
import * as authCtrl from "../controllers/auth.controller";
import { verifySignup } from "../middlewares";

/**
 * @swagger
 * /api/auth/signin:
 *  post:
 *    summary: Ingreso de usuario
 *    tags: [User]
 *    requestBody:
 *      required: true
 *      content: 
 *          application/json:
 *              schema:
 *                  type: object
 *                  $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *         description: ingreso exitoso
 *      401:
 *         description: Contraseña Invalida
 */

router.post("/signin", authCtrl.signIn);

/**
 * @swagger
 * components: 
 *  schemas:
 *   User:
 *    type: object
 *    properties: 
 *      username:
 *        type: string
 *        description: Nombres y apellidos compoleto
 *      cedula: 
 *        type: integer
 *        description: Numero de documento
 *      contraseña: 
 *        type: string
 *        description: contraseña mayor a 6 digitos
 */

/**
 * @swagger
 * /api/auth/signup:
 *  post:
 *    summary: Creacion de nuevo Usuario
 *    tags: [User]
 *    requestBody:
 *      required: true
 *      content: 
 *          application/json:
 *              schema:
 *                  type: object
 *                  $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *         description: Registro de Usuario exitoso
 *      400:
 *         description: Usuario o cedula ya existe
 */
router.post("/signup",verifySignup.checkDuplicateUsernameOrDNI, authCtrl.signUp);

export default router;
