import express from "express";
import authRouter from "./routes/auth";
import userRouter from "./routes/users";
import rolesRouter from "./routes/roles";
import contentsRouter from "./routes/contents"
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use("/api/v1",authRouter);
app.use("/api/v1",userRouter);
app.use("/api/v1", rolesRouter);
app.use("/api/v1", contentsRouter);

export default app;