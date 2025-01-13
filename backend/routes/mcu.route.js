const express = require('express')
const router = express.Router({ mergeParams: true })


const { getMcu, postMcu, patchMcu, deleteMcu } = require('../controllers/mcu.controller')

const sensorRoutes = require('./sensor.route')

router.route('/')
    .get(getMcu)
    .post(postMcu)
    .patch(patchMcu)
    .delete(deleteMcu)

router.use('/:mcuId/sensor', sensorRoutes)



module.exports = router