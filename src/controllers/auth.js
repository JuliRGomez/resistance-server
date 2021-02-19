import {Users} from "../models";
import bcryptjs from "bcryptjs";
import {generateJWT} from "../middlewares/jwt";

export const login = async (req, res) => {
    const {email, password} = req.body;
  try {
      let results = await Users.findOne({where: {email: email}});
      const valid = bcryptjs.compareSync(password, results.password);
      if(valid){
          let token = generateJWT(results);
          return res.status(200).json({
            message: "Has iniciado sesion Correctamente",
            token});
        }
        return res.status(401).json({message: "las credenciales son incorrectas"});
  } catch (error) {
      res.json({message: "Las credenciales son incorrectas"})
  }
}

//2. Completar el registro de usuario
// - responder con un codigo de estado fallido 400 > cuando hagan falta campos o cuando el usuario ya exista en la base de datos
// - responder con el objeto del usuario que ha sido creado y un codigo 201 cuando el registro sea satisfactorio
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
            const encryptedPass = bcryptjs.hashSync(pass, 10);
            req.body.password = encryptedPass;
            const results = await Users.create(req.body);
            res.status(201).json(results);
        }
    } catch (error) {
        console.log(error);
    }
}