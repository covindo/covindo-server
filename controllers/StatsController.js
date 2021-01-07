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
  static getIndonesiaStatsByProvince(req, res, next){
    const { province } = req.params
    let byProvince = []
    axios.get('https://api.kawalcorona.com/indonesia/provinsi')
      .then(el => {
        el.data.forEach(el => {
          if(el.attributes.Provinsi === province){
            byProvince.push(el)
          }
        })
        res.status(200).json(byProvince)
      })
      .catch(err => {
        next(err)
      })
  }
}

module.exports = StatsController