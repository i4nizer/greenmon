const actuatorModel = require('../models/actuator.model')


/** Get all actuator by mcuId */
const getActuator = async (req, res) => {
    const { mcuId } = req.params

    const actuatorDocs = await actuatorModel.find({ mcu: mcuId, deleted: false })

    res.send({ object: actuatorDocs })
}

/** Create actuator for mcu */
const postActuator = async (req, res) => {
    const { mcuId } = req.params
    const { name, input } = req.body
    
    const actuatorDoc = new actuatorModel({ name, input, mcu: mcuId })
    await actuatorDoc.save()

    res.send({ text: 'Actuator created successfully.', object: actuatorDoc })
}

/** Update actuator details */
const patchActuator = async (req, res) => {
    const { id, name, input } = req.body
    
    const actuatorDoc = await actuatorModel.findOneAndUpdate({ _id: id, deleted: false }, { name, input }, { new: true })
    if (!actuatorDoc) return res.status(404).send({ text: 'Actuator not found.' })
    
    res.send({ text: 'Actuator updated successfully.' })
}

/** Soft delete the actuator */
const deleteActuator = async (req, res) => {
    const { id } = req.body

    const actuatorDoc = await actuatorModel.findOneAndUpdate({ _id: id, deleted: false }, { deleted: true }, { new: true })
    if (!actuatorDoc) return res.status(404).send({ text: 'Actuator not found.' })
    
    res.send({ text: 'Actuator deleted successfully.' })
}



module.exports = { getActuator, postActuator, patchActuator, deleteActuator }