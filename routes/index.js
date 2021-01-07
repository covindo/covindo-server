const router = require('express').Router()
const hospitalRoutes = require('./hospitalRoutes')
const newsRoutes = require('./newsRoutes')
const statsRoutes = require('./statsRoutes')
const userRoutes = require('./userRoutes')

router.use(userRoutes)
// router.use(statsRoutes)
// router.use(hospitalRoutes)
// router.use(newsRoutes)

module.exports = router