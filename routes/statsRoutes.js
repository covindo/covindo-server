const router = require('express').Router()
const StatsController = require('../controllers/StatsController')

router.get('/', StatsController.getIndonesiaStats)
router.get('/provinces', StatsController.getProvinceStats)
router.get('/provinces/:province', StatsController.getIndonesiaStatsByProvince)

module.exports = router