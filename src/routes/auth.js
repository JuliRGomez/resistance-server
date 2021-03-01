import express from "express";
import {updatePass,signUp,login} from "../controllers/auth";
import {validate,userSchema,loginSchema} from "../middlewares/validators"

const router = express.Router();

router.post("/login",validate(loginSchema),login);
router.post("/signup",validate(userSchema),signUp);
router.post("/update-password",updatePass)

export default router;