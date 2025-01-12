const userModel = require('../models/user.model')
const mailer = require('../services/mailer')
const crypto = require('crypto')
const config = require('../config/config')
const jwt = require('jsonwebtoken')


/** Handles token rotation post request. */
const postToken = async (req, res) => {
    // decode token
    const { refreshToken } = req.body
    let token = null
    try { token = jwt.verify(refreshToken, config.refreshKey) }
    catch { return res.status(400).send({ text: 'Token provided is invalid or expired.' }) }
    const { email } = token

    // find user
    const userDoc = await userModel.findOne({ email })
    if (!userDoc) return res.status(404).send({ text: 'No user found with that email.' })
    if (!userDoc.verified) return res.status(401).send({ text: 'User email is not yet verified.' })
    
    // create new tokens
    const AToken = jwt.sign({ email }, config.accessKey, { expiresIn: 60 * 15 })  // expires in 15mins
    const RToken = jwt.sign({ email }, config.refreshKey, { expiresIn: '7d' })
    
    // save user token
    userDoc.refreshToken = RToken
    await userDoc.save()

    // respond ok with tokens
    res.send({ text: 'Token rotated successfully.', object: { accessToken: AToken, refreshToken: RToken } })
}

/** Handles sign up post request. */
const postSignUp = async (req, res) => {
    // hash password
    const { name, email, password } = req.body
    const hashedPassword = crypto.createHash('sha256').update(password).digest('hex')

    // create user
    const user = { name, email, password: hashedPassword }
    const userDoc = new userModel(user)
    await userDoc.save()

    // send an email confirmation
    const emailToken = jwt.sign({ name, email }, config.emailKey)
    mailer.sendConfirmationEmail(email, name, emailToken)

    // save email token
    userDoc.emailToken = emailToken
    await userDoc.save()
    
    // respond ok
    res.status(200).send({ text: 'User signed up successfully.' })
}

/** Handles email confirmation post request. */
const postEmailConfirmation = async (req, res) => {
    // decode token
    const { emailToken } = req.body
    let token = null
    try { token = jwt.verify(emailToken, config.emailKey) }
    catch { return res.status(400).send({ text: 'Failed to confirm email, invalid email token provided.' }) }
    const { name, email } = token

    // find user
    const userDoc = await userModel.findOne({ email })
    if (!userDoc) return res.status(404).send({ text: 'Failed to confirm email, no signed up user found with that email.' })
    
    // verify user
    userDoc.verified = true
    userDoc.emailToken = null
    await userDoc.save()

    // send email confirmed
    mailer.sendEmailConfirmed(email, name)

    // respond ok
    res.status(200).send({ text: 'User email confirmed successfully.' })
}

/** Handles email confirmation post request. */
const postResendEmailConfirmation = async (req, res) => {
    // find user
    const { email } = req.body
    const userDoc = await userModel.findOne({ email })
    if (!userDoc) return res.status(404).send({ text: 'Failed to confirm email, no signed up user found with that email.' })
    
    // send email confirmation again
    mailer.sendConfirmationEmail(email, userDoc.name, userDoc.emailToken)

    // respond ok
    res.status(200).send({ text: 'User emailed successfully.' })
}

/** Handles sign in post request. */
const postSignIn = async (req, res) => {
    // hash password
    const { email, password } = req.body
    const hashedPassword = crypto.createHash('sha256').update(password).digest('hex')

    // find user
    const userDoc = await userModel.findOne({ email })
    if (!userDoc) return res.status(404).send({ text: 'No user found with that email.' })
    if (!userDoc.verified) return res.status(401).send({ text: 'User email is not yet verified.' })
    if (userDoc.password != hashedPassword) return res.status(403).send({ text: 'Incorrect password.' })

    // sign in user
    const accessToken = jwt.sign({ id: userDoc._id, email }, config.accessKey, { expiresIn: 60 * 15 })  // expires in 15mins
    const refreshToken = jwt.sign({ id: userDoc._id, email }, config.refreshKey, { expiresIn: '7d' })
    userDoc.refreshToken = refreshToken
    await userDoc.save()
    
    // respond ok with tokens
    res.status(200).send({ text: 'User signed in successfully.', object: { accessToken, refreshToken } })
}

/** Handles sign out post request. */
const postSignOut = async (req, res) => {
    // decode token
    const { refreshToken } = req.body
    let token = null
    try { token = jwt.verify(refreshToken, config.refreshKey) }
    catch { return res.status(400).send({ text: 'Invalid or expired token provided.' }) }   // note: refreshToken stays in db even if it is expired
    const { email } = token

    // find user
    const userDoc = await userModel.findOne({ email, refreshToken })
    if (!userDoc) return res.status(404).send({ text: 'No user found with that refreshToken.' })
    if (!userDoc.verified) return res.status(401).send({ text: 'User email is not yet verified.' })
    
    // sign out user
    userDoc.refreshToken = null
    await userDoc.save()

    // respond ok
    res.status(200).send({ text: 'User signed out successfully.' })
}

/** Handles forgot passowrd post request. */
const postForgotPassword = async (req, res) => {
    // get email
    const { email } = req.body

    // find user
    const userDoc = await userModel.findOne({ email })
    if (!userDoc) return res.status(404).send({ text: 'No user found with that email.' })
    if (!userDoc.verified) return res.status(401).send({ text: 'User email is not yet verified.' })

    // send forgot password email with passwordToken
    const token = jwt.sign({ email }, config.passwordKey)
    mailer.sendPasswordReset(email, userDoc.name, token)

    // save passwordToken
    userDoc.passwordToken = token
    await userDoc.save()

    // respond ok
    res.status(200).send({ text: 'Forgot password request sent to the user successfully.' })
}

/** Handles forgot passowrd post request. */
const postResendForgotPassword = async (req, res) => {
    // get email
    const { email } = req.body

    // find user
    const userDoc = await userModel.findOne({ email })
    if (!userDoc) return res.status(404).send({ text: 'No user found with that email.' })
    else if (!userDoc.verified) return res.status(401).send({ text: 'User email is not yet verified.' })
    else if (!userDoc.passwordToken) return res.status(400).send({ text: 'User has not yet requested password reset.' })

    // send forgot password email with existing passwordToken
    mailer.sendPasswordReset(email, userDoc.name, userDoc.passwordToken)

    // respond ok
    res.status(200).send({ text: 'Forgot password request sent to the user successfully.' })
}

/** Handles reset password post request. */
const postResetPassword = async (req, res) => {
    // decode token
    const { passwordToken, password } = req.body
    let token = null
    try { token = jwt.verify(passwordToken, config.passwordKey) }
    catch { return res.status(400).send({ text: 'Password reset token invalid or expired.' }) }
    const { email } = token

    // hash password
    const hashedPassword = crypto.createHash('sha256').update(password).digest('hex')

    // find user
    const userDoc = await userModel.findOne({ email })
    if (userDoc.password == hashedPassword) return res.status(400).send({ text: 'New password cannot be the old password.' })
    if (!userDoc) return res.status(404).send({ text: 'No user found with that email.' })
    if (!userDoc.verified) return res.status(401).send({ text: 'User email is not yet verified.' })
    
    // change user password
    userDoc.password = hashedPassword
    await userDoc.save()

    // respond ok
    res.status(200).send({ text: 'Password have been changed successfully.' })
}



module.exports = {
    postToken,
    postSignUp,
    postSignIn,
    postEmailConfirmation,
    postResendEmailConfirmation,
    postSignOut,
    postForgotPassword,
    postResendForgotPassword,
    postResetPassword,
}