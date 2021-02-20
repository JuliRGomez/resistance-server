import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth";
import cors from "cors";

dotenv.config();
const PORT = process.env.PORT || 8000;

app.use(cors());

app.use("/api/v1",authRouter)

const app = express();
app.use(express.json());

app.listen(PORT,() => {
    console.log("Server runing in : ",PORT);
});