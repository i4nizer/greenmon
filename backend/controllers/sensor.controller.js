const sensorModel = require('../models/sensor.model')



/** Get sensors by mcu id */
const getSensor = async (req, res) => {
    const { mcuId } = req.params

    const sensorDocs = await sensorModel.find({ mcu: mcuId, deleted: false })

    res.send({ object: sensorDocs })
}

/** Create a new sensor */
const postSensor = async (req, res) => {
    const { mcuId } = req.params
    const { name, output } = req.body

    const sensorDoc = new sensorModel({ name, output, mcu: mcuId })
    await sensorDoc.save()

    res.send({ text: 'Sensor created successfully.', object: sensorDoc })
}

/** Update the sensor's details */
const patchSensor = async (req, res) => {
    const { id, name, output } = req.body

    const sensorDoc = await sensorModel.findOneAndUpdate({ _id: id, deleted: false }, { name, output }, { new: true })
    if (!sensorDoc) return res.status(404).send({ text: 'Sensor not found.' })

    res.send({ text: 'Sensor updated successfully.' })
}

/** Soft delete the sensor */
const deleteSensor = async (req, res) => {
    const { id } = req.body

    const sensorDoc = await sensorModel.findOneAndUpdate({ _id: id, deleted: false }, { deleted: true }, { new: true })
    if (!sensorDoc) return res.status(404).send({ text: 'Sensor not found.' })

    res.send({ text: 'Sensor deleted successfully.' })
}



module.exports = { getSensor, postSensor, patchSensor, deleteSensor }