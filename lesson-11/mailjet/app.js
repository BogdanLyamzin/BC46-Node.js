const Mailjet = require("node-mailjet");
require("dotenv").config();

const { MJ_APIKEY_PUBLIC, MJ_APIKEY_PRIVATE, MJ_SENDER_EMAIL } = process.env;

const mailjet = new Mailjet({
    apiKey: MJ_APIKEY_PUBLIC,
    apiSecret: MJ_APIKEY_PRIVATE,
});

const request = mailjet
        .post('send', { version: 'v3.1' })
        .request({
          Messages: [
            {
              From: {
                Email: MJ_SENDER_EMAIL,
                Name: "Site email"
              },
              To: [
                {
                  Email: "bodol96969@mevori.com",
                  Name: "bodo"
                }
              ],
              Subject: "Verify email",
              TextPart: "Verfy email",
              HTMLPart: "<h3>Verify email to <a href=\"https://www.mailjet.com/\">Click here</a>!</h3>"
            }
          ]
        });

request
    .then((result) => {
        console.log(result.body)
    })
    .catch((error) => {
        console.log(error.statusCode);
        console.log(error.message);
    })