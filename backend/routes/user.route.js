const express = require('express')
const router = express.Router()


const {
    postToken, postSignUp,
    postSignIn, postSignOut,
    postResetPassword,
    postForgotPassword,
    postEmailConfirmation,
    postResendForgotPassword,
    postResendEmailConfirmation
} = require('../controllers/user.controller')


router.post('/token', postToken)
router.post('/sign-up', postSignUp)
router.post('/sign-in', postSignIn)
router.post('/sign-out', postSignOut)
router.post('/reset-password', postResetPassword)
router.post('/forgot-password', postForgotPassword)
router.post('/email-confirmation', postEmailConfirmation)
router.post('/resend-forgot-password', postResendForgotPassword)
router.post('/resend-email-confirmation', postResendEmailConfirmation)


module.exports = router