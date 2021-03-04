import {Users, ResetTokens} from "../models";
import bcrypt from "bcrypt";
import {generateJWT} from "../middlewares/jwt";
import {Op, where} from "sequelize";
import moment from "moment";
import {v4 as uuidv4} from "uuid";
import sendEmail from "../utils/nodemailer";


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
    const {email} = req.body;
    try {
        let user = await Users.findOne({where: {email}});
        console.log(user);
        if (user){
            let userID = user.id;
            let tokenUUID = uuidv4();
            let resetTokenObj = {
                token: tokenUUID,
                expirationDate: moment().add(1, "day"),
                userId: userID,
                active: true
            };
            let results = await ResetTokens.create(resetTokenObj);
            sendEmail(user.email, tokenUUID, userID);
            return res.status(200).json({message: "Se envieará un correo a tu dirección asociada a la cuenta para reestablecer la contraseña"});
        }
        return res.status(500).json({message: "Ocurrió un error"});
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Ocurrió un error"});
    }
}

export const updatePassword = async (req, res) => {
    const {token, userId, password} = req.body;
    try {
        let tokenObj = await ResetTokens.findOne({where: {token,[Op.and]: {userId}}});
        if(tokenObj){
            let validateToken = moment().isBefore(tokenObj.expirationDate);
            if(tokenObj.active && validateToken){
                let hashPassword = bcrypt.hashSync(password, 10);
                await Users.update({password: hashPassword}, {where: {id: tokenObj.userId}});
                await ResetTokens.update ({active: false}, {where: {id: tokenObj.id}})
                res.status(200).json({message:"Se ah restablecido tu contraseña"});
            }
            return res.status(403).json({message:"Ocurrió un error"});
        }else{
            res.status(403).jason({
                message: "El token es invalido o ya expiró"
            });
        }    
    } catch (error) {
        res.status(500).jason({
            message: "Error al validar un token",
            error
        });
    }
    
}