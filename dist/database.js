"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_mongoose["default"].connect("mongodb://".concat(process.env.MONGOUSER, ":").concat(process.env.MONGOPASSWORD, "@").concat(process.env.MONGOHOST, ":").concat(process.env.MONGOPORT), {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function (db) {
  return console.log("Db is connected");
})["catch"](function (error) {
  return console.log(error);
});