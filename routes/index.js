const router = require('express').Router()
const hospitalRoutes = require('./hospitalRoutes')
const newsRoutes = require('./newsRoutes')
const statsRoutes = require('./statsRoutes')
const userRoutes = require('./userRoutes')
const { authenticate } = require('../middlewares/auth')

router.use(userRoutes)
router.use(authenticate)
router.use(hospitalRoutes)
router.use(newsRoutes)
router.use('/stats',statsRoutes)

module.exports = router