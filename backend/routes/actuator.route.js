const express = require('express')
const router = express.Router({ mergeParams: true })


const { getActuator, postActuator, patchActuator, deleteActuator } = require('../controllers/actuator.controller')

router.route('/')
    .get(getActuator)
    .post(postActuator)
    .patch(patchActuator)
    .delete(deleteActuator)



module.exports = router