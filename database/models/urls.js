const mongoose = require("mongoose")

const urlSchema = new mongoose.Schema({
    originalUrl: {
        type : String,
        unique : true,
        required : true
    },
    shortUrl : {
        type : String,
        unique : true,
        required : true
    }
})

const urlModel = mongoose.model('url',urlSchema)

module.exports = urlModel