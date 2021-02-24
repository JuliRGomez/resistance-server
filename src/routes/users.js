import express from "express";
import {validateJWT} from "../middlewares/jwt"
import {allUsers} from "../controllers/users"
// import jwt from "express-jwt";
const router = express.Router();

let pass =  process.env.SECRET_KEY
router.get("/api/v1/users", validateJWT, allUsers);

export default router;