const express = require('express');
const router = express.Router()
const {home, createuser, getall, getone, getusername, updateuser, deleteuser} = require("../controller/userController")

router.get("/", home)
router.post("/createuser", createuser)
router.get("/getall", getall)
router.get("/getone/:id", getone)
router.get("/getUsername/:username", getusername)
router.get("/update/:id", updateuser)
router.get("/delete/:id", deleteuser)

module.exports = router





