const mongoose = require('mongoose')


const actionSchema = new mongoose.Schema(
    {
        input: {
            type: Number,       // 0-1 for Binary // 0-up for Number
            required: true,
        },
        actuator: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Actuator',
        },
        threshold: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Threshold',
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


module.exports = mongoose.model('Action', actionSchema)