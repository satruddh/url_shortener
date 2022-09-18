const urlRoute = require("./urls/routes")

module.exports = (app)=>{
    app.use("/",urlRoute)
}