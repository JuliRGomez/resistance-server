import express from "express";
import {login, signUp, resetPassword, updatePassword} from "../controllers/auth";

const router = express.Router();

router.post("/api/v1/login", login);
router.post("/api/v1/signup", signUp);
router.post("/api/v1/reset-password", resetPassword);
router.post("/api/v1/update-password", updatePassword);

export default router;