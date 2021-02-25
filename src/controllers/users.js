import {Users} from "../models/";

export const allUsers = async (req, res) =>{
    try {
        const results = await Users.findAll();
        res.json(results);
    } catch (error) {
        res.status(500).json({
            message:"Ocurrió un error al procesar tu petición",
            error
        });
    }
}