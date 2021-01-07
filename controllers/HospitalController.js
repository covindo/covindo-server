const axios = require('axios')

class HospitalController {
  static getAllHospitals(req, res, next){
    axios.get(`https://dekontaminasi.com/api/id/covid19/hospitals`)
      .then((el) => {
        res.status(200).json(el.data)
      })
      .catch(err => next(err))
  }
}

module.exports = HospitalController