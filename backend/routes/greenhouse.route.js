const express = require('express')
const router = express.Router()


const { getGreenhouse, postGreenhouse, patchGreenhouse, deleteGreenhouse } = require('../controllers/greenhouse.controller')

router.route('/')
    .get(getGreenhouse)
    .post(postGreenhouse)
    .patch(patchGreenhouse)
    .delete(deleteGreenhouse)


    
module.exports = router