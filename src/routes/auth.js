import express from "express";
import {login, signUp, resetPassword} from "../controllers/auth";

const router = express.Router();

router.post("/api/v1/login", login);
router.post("/api/v1/signup", signUp);
router.put("/api/v1/reset-password", resetPassword);

export default router;