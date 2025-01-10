const mongoose = require('mongoose');


const modelSchema = new mongoose.Schema(
    {
        type: {
            type: String,       // CNN, ...
            required: true,
        },
        classes: {
            type: Array,
            required: true,
        },
        url: {
            type: String,
            required: true,
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


module.exports = mongoose.model('Model', modelSchema);
