const mongoose = require('mongoose')
const { connectionString } = require('./config')


const connectDatabase = async () => await mongoose.connect(connectionString)


module.exports = { connectDatabase, connection: mongoose.connection }
