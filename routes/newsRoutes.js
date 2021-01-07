const router = require('express').Router()
const NewsController = require('../controllers/NewsController')

router.get('/news', NewsController.getAllNews)

module.exports = router