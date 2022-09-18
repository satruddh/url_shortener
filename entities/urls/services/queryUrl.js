const urlModel = require("../../../database/models/urls")

module.exports = ()=>{
    return urlModel.find({})
}