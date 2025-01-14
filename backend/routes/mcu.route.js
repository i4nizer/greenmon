const express = require('express')
const router = express.Router({ mergeParams: true })


const { getMcu, postMcu, patchMcu, deleteMcu } = require('../controllers/mcu.controller')

const sensorRoutes = require('./sensor.route')
const actuatorRoutes = require('./actuator.route')

router.route('/')
    .get(getMcu)
    .post(postMcu)
    .patch(patchMcu)
    .delete(deleteMcu)

router.use('/:mcuId/sensor', sensorRoutes)
router.use('/:mcuId/actuator', actuatorRoutes)



module.exports = router