import jwt from "jsonwebtoken";
import valJWT from "express-jwt"
export const genrateJWT = (user) => {
    let token = jwt.sign(user,process.env.SECRET_KEY,{algorithm:"HS384",expiresIn:"1hr"});
    return token;
}

export const validateJWT = () => {
    return valJWT({secret:process.env.SECRET_KEY});
}