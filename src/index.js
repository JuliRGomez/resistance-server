import express from "express";
import dotenv from "dotenv";
import  authRouter from "./routes/auth";
import users from "./routes/users";
import roles from "./routes/roles";

dotenv.config();
const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.json());
//-Meddlewares
app.use(authRouter);
app.use(users);
app.use(roles);

app.listen(PORT,() => {
    console.log("Server runing in : ",PORT);
});