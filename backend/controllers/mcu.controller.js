const mcuModel = require('../models/mcu.model')



/** Get all mcu of a greenhouse */
const getMcu = async (req, res) => {
    const { greenhouseId } = req.params

    const mcuDocs = await mcuModel.find({ greenhouse: greenhouseId, deleted: false })

    res.send({ text: '', object: mcuDocs })
}

/** Creates new mcu for a greenhouse */
const postMcu = async (req, res) => {
    const { name, greenhouseId } = req.body

    const mcuDoc = new mcuModel({ name, greenhouse: greenhouseId })
    mcuDoc.save()

    res.send({ text: 'Mcu created successfully.', object: mcuDoc })
}

/** Updates mcu details */
const patchMcu = async (req, res) => {
    const { id = null, name = '' } = req.body

    if (!id) return res.status(400).send({ text: 'Mcu id required.' })
    
    const mcuDoc = await mcuModel.findOne({ _id: id, deleted: false })
    if (!mcuDoc) return res.status(404).send({ text: 'Mcu not found.' })
    
    mcuDoc.name = name
    mcuDoc.save()

    res.send({ text: 'Mcu details updated successfully.' })
}

/** Soft deletes mcu */
const deleteMcu = async (req, res) => {
    const { id } = req.body

    const mcuDoc = await mcuModel.findOneAndUpdate({ _id: id, deleted: false }, { deleted: true })
    if (!mcuDoc) return res.status(404).send({ text: 'Mcu not found.' })
    
    res.send({ text: 'Mcu deleted successfully.' })
}



module.exports = { getMcu, postMcu, patchMcu, deleteMcu }