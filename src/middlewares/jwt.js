import JWT from "jsonwebtoken";

export const generateJWT = (user) => {
    const userObj = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
    };
    const token = jwt.sign(userObj, process.env.SECRET_KEY, {algorithm: "HS256", expiresIn: "1h"});
    return token;
}

export const validateJWT = (req, res, next) => {
    const headerToken = req.headers['authorization'];
    const token = headerToken.split(" ")[1];
    if(token){
        try {
            const verify = jwt.verify(token, process.env.SECRET_KEY);
            next();
        } catch (error) {
            res.status(401).json({message: "la validacion no es correcta"})
        } 
    }else {
        res.status(401).json({message: "La validación es incorrecta"});
    }
}