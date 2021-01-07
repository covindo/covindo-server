const axios = require('axios')

class NewsController {
  static getAllNews(req, res, next){
    axios.get(`https://newsapi.org/v2/top-headlines?q=covid&country=id&category=health&apiKey=${process.env.NEWS_API_KEY}`)
      .then(el => {
        res.status(200).json(el.data)
      })
      .catch(err => {
        next(err)
      })
  }
}

module.exports = NewsController