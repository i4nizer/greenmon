const mongoose = require('mongoose')


const actuatorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        mcus: [       // Multiple MCUs can have access of this
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Mcu'
            }
        ],
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