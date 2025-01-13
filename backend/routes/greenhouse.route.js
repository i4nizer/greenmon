const express = require('express')
const router = express.Router()


const { getGreenhouse, postGreenhouse, patchGreenhouse, deleteGreenhouse } = require('../controllers/greenhouse.controller')

const mcuRoutes = require('./mcu.route')
const logRoutes = require('./log.route')

router.route('/')
    .get(getGreenhouse)
    .post(postGreenhouse)
    .patch(patchGreenhouse)
    .delete(deleteGreenhouse)

router.get('/:greenhouseId', getGreenhouse)

router.use('/:greenhouseId/mcu', mcuRoutes)
router.use('/:greenhouseId/log', logRoutes)

    
module.exports = router