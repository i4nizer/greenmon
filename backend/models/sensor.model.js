const mongoose = require('mongoose')


const sensorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        output: {     // decides which model to use to store data
            type: String,
            enum: ['Number', 'Image'],
            default: 'Number'
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


module.exports = mongoose.model('Sensor', sensorSchema)