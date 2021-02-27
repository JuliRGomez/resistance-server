import express from "express";
import valJWT from "express-jwt"
import {getAll} from "../controllers/users"
const router = express.Router();

router.get("/users",valJWT({secret: process.env.SECRET_KEY, algorithms: ["HS256"]}),getAll);

export default router;