const mongoose = require('mongoose');


const dataSchema = new mongoose.Schema(
    {
        type: {
            type: String, // e.g., 'Temperature', 'Humidity', 'Soil Moisture'
            required: true,
        },
        unit: {
            type: String, // e.g., '°C', '%', 'lux'
            required: true
        },
        value: {
            type: Number, // number
            required: true
        },
        sensorId: {
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


module.exports = mongoose.model('Data', dataSchema);
