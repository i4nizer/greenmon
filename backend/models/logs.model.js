const mongoose = require('mongoose')


const logsSchema = new mongoose.Schema(
    {
        type: {
            type: String,       // Info, Warning, Error, Alert
            enum: ['Info', 'Warning', 'Error', 'Alert'],
            required: true,
        },
        message: {
            type: String,       // Celcius
            required: true
        },
        source: {
            type: String,       // Sensor, System
            required: true
        },
        viewed: {
            type: Boolean,
            default: false
        },
        greenhouse: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Greenhouse'
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


module.exports = mongoose.model('Logs', logsSchema)