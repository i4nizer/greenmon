const mongoose = require('mongoose')


const thresholdSchema = new mongoose.Schema(
    {
        type: {
            type: String,       // Temperature, Humidity... // Image
            required: true,
        },
        unit: {
            type: String,       // Celcius  // jpeg, png
            required: true
        },
        value: {
            type: Number,       // number   // url, path
            required: null
        },
        condition: {            // <, =, >
            type: String,
            enum: ['<', '=', '>'],
            default: '='
        },
        action: {               // true == ON // false == OFF
            type: Boolean,
            default: true
        },
        sensor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Sensor',
            required: true
        },
        actuator: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Actuator'
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