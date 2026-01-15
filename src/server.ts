import express from "express";
import { swaggerUi, swaggerSpec } from "./swagger.js";
import userRoutes from "./routes/user.route.js";
import type { Request, Response } from "express";
import { errorHandler } from "./middleware/error.middleware.js";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Server is running just fine!");
});

app.use("/api/users", userRoutes);
// Serve Swagger UI at /api-docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(errorHandler);
export default app;
