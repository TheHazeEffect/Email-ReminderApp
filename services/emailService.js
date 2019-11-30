const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;


async function sendEmail({ receiver, subject, message }) {
   
    //setting up OAuth client (clientId,ClientSecret,url of OAuthPlayground)
    const oauth2Client = new OAuth2(
        process.env.CLIENT_ID,
        process.env.CLIENT_SECRET,
        "https://developers.google.com/oauthplayground"
    );

    //Using refresh token to get new access Token
    oauth2Client.setCredentials({
        refresh_token: process.env.REFRESH_TOKEN
    });
    const tokens = await oauth2Client.getAccessToken()
    const accessToken = tokens.token

    //descripe how to send email using SMTP and Nodemailer
    const smtpTransport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type: "OAuth2",
            user: process.env.SENDER,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN,
            accessToken: accessToken
        },
        tls: {
            rejectUnauthorized: false //If you know that the host does not have a valid certificate set false
        }
    })


    //Email content
    const mailOptions = {
        from: process.env.SENDER,
        to: receiver,
        subject: subject,
        generateTextFromHTML: true,
        html: message
    }

    //Send Email
    smtpTransport.sendMail(mailOptions, (error, response) => {
        error ? console.log(error) : console.log(response);
        smtpTransport.close();
    });
}



module.exports.sendEmail = sendEmail; // Exports the function to be used elsewhere
