import joi from "joi";
import spanishjoi from "../utils/spanish-joi-messages";

export const userSchema = joi.object({
    firstName: joi.string().required().label("nombre").messages(spanishjoi),
    lastName: joi.string().required().label("apellido").messages(spanishjoi),
    email: joi.string().email().required().label("correo").messages(spanishjoi),
    password: joi.string().required().label("contraseña").pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).messages(spanishjoi),
});
export const loginSchema = joi.object({
    email: joi.string().email().label("correo").required().messages(spanishjoi),
    password: joi.string().required().label("contraseña").pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).messages(spanishjoi)
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