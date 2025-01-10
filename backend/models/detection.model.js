const mongoose = require('mongoose');


const detectionSchema = new mongoose.Schema(
    {
        class: {
            type: String,
            required: true
        },
        confidence: {       // AI confidence score
            type: Number,
            default: 0
        },
        data: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Data',
            required: true
        },
        model: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Model',
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


module.exports = mongoose.model('Detection', detectionSchema);
