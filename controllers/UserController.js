const { User } = require('../models')
const { comparePass } = require('../helpers/encryptAndDecrypt')
const { generateToken } = require('../helpers/jwtGenerateAndVerify')

class UserController {
  static userRegister(req, res, next){
    const { email, password } = req.body
        let obj = {
            email,
            password
        }
        User.create(obj)
        .then(user => {
          console.log('masuk')
            let obj = {
                id: user.id,
                email: user.email
            }
            res.status(200).json(obj)
        })
        .catch(err => {
          next({message: 'Internal Server Error'})
        })
  }

  static async userLogin(req, res, next){
    try {
      const { email, password } = req.body

      const user = await User.findOne({
          where: {
              email
          }
      })
      if (!user) {
          next({message: 'Invalid Email / Password'})
      }
      const isValidPass = comparePass(password, user.password)
      if (isValidPass) {
          const payload = {
              id: user.id,
              email: user.email
          }
          const accessToken = generateToken(payload)
          return res.status(200).json({ accessToken })
      } else {
          next({message: 'Invalid Email / Password'})
      }
    } catch (err) {
        next({message: 'Internal Server Error'})
  }
  }

  static userGoogleLogin(req, res, next){
    res.status(200).json({
      message: 'ok'
    })
  }
}

module.exports = UserController