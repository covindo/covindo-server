const router = require('express').Router()
const HospitalController = require('../controllers/HospitalController')

router.get('/hospitals', HospitalController.getAllHospitals)

module.exports = router