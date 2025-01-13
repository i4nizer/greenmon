const express = require('express')
const router = express.Router()



const { getSensor, postSensor, patchSensor, deleteSensor } = require('../controllers/sensor.controller')

router.route('/')
    .get(getSensor)
    .post(postSensor)
    .patch(patchSensor)
    .delete(deleteSensor)



module.exports = router