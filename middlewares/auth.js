const { cekToken } = require('../helpers/jwt')
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
            res.status(500).json({ name: 'Internal Server Error' })
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({ message: err.message })
    }
}


module.exports = { authenticate }