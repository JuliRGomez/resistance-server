import express from "express";
import valJWT from "express-jwt";

const router = express.Router();

router.post ("/roles", valJWT({secret: process.env.SECRET_KEY, algorithms: ["HS256"]}));
router.post ("/roles:userId");

export default router;