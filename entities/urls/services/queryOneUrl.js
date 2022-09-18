const urlModel = require("../../../database/models/urls")

module.exports = (filter)=>{
    return urlModel.findOne(filter)
}