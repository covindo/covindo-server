const axios = require('axios')

class StatsController {
  static getProvinceStats(req, res, next){
    axios.get('https://api.kawalcorona.com/indonesia/provinsi')
      .then(el => {
        res.status(200).json(el.data)
      })
      .catch(err => {
        next(err)
      })
  }
  static getIndonesiaStats(req, res, next){
    axios.get('https://api.kawalcorona.com/indonesia')
      .then(el => {
        res.status(200).json(el.data)
      })
      .catch(err => {
        next(err)
      })
  }
}

module.exports = StatsController