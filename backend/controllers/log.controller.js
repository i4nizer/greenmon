const logModel = require('../models/logs.model')



const getLog = async (req, res) => { 
    const { greenhouseId } = req.params

    const logDocs = await logModel.find({ greenhouse: greenhouseId, deleted: false })

    res.send({ text: '', object: logDocs })
}



module.exports = { getLog }