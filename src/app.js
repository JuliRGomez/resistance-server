import express from "express";
import authRouter from "./routes/auth";
import userRouter from "./routes/users"
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import fs from "fs";

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use("/api/v1",authRouter);
app.use("/api/v1",userRouter);


app.get("/api/v1/reset-password",(req,res)=>{
    res.sendFile(path.join(__dirname, "/", "templates", "reset_pass.html"));
    
   
});
export default app;