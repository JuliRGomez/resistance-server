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
    const rolObj = {
        userID: req.params.id,
        rolID: req.params.idrol
    };
    try {
        if(rolObj){
            const idUser = await UsersRoles.create(rolObj);
            res.status(200).json({idUser});
        }
        return res.status(400).json({message: "Ocurrió un error"});
       
    } catch (error) {
        console.log(error);
        return res.status(400).json({message: "Ocurrió un error", error});
    }
}