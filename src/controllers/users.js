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