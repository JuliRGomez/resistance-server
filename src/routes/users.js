import express from "express";
import valJWT from "express-jwt";
import {getAll, getOne} from "../controllers/users";
import {isAdmin, isEditor, isUser} from "../middlewares/permissions";
const router = express.Router();

router.get("/users",valJWT({secret: process.env.SECRET_KEY, algorithms: ["HS256"]}),isUser(),getAll);
router.get("/users/:id",valJWT({secret: process.env.SECRET_KEY, algorithms: ["HS256"]}),isUser(),getOne);
router.post("/users",valJWT({secret: process.env.SECRET_KEY, algorithms: ["HS256"]}),isEditor());
router.put("/users/:id",valJWT({secret: process.env.SECRET_KEY, algorithms: ["HS256"]}),isEditor());
router.delete("/users/:id",valJWT({secret: process.env.SECRET_KEY, algorithms: ["HS256"]}),isAdmin());

export default router;