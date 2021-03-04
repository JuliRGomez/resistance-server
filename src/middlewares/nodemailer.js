import nodemailer from "nodemailer";
import {google} from "googleapis";
import fs from "fs";
import path from "path";

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleSecret = process.env.GOOGLE_SECRET;
const googleRefreshToken = process.env.GOOGLE_REFRESH_TOKEN;
const Oauth2 = google.auth.OAuth2;

const oauth2Client = new Oauth2(googleClientId, googleSecret, "https://developers.google.com/oauthplayground");

oauth2Client.setCredentials({
    "refresh_token": googleRefreshToken
});

const accessToken = oauth2Client.getAccessToken();

const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: "julirg58.2@gmail.com",
        clientId: googleClientId,
        clientSecret: googleSecret,
        refreshToken: googleRefreshToken,
        accessToken: accessToken
    },
    tls: {
        rejectUnauthorized: false
    }
});

const templateEmail = fs.readFileSync(path.join(__dirname, "..", "templates", "lost_password.html"));

const sendEmail = (email,token,userid) => {
    const mailOptions = {
        from: "julirg58.2@gmail.com",
        to: email,
        subject: "Esta es una prueba del envio de correos con nodemailer",
        generateTextFromHTML: true,
        html: `<a href="http://tuapp/reset-password?tkn=:${token}&amp;uid=:${userid}">CLICk</a>`
    }
    smtpTransport.sendMail(mailOptions, (error, info) => {
        if(error){
            console.log(error);
        }else{
            console.log(info);
        }
    });
}

export default sendEmail;
