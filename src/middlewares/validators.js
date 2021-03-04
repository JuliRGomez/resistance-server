import joi from "joi";
import spanishjoi from "../utils/spanish-joi-messages";

export const userSchema = joi.object({
    firstName: joi.string().required().label("nombre").messages(spanishjoi),
    lastName: joi.string().required().label("apellido").messages(spanishjoi),
    email: joi.string().email().required().label("correo").messages(spanishjoi),
    password: joi.string().required().label("contraseña").pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')).min(8).messages(spanishjoi),
    
});
export const loginSchema = joi.object({
    email: joi.string().email().label("correo").required().messages(spanishjoi),
    password: joi.string().min(8).required().label("contraseña").pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).messages(spanishjoi)
});

export const tokenSchema = joi.object({
    user_id :joi.number().required(),
    password: joi.string().required().label("contraseña").pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')).min(8).messages(spanishjoi),
    token: joi.string().guid({version:['uuidv4',
    'uuidv5']})
});


export const validate = (schema) =>{
    return async (req,res,next) => {
        try {
            await schema.validateAsync(req.body);
            next();
        }   
        catch (error) {
            //console.log(error.details[0].context)
            res.status(400).json({
                message:error.details[0].context.label+" " + error.message
            });
        }
    }
}