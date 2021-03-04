import {users,reset_tokens} from "../models/";
import bcrypt, { compareSync } from "bcrypt";
import {genrateJWT} from "../middlewares/jwt";
import {v4 as uuidv4} from "uuid";
import moment from "moment";
import sendEmail from "../middlewares/nodemailer";
import {Op} from "sequelize";


export const login = async (req,res) => {
    const {email,password} = req.body;
    try {
        let user = await users.findOne({where: {email}});
        if(user){
            let valid = bcrypt.compareSync(password,user.password);
            if(valid){
                let userObj = {
                    id: user.id,
                    firtsName: user.firtsName,
                    lastName: user.lastName,
                    email: user.email,
                };
                return res.status(200).json({
                    message:"inicio de sesion correcto",
                    token: genrateJWT(userObj),
                    
                });
            }
            return res.status(401).json({
                //contraseña incorrecta
                message: "las credenciales son incorrectas"
            });
        }
        else {
            return res.status(401).json({
                //contraseña incorrecta
                message: "las credenciales son incorrectas"
            });
        }
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            message:" hubo en error al autenticar",
            error,
        });
    }
}

export const signUp = async (req,res) => {
    const {firstName,lastName,email,password} = req.body;
    
    try {
        let hashPassword = bcrypt.hashSync(password,10);
        let result = await users.findOrCreate({
            defaults:{firstName,lastName,email,password:hashPassword},
            where: {email},
        });
        
        if (result[1]){
            res.status(201).json(result[0]);
        }
        else{
            res.status(400).json({message:"El usuario ya existe"});
        }
    }
    catch(error){
        res.status(500).json({
            message:" hubo en error al autenticar",
            error,
        });
    }
}

export const resetPass = async (req,res) => {
    const {email} = req.body;
    try {
        let user = await users.findOne({where: {email}});
        if (user){
            let tokenUUID = uuidv4();
            let resetTokenObj = {
                token : tokenUUID,
                expiration_date: moment().add(1,'h'),
                user_id: user.id,
                active: true,
            };
            let result = await reset_tokens.create(resetTokenObj);
            if(result){
                //emviar email
                sendEmail(email,tokenUUID,resetTokenObj.userId);
                return   res.status(200).json({message: "se enviara un correo electronico a la direccion"});
            }
            return res.status(500).json({message: "error del sistema"});
        }
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({message: "error del sistema"});
    }
}

export const updatePass = async (req,res) => {
    const {user_id,password,token} = req.body;

    try {
        const responseToken = await reset_tokens.findOne({where: {token, [Op.and]: { 
        user_id
            }}});
        if (responseToken){
            let validToken = moment().isBefore(responseToken.expirationDate);
            if(validToken&&responseToken.active==true){
                let hashPassword = bcrypt.hashSync(password,10);
                let result = await users.update({ password:hashPassword }, {
                    where: {
                        id:user_id
                    }
                });
                if(result){
                    await reset_tokens.update({active: false}, {where: {id: responseToken.id}});
                    return res.status(200).json({message: "contraseña actualizada correctamente "});
                }
            }
            else {
                return res.status(400).json({message: "el token ha expirado o no es valido "});
            }
        }

    }
    catch(error){
        console.log(error);
        return res.status(500).json({message: "error del sistema"});
    }
}