import express from "express";
import {validateJWT} from "../middlewares/jwt"
import {allUsers} from "../controllers/users"
const router = express.Router();


router.get("/api/v1/users", validateJWT, allUsers);

export default router;