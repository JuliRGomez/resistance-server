import {contents} from "../models/"

export const getAll = async (req,res) =>{
    try {
        let results = await contents.findAll();
        res.json(results);
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            message: "hubo un error con la solictud",error,
        });
    }
}

export const getOne = async (req,res) =>{
    try{
        let results = await contents.findOne({where: {content_id: req.params.id}});
        res.json({message: results});
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            message: "hubo un error con la solictud",error,
        });
    }
}