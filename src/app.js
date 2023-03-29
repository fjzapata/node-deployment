import express from "express";
import morgan from "morgan";
import requestRoutes from "./routes/request.routes";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import { createRoles, createAdmin } from "./libs/initialSetup";
import path from 'path'
import './config'
import cors from 'cors'

// Swagger
import swaggerUI from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'
const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Escuel Naval API",
      version: "1.0.0"
    },
    servers: [{
      url : `http://localhost:${process.env.PORT || 3000}`
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
  apis: [`${path.join(__dirname, './routes/*.js')}`]
}

// settings
const app = express();
createRoles();
createAdmin();

// middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use("/api-doc", swaggerUI.serve,
 swaggerUI.setup(swaggerJsDoc(swaggerSpec)))

app.get("/", (req, res) => {
  res.json("Welcome");
});


// Routes
app.use(cors({
  origin: 'http://localhost:5173'
}))
app.use("/api/request", requestRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    message: 'Endpoint not found'
  })
})

export default app;
