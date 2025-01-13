const greenhouseModel = require('../models/greenhouse.model')



/** Get all greenhouse of user by id */
const getGreenhouse = async (req, res) => {
    const { id } = req.accessToken
    const { greenhouseId } = req.params
    
    const greenhouseDocs = greenhouseId ? (await greenhouseModel.findOne({ _id: greenhouseId, user: id, deleted: false })) || []
        : await greenhouseModel.find({ user: id, deleted: false })
    
    res.send({ text: '', object: Array.isArray(greenhouseDocs) ? greenhouseDocs : [greenhouseDocs] })
}

/** Create new greenhouse for the user */
const postGreenhouse = async (req, res) => {
    const { id } = req.accessToken
    const { name, location } = req.body

    const greenhouseDoc = new greenhouseModel({ name, location, user: id })
    await greenhouseDoc.save()

    res.send({ text: 'Greenhouse created successfully.', object: greenhouseDoc })
}

/** Updates greenhouse details of the user */
const patchGreenhouse = async (req, res) => {
    const { id } = req.accessToken
    const { id: gid, name = '', location = '' } = req.body

    if (!gid) return res.status(400).send({ text: 'Greenhouse id required.' })
    
    const greenhouseDoc = await greenhouseModel.findOne({ _id: gid, user: id, deleted: false })
    if (!greenhouseDoc) return res.status(404).send({ text: 'Greenhouse not found.' })
    
    greenhouseDoc.name = name
    greenhouseDoc.location = location
    greenhouseDoc.save()

    return res.send({ text: 'Greenhouse details updated successfully.' })
}

/** Soft deletes the greenhouse */
const deleteGreenhouse = async (req, res) => {
    const { id } = req.accessToken
    const { id: gid } = req.body

    const greenhouseDoc = await greenhouseModel.findOneAndUpdate({ _id: gid, user: id, deleted: false }, { deleted: true }, { new: true })
    if (!greenhouseDoc) return res.status(404).send({ text: 'Greenhouse not found.' })
    
    res.send({ text: 'Greenhouse deleted successfully.' })
}



module.exports = { getGreenhouse, postGreenhouse, patchGreenhouse, deleteGreenhouse }