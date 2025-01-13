const mongoose = require('mongoose')


const actuatorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        input: {
            type: String,
            enum: ['Binary', 'Number']
        },
        mcu: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Mcu'
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


module.exports = mongoose.model('Actuator', actuatorSchema)