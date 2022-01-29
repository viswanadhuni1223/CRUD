const express = require ('express')
const app=express()
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://nick1223:1223@cluster0.60qu2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true})
const User = mongoose.model("customer", {
    email:{
        type : String,
        unique:true,
        required:true

    },
    password:{
        type:String,
        required :[true,"enter your password"]
    },
    mobile:{
        type :Number,
        required :[true,"enter your mobile number"],
        minLength:10,
        maxLength:10
    },
    country:{
        type:String,
        default:'Ind',
        required:true
    },
    area:String,
    pinocde:{
        type:Number,
        required:true
    },
    address:String

  
})
module.exports=User