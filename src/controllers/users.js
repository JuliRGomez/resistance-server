import {users} from "../models/"

export const getAll = async (req,res) =>{
    try {
        let results = await users.findAll();
        res.json(results);
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            message: "hubo un error con la solictud",error,
        });
    }
}

export const getOne = async (req, res) => {
    try{
        let results = await users.findOne({where: {id: req.params.id}});
        res.json(results);
    }
    catch(error){
        console.log(error);
        res.status(500).json({
        message: "hubo un error con la solictud",error,
        });
    }
}

export const putOne = async (req, res) => {
    const {firstName,lastName} = req.body;
    try{
        let result = await users.update({firstName:firstName}, {lastName:lastName}, {where: {id:req.params.id}});
        if(result){
            res.json({message: "Los datos del socio han sido actualizados correctamente", result});
        }
        else{
            res.json({message: "La actualización falló"})
        } 
    }
    catch(error){
        res.status(500).json({
        message: "Hubo un error con la solictud",error,
        });
    }
}