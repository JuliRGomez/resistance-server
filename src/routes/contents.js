import express from "express";
import valJWT from "express-jwt";
import {getAll, getOne} from "../controllers/contents";
import {isAdmin, isEditor, isUser} from "../middlewares/permissions";

const router = express.Router();

router.get("/contents",valJWT({secret: process.env.SECRET_KEY, algorithms: ["HS256"]}),isUser(),getAll);
router.get("/contents/:id",valJWT({secret: process.env.SECRET_KEY, algorithms: ["HS256"]}),isUser(),getOne);
router.post("/contents",valJWT({secret: process.env.SECRET_KEY, algorithms: ["HS256"]}),isUser());
router.put("/contents/:id",valJWT({secret: process.env.SECRET_KEY, algorithms: ["HS256"]}),isUser());
router.delete("/contents/:id",valJWT({secret: process.env.SECRET_KEY, algorithms: ["HS256"]}),isAdmin());

export default router;