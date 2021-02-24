import {Users, ResetTokens} from "../models";
import bcrypt from "bcrypt";
import {generateJWT} from "../middlewares/jwt";


export const login = async (req, res) => {
    const {email, password} = req.body;
  try {
      let results = await Users.findOne({where: {email: email}});
      const valid = bcrypt.compareSync(password, results.password);
      if(valid){
          let token = generateJWT(results);
          return res.status(200).json({
            message: "Has iniciado sesion Correctamente",
            token});
        }
        return res.status(401).json({message: "Las credenciales son incorrectas"});
  } catch (error) {
      res.json({message: "Las credenciales son incorrectas"})
  }
}

export const signUp = async (req, res) => {
    try {
        const result = await Users.findOne({where: {email: req.body.email}});
        if (result){
            return res.status(400).json({message: "El usuario ya existe"});
           
        } if(req.body.firstName==="" || req.body.lastName===""){
            return res.status(400).json({message: "Llena todos los campos"});
        }
        else{
            const pass = req.body.password;
            const encryptedPass = bcrypt.hashSync(pass, 10);
            req.body.password = encryptedPass;
            const results = await Users.create(req.body);
            res.status(201).json(results);
        }
    } catch (error) {
        console.log(error);
    }
}

export const resetPassword = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
    }
}

export const updatePassword = async (req, res) => {
    
}