import express from "express";
import {validateJWT} from "../middlewares/jwt"
import {addRol, addRolUser} from "../controllers/roles"
const router = express.Router();


router.post("api/v1/roles", validateJWT, addRol);
router.post("api/v1/roles/:id", validateJWT, addRolUser);
export default router;