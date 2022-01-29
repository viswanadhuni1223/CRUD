const express= require('express')
const app=express()
const bodyparser=require("body-parser")
app.use(bodyparser.json())
const signup=require("./routes/createUser.js")
const del =require ("./routes/delete.js")
const find =require("./route/findUser.js")
const signIn = require("./routes/signInUser")
const update =require("./routes/updateUser")
app.use("/",signIn)
app.use("/",find)
app.use("/",signup)
app.use("/",del)
app.use("/",update)
app.listen(3000,()=>{console.log('server started')})