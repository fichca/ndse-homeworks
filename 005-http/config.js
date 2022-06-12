require('dotenv').config()
const config = {
    myAPIKey: process.env.MY_API_KEY || "default"
}
module.exports = config;