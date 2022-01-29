const express = require('express')
const router = express.Router()
const User =require("../models/userModel.js")
router.post("/signup",(req,res) =>{
    console.log(req.body)
    res.send("test")
})
module.exports =router