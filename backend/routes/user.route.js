const express = require('express')
const router = express.Router()

const { checkAccessToken } = require('../middlewares/token.middleware')

const {
    postToken, postSignUp,
    postSignIn, postSignOut,
    postResetPassword,
    postForgotPassword,
    postEmailConfirmation,
    postResendForgotPassword,
    postResendEmailConfirmation
} = require('../controllers/user.controller')

const greenhouseRoutes = require('./greenhouse.route')


router.post('/token', postToken)
router.post('/sign-up', postSignUp)
router.post('/sign-in', postSignIn)
router.post('/sign-out', postSignOut)
router.post('/reset-password', postResetPassword)
router.post('/forgot-password', postForgotPassword)
router.post('/email-confirmation', postEmailConfirmation)
router.post('/resend-forgot-password', postResendForgotPassword)
router.post('/resend-email-confirmation', postResendEmailConfirmation)

router.use('/greenhouse', checkAccessToken, greenhouseRoutes)



module.exports = router