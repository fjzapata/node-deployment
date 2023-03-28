"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var authCtrl = _interopRequireWildcard(require("../controllers/auth.controller"));
var _middlewares = require("../middlewares");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var router = (0, _express.Router)();
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
router.post("/signup", _middlewares.verifySignup.checkDuplicateUsernameOrDNI, authCtrl.signUp);
var _default = router;
exports["default"] = _default;