import express from "express";
import dotenv from "dotenv";
import  authRouter from "./routes/auth";
import users from "./routes/users";
import roles from "./routes/roles";
import jwtValidate from "express-jwt";
dotenv.config();
const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.json());

const configValidation = {secret: process.env.SECRET_KEY, algorithms:["HS256"]};
//-Meddlewares
app.use(authRouter);
app.use(jwtValidate(configValidation),users);
app.use(jwtValidate(configValidation),roles);

app.listen(PORT,() => {
    console.log("Server runing in : ",PORT);
});