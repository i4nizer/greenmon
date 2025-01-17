const mongoose = require('mongoose')


const thresholdSchema = new mongoose.Schema(
    {
        min: {
            type: Number,
            required: true
        },
        max: {
            type: Number,
            required: true
        },
        sensor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Sensor',
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


module.exports = mongoose.model('Threshold', thresholdSchema)