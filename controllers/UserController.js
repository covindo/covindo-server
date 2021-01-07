class UserController {
  static userRegister(req, res, next){
    res.status(200).json({
      message: 'ok'
    })
  }

  static userLogin(req, res, next){
    res.status(200).json({
      message: 'ok'
    })
  }

  static userGoogleLogin(req, res, next){
    res.status(200).json({
      message: 'ok'
    })
  }
}

module.exports = UserController