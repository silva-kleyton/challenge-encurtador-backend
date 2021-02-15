import "dotenv/config";

import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import routes from "./routes";
import "./database";
import AppError from "@erros/AppError";

const app = express();

app.use(express.json());
app.use(routes);

// Global error middleware
app.use(
  (error: Error, request: Request, response: Response, _: NextFunction) => {
    if (error instanceof AppError) {
      return response
        .status(error.statusCode)
        .json({ status: "error", error: error.message });
    }

    console.error(error);
    return response
      .status(500)
      .json({ status: "error", error: "Server internal error" });
  }
);

export default app;
