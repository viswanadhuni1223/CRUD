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
        enum :["node","MongoDb","express"],
        required:true
    }

  
})
const user1 = new User({
    email:"test123@gmail.com",
    userName:"test12",
    interest:["node"]
})
user1.save().then(() => console.log("User added successfully!!!"))