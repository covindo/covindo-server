const { User } = require('../models')
const { OAuth2Client } = require('google-auth-library')
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
    const { id_token } = req.body
    let email
    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
    client.verifyIdToken({
      idToken: id_token,
      audience: process.env.GOOGLE_CLIENT_ID,
    })
      .then(data => {
        const payload = data.getPayload()
        email = payload.email
        return User.findOne({
          where:{
            email
          }
        })
      })  
      .then(user => {
        if(!user){
          return User.create({
            email,
            password: (Math.random()*1000+`${process.env.JWT_SECRET}`).toString()
          })
        }else{
          return user
        }
      })
      .then(data => {
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
      })
      .catch(err => {
        next(err)
      })
  }
}

module.exports = UserController