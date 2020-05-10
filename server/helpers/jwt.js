const jwt = require("jsonwebtoken");
const secretKey=process.env.SECRETKEY

function generateToken(payload) {
    return jwt.sign(payload, secretKey)
}

function verifyToken(token) {
    return jwt.verify(token, secretKey)
}

module.exports = {
    generateToken,
    verifyToken
}