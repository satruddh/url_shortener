const express = require('express')
const port =3000
const app = express()
const initConnection = require("./database/init")
const entities = require("./entities")

app.set("view engine",'ejs')

//Logger Middleware
app.use((req,res,next)=>{
    console.log("Request made for : ",req.method," ",req.url)
    next()
})

app.use(express.static("./public"))
app.use(express.urlencoded({extended:true}))

initConnection().then(()=>{
    console.log("Databse connected")
    entities(app)
    app.listen(port,()=>{
        console.log(`App listening at port ${port}`)
    })
})
.catch((err)=>{
    console.log("Error Occured")
    console.log(err)
    res.render("home",{
        err : "Can't Connect to Server",
        allUrls : []
    })
})