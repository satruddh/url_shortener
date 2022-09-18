const addURL = require("../services/addShortenedUrl")
const shortener = require("shortener-url")
const queryUrl = require("../services/queryUrl")
const queryOneURL = require("../services/queryOneUrl")
const removeURL = require("../services/removeURL")


module.exports.postReq = async (req, res) => {
    try {
        const originalUrl = req.body.originalURL
        console.log("Original url ", originalUrl)
        const shortUrl = await shortener.short(originalUrl)
        let url = await addURL(originalUrl, shortUrl)
        console.log(url)
        res.redirect("/")
    }
    catch (err) {
        console.log(err)
        res.render("home", {
            err: "Some internal error occured",
            allUrls: []
        })
    }
}

module.exports.getReq = async (req, res) => {
    let url = req.params.url
    if (!url)
        res.redirect("/")
    try {
        let URL = await queryOneURL({ shortUrl: url })
        res.redirect(URL.originalUrl)
    }
    catch (err) {
        console.log(err)
        res.render("home",{
            err : err,
            allUrls : []
        })
    }
}

module.exports.getHome = async (req, res) => {
    try{
        let allUrls = await queryUrl()
        console.log(allUrls)
        res.render("home", {
            err: "",
            allUrls: allUrls
        })
    }
    catch(err){
        console.log(err)
        res.render("home",{
            err : err,
            allUrls : []
        })
    }
}

module.exports.removeRequest= async (req,res)=>{
    try{
        let url = req.params.url
        let obj = await removeURL(url)
        console.log(obj)
        res.redirect("/")
    }
    catch(err){
        res.render("home",{
            err : "Some Internal Server Error Occured",
            allUrls : []
        })
        console.log(err)

    }
}