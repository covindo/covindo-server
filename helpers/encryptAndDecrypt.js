const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10)

function comparePass(plainPass, hash) {
    const isValidPass = bcrypt.compareSync(plainPass, hash)
    return isValidPass
}

function encrypt(password){
	return bcrypt.hashSync(password, salt)
}

module.exports = {
	comparePass,
	encrypt
}