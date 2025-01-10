const express = require('express')

const cors = require('cors')
const config = require('./config/config')
const router = require('./routes/router')
const database = require('./config/database')


// Initialize Express app
const app = express()

// Use middlewares
app.use(cors({ origin: ['*', config.frontendDomain], credentials: true }))
app.use('/', router)


// Start the server
app.listen(config.port, () => console.log(`Server running on https://localhost:${config.port}.`))

// Connect database
database
    .connectDatabase()
    .then(() => console.log('Database connected successfully.'))
    .catch((err) => console.error(err))