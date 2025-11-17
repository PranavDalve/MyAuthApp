import "reflect-metadata";
import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { AppDataSource } from "./data-source";
import authRoutes from "./routes/auth";

dotenv.config();

const app = express();
const PORT = process.env.DB_PORT || 5000;

app.use(cors());
app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected to Neon");
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
  });

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});