const router = require('express').Router()
const { HoaxController } = require('../controllers/hoaxController')

router.get('/hoaxes', HoaxController.getHoaxes)

module.exports = router