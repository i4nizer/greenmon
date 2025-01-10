const mongoose = require('mongoose')


const mcuSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
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


module.exports = mongoose.model('Mcu', mcuSchema)