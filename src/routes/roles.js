import express from "express";
import {validateJWT} from "../middlewares/jwt"
import {addRol, addRolUser} from "../controllers/roles"
const router = express.Router();


router.post("/api/v1/roles", addRol);
router.post("/api/v1/users/:id/roles/:idrol", addRolUser);
export default router;