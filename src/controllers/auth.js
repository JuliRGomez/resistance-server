import {users,reset_tokens} from "../models/";
import bcrypt, { compareSync } from "bcrypt";
import {genrateJWT} from "../middlewares/jwt";
import {v4 as uuidv4} from "uuid";
import moment from "moment";
import sendEmail from "../middlewares/nodemailer"

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
                userId: user.id,
                active: true,
            };
            let result = await reset_tokens.create(resetTokenObj);
            console.log("result create : " + result);
            if(result){
                
                //emviar email
                sendEmail();
                return   res.status(200).json({message: "se enviara un correo electronico a la direccion"});
            }
            return res.status(500).json({message: "error del sistema"});
        }
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({message: "error del sistema"});3
       
    }
}

export const updatePass = async (req,res) => {
    const {email,password} = req.body;
    console.log(email);
    let hashPassword = bcrypt.hashSync(password,10);
    try {
        let result = await users.update({ password:hashPassword }, {
            where: {
            email
            }
        });
        if (result){
            return res.status(200).json({message: "contraseña actualizada correctamente "});
        }

    }
    catch(error){
        console.log(error);
        return res.status(500).json({message: "error del sistema"});
    }
}