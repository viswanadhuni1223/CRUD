const express=require('express')
const app=express()
app.set("view engine","jade")
app.get("/index",(req,res) =>{
    res.render("index",{name: "hi pavan "})
})

app.listen(3000,()=>{
console.log("connected to 3000")
})