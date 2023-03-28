"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var requestSchema = new _mongoose.Schema({
  nombre: String,
  departamento: String,
  division: String,
  guardia: String,
  grado: String,
  fecha: Date,
  asunto: String,
  objeto: String,
  lugar: String,
  tiempoDesde: Date,
  hasta: Date,
  estado: String
}, {
  timestamps: true,
  versionKey: false
});
var _default = (0, _mongoose.model)("Request", requestSchema);
exports["default"] = _default;