const { cekToken } = require('../helpers/jwtGenerateAndVerify')
const { User } = require('../models')

function authenticate(req, res, next) {
    try {
        let decoded = cekToken(req.headers.access_token)
        User.findOne({
            where: {
                email: decoded.email
            }
        })
        .then(find => {
            if (!find) {
                res.status(401).json({ name: 'Please Login First'})
            } else {
                req.user = find
                next()
            }
        })
        .catch(err => {
            next(err)
        })
    } catch (err) {
        next({
            name: 'NoJWT'
        })
    }
}


module.exports = { 
    authenticate 
}