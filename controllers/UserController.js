const { User } = require('../models')
const { comparePass } = require('../helpers/encryptAndDecrypt')
const { generateToken } = require('../helpers/jwtGenerateAndVerify')

class UserController {
  static userRegister(req, res, next){
    const { email, password } = req.body
    User.create({
      email: email || '',
      password: password || ''
    })
      .then(data => {
        res.status(201).json({
          id: data.id,
          email: data.email
        })
      })
      .catch(err => {
        next({
          name: 'WrongEmail'
        })
      })
  }

  static userLogin(req, res, next){
    console.log('called')
    User.findOne({
      where:{
        email: req.body.email || ''
      }
    })
      .then(data => {
        if(!data){
          next({
            name: 'WrongEmail'
          })
        }else{
          let decryptedPassword = comparePass(req.body.password, data.password)
          if(decryptedPassword){
            let access_token = generateToken({
              id: data.id,
              email: data.email
            })
            res.status(200).json({
              access_token,
              userData: {
                email: data.email
              }
            })
          }else{
            next({
              name: 'WrongPassword'
            })
          }
        }
      })
      .catch(err => {
        console.log(err)
        next(err)
      })
  }

  static userGoogleLogin(req, res, next){
    res.status(200).json({
      message: 'ok'
    })
  }
}

module.exports = UserController