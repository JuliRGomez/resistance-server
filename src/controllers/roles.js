import {Roles, UserRoles, Users} from "../models/";

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
        const idUser = await Users.findOne({where: {id: req.params.id}});
        const idRol = await Roles.findOne({where: {id: req.params.id}});
        if(idUser && idRol){
            const rolUser = await UsersRoles.create(req.body);
            
            return res.status(200).json(rolUser);
        }else{
            return res.status(401).json({message: "algo salió mal"})
        }
    } catch (error) {
        console.log(error);
    }
}