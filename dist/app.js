"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _request = _interopRequireDefault(require("./routes/request.routes"));
var _auth = _interopRequireDefault(require("./routes/auth.routes"));
var _user = _interopRequireDefault(require("./routes/user.routes"));
var _initialSetup = require("./libs/initialSetup");
var _path = _interopRequireDefault(require("path"));
require("./config");
var _cors = _interopRequireDefault(require("cors"));
var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));
var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Swagger

var swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Escuel Naval API",
      version: "1.0.0"
    },
    servers: [{
      url: "http://localhost:".concat(process.env.PORT || 3000)
    }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    },
    bearerAuth: []
  },
  apis: ["".concat(_path["default"].join(__dirname, './routes/*.js'))]
};

// settings
var app = (0, _express["default"])();
(0, _initialSetup.createRoles)();
(0, _initialSetup.createAdmin)();

// middlewares
app.use(_express["default"].json());
app.use((0, _morgan["default"])("dev"));
app.use("/api-doc", _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup((0, _swaggerJsdoc["default"])(swaggerSpec)));
app.get("/", function (req, res) {
  res.json("Welcome");
});

// Routes
app.use((0, _cors["default"])({
  origin: 'http://localhost:5173'
}));
app.use("/api/request", _request["default"]);
app.use("/api/auth", _auth["default"]);
app.use("/api/users", _user["default"]);
app.use(function (req, res, next) {
  res.status(404).json({
    message: 'Endpoint not found'
  });
});
var _default = app;
exports["default"] = _default;