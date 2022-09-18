const express = require("express")
const actionController = require("../controller/actionController")

const router = express.Router()

router.route("/:url").get(actionController.getReq)

router.route("/").get(actionController.getHome)
.post(actionController.postReq)

router.route("/remove/:url").get(actionController.removeRequest)

module.exports = router