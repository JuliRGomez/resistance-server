import express from "express";
import {updatePass,signUp,login} from "../controllers/auth"
const router = express.Router();

router.post("/login",login);
router.post("/signup",signUp);
router.post("/update-password",updatePass)

export default router;