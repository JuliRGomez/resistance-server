import { users, roles } from "../models/";

const getRol = async(id) => {
    try{
        let rol = await users.findOne({where: {id}, include: [roles]});
        console.log(rol.roles[0].name);
        return rol.roles[0].name;
    }catch(error){
        console.log(error);
    }
}

export const isAdmin = () => {
    return async (req, res, next) => {
        let rol = await getRol(req.body.id);
        if(rol === "Admin"){
            next();
        }else{
            res.json({
                message: "No tienes los permisos necesarios para acceder al recurso"
            })
        }
    }
}

export const isEditor = () => {
    return async (req, res, next) => {
        let rol = await getRol(req.body.id);
        if(rol === "Editor" || rol === "Admin"){
            next();
        }else{
            res.json({
                message: "No tienes los permisos necesarios para acceder al recurso"
            })
        }
    }
}

export const isUser = () => {
    return async (req, res, next) => {
        const userId = req.body.id;
        let rol = await getRol(userId);
        if(rol === "User" || rol === "Editor" || rol === "Admin"){
                if(userId == req.params.id || rol !== "User"){
                next();
            }else{
                res.json({
                message: "No tienes los permisos necesarios para acceder al recurso"
            })
            }
        }else{
            res.json({
                message: "No tienes los permisos necesarios para acceder al recurso"
            })
        }
    }
}