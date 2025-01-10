require('dotenv').config()



const config = {
    port: process.env.PORT,
    frontendDomain: process.env.FRONTEND_DOMAIN,
    connectionString: process.env.CONNECTION_STRING,
    
    emailUser: process.env.EMAIL_USER,
    emailPassword: process.env.EMAIL_PASSWORD,

    emailKey: process.env.EMAIL_KEY,
    passwordKey: process.env.PASSWORD_KEY,

    accessKey: process.env.ACCESS_KEY,
    refreshKey: process.env.REFRESH_KEY,
}


module.exports = config