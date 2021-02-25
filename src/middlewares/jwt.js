import jwt from "jsonwebtoken";

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