const jwt = require('jsonwebtoken')
const SECRET_KEY = process.env.JWT_SECRET

function generateToken(payload) {
    const token = jwt.sign(payload, SECRET_KEY)
    return token
}

function cekToken(token) {
    return jwt.verify(token, SECRET_KEY)
}

module.exports = { generateToken, cekToken }