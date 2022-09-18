const urlModel = require("../../../database/models/urls")

module.exports=(orgUrl,shrtUrl)=>{
    let url = {
        originalUrl : orgUrl,
        shortUrl : shrtUrl
    }

    return urlModel.create(url)
}