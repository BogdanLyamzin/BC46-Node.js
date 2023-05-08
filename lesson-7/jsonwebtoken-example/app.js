const jwt = require("jsonwebtoken");
require("dotenv").config();

const {SECRET_KEY} = process.env;

const payload = {
    id: "64591572b2c0aab8abb0f1ac"
};

const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "23h"});
// console.log(token)
const decodeToken = jwt.decode(token);
// console.log(decodeToken)

try {
    const {id} = jwt.verify(token, SECRET_KEY);
    console.log(id);
    const invalidToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTkxNTcyYjJjMGFhYjhhYmIwZjFhYyIsImlhdCI6MTY4MzU2MDQ2OSwiZXhwIjoxNjgzNjQzMjY5fQ.kDfMgvcapfRhtjunkPlEMDZXocxDbf7cyHzH3xRDjR5";
    jwt.verify(invalidToken, SECRET_KEY);
}
catch(error) {
    console.log(error.message);
}