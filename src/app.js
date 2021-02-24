import express from "express";
import authRouter from "./routes/auth";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1",authRouter)

export default app;