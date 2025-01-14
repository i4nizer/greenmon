const express = require('express')
const router = express.Router({ mergeParams: true })


router.route('/')
    .get()
    .post()
    .patch()
    .delete()



module.exports = router