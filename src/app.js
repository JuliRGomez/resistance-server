import express from "express";
import authRouter from "./routes/auth";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use("/api/v1",authRouter)

export default app;