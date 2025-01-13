const mongoose = require('mongoose');


const numericalSchema = new mongoose.Schema(
    {
        type: {
            type: String,   // e.g., 'Temperature', 'Humidity', 'Soil Moisture'
            required: true,
        },
        unit: {
            type: String,   // e.g., '°C', '%', 'lux'
            required: true
        },
        value: {
            type: Number,   // number, null
            default: null,
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
);


module.exports = mongoose.model('Numerical', numericalSchema);
