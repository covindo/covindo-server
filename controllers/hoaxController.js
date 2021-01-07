const axios = require('axios')

class HoaxController {
    static getHoaxes(req, res, next) {
        axios.get('https://dekontaminasi.com/api/id/covid19/hoaxes')
        .then(el => {
            res.status(200).json(el.data)
        })
        .catch(err => next(err))
    }
}

module.exports = { HoaxController }