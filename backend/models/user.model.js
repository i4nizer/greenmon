const mongoose = require('mongoose')


const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        verified: {
            type: Boolean,
            default: false
        },
        role: {
            type: String,
            enum: ['User', 'Admin'],
            default: 'User'
        },
        refreshToken: {
            type: String,
            default: null
        },
        emailToken: {
            type: String,
            default: null
        },
        passwordToken: {
            type: String,
            default: null
        },
        deleted: {
            type: Boolean,
            default: false
        },
    },
    {
        timestamps: true
    }
)


module.exports = mongoose.model('User', userSchema)