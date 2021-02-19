import express from "express";
import {login, signUp} from "../controllers/auth";

const router = express.Router();

router.post("api/v1/login", login);
router.post("api/v1/signin", signUp);

export default router;