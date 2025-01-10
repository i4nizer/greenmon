const mongoose = require('mongoose')


const greenhouseSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            default: null
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
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


module.exports = mongoose.model('Greenhouse', greenhouseSchema)