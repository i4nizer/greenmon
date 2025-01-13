const mongoose = require('mongoose')


const imageSchema = new mongoose.Schema(
    {
        path: {
            type: String,
            required: true
        },
        sensor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Sensor',
            required: true
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


module.exports = mongoose.model('Image', imageSchema)