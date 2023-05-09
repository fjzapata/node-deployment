import { Router } from "express";
const router = Router();
import * as requestCtrl from "../controllers/request.controller";
import { authJwt } from "../middlewares";


/**
 * @swagger
 * /api/request:
 *  get:
 *    security:
 *       - bearerAuth: []
 *    summary: Obtener todos los permisos
 *    tags: [Request]
 *    responses:
 *      200:
 *         description: Peticion satisfactoria
 *         content:
 *            application/json:
 *               schema:
 *                  type: array 
 *                  items: 
 *                     $ref: '#/components/schemas/Request'
 *      401:
 *         description: No autorizado
 *      403:
 *         description: Token no provisionado
 */

router.get("/", requestCtrl.getRequest);


router.get("/admin/:requestId", requestCtrl.getRequestAdmin);

/**
 * @swagger
 * components:
 *  schemas:
 *    Request:
 *      type: object
 *      properties:
 *        nombre: 
 *          type: string
 *          description: the user name
 *        departamento: 
 *          type: string
 *          description: Departamento asignado  
 *        division: 
 *          type: string
 *          description: division de operacion
 *        grado: 
 *          type: string
 *          description: grado asignado
 *        asunto:
 *          type: string
 *          description: asunto de salida
 *        fecha:
 *           type: date
 *           description: fecha de salida
 *        lugar:
 *           type: string
 *           description: Lugar al que se dirige
 *        objeto:
 *           type: string
 *           description: objeto de la visita
 *        guardia:
 *           type: string
 *           description: guardia asignada
 *        tiempodesde:
 *           type: date
 *           description: hora de salida
 *        hasta:
 *           type: date
 *           description: hora de llegada
 *        admin:
 *           type: string
 *           description: administrador el cual llega la solicitud
 */

/**
 * @swagger
 * /api/request:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    summary: Creacion de nueva peticion
 *    tags: [Request]
 *    requestBody:
 *      required: true
 *      content: 
 *          application/json:
 *              schema:
 *                  type: object
 *                  $ref: '#/components/schemas/Request'
 *    responses:
 *      201:
 *         description: Ha sido Creada una nueva peticion
 *      401:
 *         description: No autorizado
 *      403:
 *         description: Token no provisionado
 */
router.post("/", requestCtrl.createRequest);

/**
 * @swagger
 * /api/request/{requestId}:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    summary: Return a request
 *    tags: [Request]
 *    requestBody:
 *      required: true
 *      content: 
 *          application/json:
 *              schema:
 *                  type: object
 *                  $ref: '#/components/schemas/Request'
 *    parameters: 
 *      - in: path
 *        name: requestId
 *        schema:
 *          type: string
 *          required: true
 *          description: the user id
 *    responses:
 *      200:
 *        description: succesful request
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Request'
 *      404: 
 *        description: User no found
 */

router.get("/:requestId", authJwt.verifyToken, requestCtrl.getRequestById);

/**
 * @swagger
 * /api/request/{requestId}:
 *  put:
 *    security:
 *      - bearerAuth: []
 *    summary: Actualizar estado de la peticion
 *    tags: [Request]
 *    parameters: 
 *      - in: path
 *        name: requestId
 *        schema:
 *          type: string
 *          required: true
 *          description: the user id
 *    responses:
 *      200:
 *        description: succesful request
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Request'
 *      404: 
 *        description: User no found
 */

router.put("/:requestId", requestCtrl.updateRequestById);

/**
 * @swagger
 * /api/request/{requestId}:
 *  delete:
 *    security:
 *      - bearerAuth: []
 *    summary: Eliminar un usuario
 *    tags: [Request]
 *    parameters: 
 *      - in: path
 *        name: requestId
 *        schema:
 *          type: string
 *          required: true
 *          description: the user id
 *    responses:
 *      204:
 *        description: Usuario Eliminado
 */

router.delete(
  "/:requestId",
  authJwt.verifyToken,
  requestCtrl.deleteRequestById
);


router.get("/notification/:requestId", requestCtrl.getNotification);

export default router;
