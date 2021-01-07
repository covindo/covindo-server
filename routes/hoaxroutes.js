const router = require('express').Router()
const { HoaxController } = require('../controllers/HoaxController')

router.get('/hoaxes', HoaxController.getHoaxes)

module.exports = router