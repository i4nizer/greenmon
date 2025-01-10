const mongoose = require('mongoose');


const dataSchema = new mongoose.Schema(
    {
        type: {
            type: String,   // e.g., 'Temperature', 'Humidity', 'Soil Moisture', 'Image'
            required: true,
        },
        unit: {
            type: String,   // e.g., '°C', '%', 'lux', 'jpeg'
            required: true
        },
        value: {
            type: Number,   // number, null
            default: null,
        },
        url: {
            type: String,   // image path, null
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


module.exports = mongoose.model('Data', dataSchema);
