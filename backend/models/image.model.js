const mongoose = require('mongoose');


const imageSchema = new mongoose.Schema(
    {
        url: {  
            type: String,   // url path from the server
            required: true
        },
        deficiency: {
            type: String,
            enum: ['Nitrogen', 'Phosphorus', 'Potassium', 'Healthy'],
            default: 'Healthy'
        },
        confidence: {       // AI confidence score
            type: Number,
            default: 0
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
        timestamps: true    // Date created is the date processed
    }
);


module.exports = mongoose.model('Image', imageSchema);
