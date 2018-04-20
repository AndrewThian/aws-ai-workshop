const AWS = require('aws-sdk')
const rekognition = new AWS.Rekognition({ region: "us-east-1" })

module.exports = rekognition