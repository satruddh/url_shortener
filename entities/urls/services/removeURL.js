const urlModel = require("../../../database/models/urls")

module.exports= (shrtUrl)=>{
    return urlModel.deleteOne({shortUrl : shrtUrl})
}