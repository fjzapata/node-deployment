"use strict";

var _app = _interopRequireDefault(require("./app"));
require("./database");
require("./config");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_app["default"].set("port", process.env.PORT || 443);
_app["default"].listen(_app["default"].get("port"), function () {
  console.log("server on port", _app["default"].get("port"));
});