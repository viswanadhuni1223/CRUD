const express = require ('express')
const app=express()
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://nick1223:1223@cluster0.60qu2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true})
const User = mongoose.model("publications", {
    email:{
        type : String,
        unique:true,
        required:true

    },
    userName:{
        type:String,
        minLength:5,
        MaxLength:15
    },
    interest:{
        type:[String],
        
    }

  
})
const user1 = new User({
    author: "authorABC",
    password: "pass123",
    userName: "testauthor"
})
user1.save().then(() => console.log("User added successfully!!!"))