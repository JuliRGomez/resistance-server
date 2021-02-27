import jwt from "jsonwebtoken";

export const genrateJWT = (user) => {
    let token = jwt.sign(user,process.env.SECRET_KEY,{algorithm:"HS256",expiresIn:"1hr"});
    return token;
}

