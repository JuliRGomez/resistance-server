import express from "express";
import {updatePass,signUp,login,resetPass} from "../controllers/auth";
import {validate,userSchema,loginSchema,tokenSchema} from "../middlewares/validators"

const router = express.Router();

router.post("/login",validate(loginSchema),login);
router.post("/signup",validate(userSchema),signUp);
router.post("/reset-password",resetPass);
router.post("/update-password",validate(tokenSchema),updatePass)

export default router;