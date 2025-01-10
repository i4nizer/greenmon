const nodemailer = require('nodemailer')
const config = require('../config/config')


// Transporter Settings
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: config.emailUser,
        pass: config.emailPassword
    }
})

// Send an email
const send = (to, subject, text, html = null) => {

    // Set options and msg
    const mailOpts = {
        from: config.emailUser,
        to, subject, text, html
    }

    // Send it
    transporter.sendMail(mailOpts, onSend)
}

// Handle errors
const onSend = (error, info) => {
    if (error) return console.log('Error sending email: ', error)
    console.log('Email sent: ', info.response)
}


/// templates

/**
 * 
 * @param {String} to Email of the recipient
 * @param {String} name Name of the recipient
 * @param {String} token Token to append in the confirmation link
 */
const sendConfirmationEmail = (to, name, token) => {
    const subject = 'Welcome to Greenmon! Please Confirm Your Email'
    const text = `Dear ${name},

Thank you for signing up for Greenmon! We're excited to have you on board.

To complete your registration and secure your account, please confirm your email by clicking the link below:

http://localhost:3000/email-confirmation/${token}

If you didn’t sign up for Greenmon, please ignore this email. This link will expire in 24 hours for security purposes.

If you have any questions, feel free to reach out to our support team at iansandoval264@gmail.com.

Best regards,
The Greenmon Team`
    send(to, subject, text)
}

/**
 * 
 * @param {String} to Email of the recipient
 * @param {String} name Name of the recipient
 */
const sendEmailConfirmed = (to, name) => {
    const subject = 'Your Greenmon Email is Confirmed!'
    const text = `Dear ${name},

Thank you for confirming your email! 🎉 Your Greenmon account is now fully activated.

You can now log in and start managing your greenhouse with smart automation and monitoring.

http://localhost:3000/sign-in

If you have any questions or need assistance, feel free to reach out to our support team at iansandoval264@gmail.com.

Welcome to Greenmon, and happy growing! 🌱

Best regards,
The Greenmon Team`
    send(to, subject, text)
}

/**
 * 
 * @param {String} to Email of the recipient
 * @param {String} name Name of the recipient
 * @param {String} token Token to append in the reset link
 */
const sendPasswordReset = (to, name, token) => {
    const subject = 'Reset Your Greenmon Password'
    const text = `Dear ${name},

We received a request to reset your password for your Greenmon account. If you made this request, please click the link below to set a new password:

Reset My Password: http://localhost:3000/reset-password/${token}

This link will expire in 30 minutes for security purposes. If you didn’t request this, you can safely ignore this email.

If you need any help, feel free to contact our support team at iansandoval264@gmail.com.

Best regards,
The Greenmon Team`
    send(to, subject, text)
}

const sendResetSuccess = (to, name) => {
    const subject = 'Your Greenmon Password Has Been Reset'
    const text = `Dear ${name},

Your password has been successfully reset. You can now log in to your Greenmon account using your new password.

Log in to Greenmon: http://localhost:3000/sign-in

If you didn’t reset your password, please contact our support team immediately at iansandoval264@gmail.com.

For security reasons, we recommend using a strong, unique password and enabling two-factor authentication if available.

Best regards,
The Greenmon Team`
    send(to, subject, text)
}



module.exports = {
    transporter, send, onSend,
    sendConfirmationEmail,
    sendEmailConfirmed,
    sendPasswordReset,
    sendResetSuccess
}