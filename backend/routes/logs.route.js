const express = require('express')
const router = express.Router({ mergeParams: true })


const { getLog } = require('../controllers/log.controller')

router.route('/')
    .get(getLog)



module.exports = router