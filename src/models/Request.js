import { Schema, model } from "mongoose";

const requestSchema = new Schema(
  {
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
    estado: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Request", requestSchema);
