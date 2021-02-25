import express from "express";
import {allUsers} from "../controllers/users"
const router = express.Router();

router.get("/api/v1/users", allUsers);

export default router;