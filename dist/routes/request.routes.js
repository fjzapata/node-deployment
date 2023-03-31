"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var requestCtrl = _interopRequireWildcard(require("../controllers/request.controller"));
var _middlewares = require("../middlewares");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var router = (0, _express.Router)();
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
router.post("/", _middlewares.authJwt.verifyToken, requestCtrl.createRequest);

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

router.get("/:requestId", _middlewares.authJwt.verifyToken, requestCtrl.getRequestById);

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

router.put("/:requestId", _middlewares.authJwt.verifyToken, requestCtrl.updateRequestById);

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

router["delete"]("/:requestId", _middlewares.authJwt.verifyToken, requestCtrl.deleteRequestById);
var _default = router;
exports["default"] = _default;