const nodemailer = require("nodemailer");
require("dotenv").config();

const {UKR_NET_PASSWORD, UKR_NET_USER} = process.env;

const nodemailerConfig = {
    host: "smtp.ukr.net",
    port: 465, // 25, 465, 2525
    secure: true,
    auth: {
        user: UKR_NET_USER,
        pass: UKR_NET_PASSWORD,
    }
};

const transport = nodemailer.createTransport(nodemailerConfig);

const email = {
    to: "bodol96969@mevori.com",
    from: UKR_NET_USER,
    subject: "Verify email",
    html: "<p>Verify email</p>"
};

transport.sendMail(email)
    .then(()=> console.log("Email send success"))
    .catch(error => console.log(error.message))