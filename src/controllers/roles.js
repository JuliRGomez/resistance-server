import {Roles, UserRoles} from "../models/";

export const addRol = async (req, res) => {
    try {
        const result = await Roles.findOne({where: {name: req.body.name}});
        if (result){
            return res.status(400).json({message: "El Rol ya existe"});
           
        } if(req.body.name===""){
            return res.status(400).json({message: "Ingrese un Rol"});
        }
        else{
            const results = await Roles.create(req.body);
            res.status(201).json(results);
        }
    } catch (error) {
        console.log(error);
    }
}

export const addRolUser = async (req, res) =>{
    try {
        const results = await UserRoles.findOne({where: {userId: req.body.id}});
        if(results){
            const newRol = await UsersRoles.create(req.body.userId, req.body.roleId);
            const newRolUser = await Roles.create(req.body.name);
            return res.status(200).json(newRolUser);
        }else{
            return res.status(401).json({message: "Crear un usuario"})
        }
    } catch (error) {
        console.log(error);
    }
}