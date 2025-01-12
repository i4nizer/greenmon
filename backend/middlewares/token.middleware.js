const jwt = require('jsonwebtoken')
const config = require('../config/config')


/** Requires accessToken in Authorization headers, adds req.accessToken */
const checkAccessToken = (req, res, next) => {
    try {
        const token = req.headers['authorization']?.split(' ')[1]
        if (!token) return res.status(403).send('No access token provided')
        
        const payload = jwt.verify(token, config.accessKey)
        req.accessToken = payload
        next()
    } catch (error) { res.status(401).send(error.toString()) }
}

/** Requires refreshToken in request body */
const checkRefreshToken = (req, res, next) => {
    try {
        const token = req?.body.refreshToken
        if (!token) return res.status(403).send('No refresh token provided')
        
        jwt.verify(token, config.refreshKey)
        next()
    } catch (error) { res.status(403).send(error.toString()) }
}


module.exports = { checkAccessToken, checkRefreshToken }