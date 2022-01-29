const express = require('express')
const router = express.Router()
const User =require("../models/userModel.js")
router.post("/signup",async (req,res) =>{
    const data = req.body

    try{

    const user1 = new User({
        email:data.email,
        password:data.password,
        mobile:data.mobile,
        area:data.area,
        pincode:data.pincode,
       
        address:data.area+data.pincode+data.country,
        country:data.country,
    })
    await user1.save().then(()=>res.send("user added successfully"))}
    catch(error){
        console.log(error)
    }

    /*user1.save( (err,data)=>{
        if(err){
          res.send(err)
        }
        else{
            res.send("user added successfully")
        }
        })*/

})
module.exports =router