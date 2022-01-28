const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const path = require('path');
const router = express.Router();

const req = require('express/lib/request');

app.use(bodyParser.json())
router.get("/home",(req,res)=>{
const x=path.join('BAJAJ EXPRESS/'+'index.html');
//console.log(path.join(__dirname+'index.html'));
res.sendFile(path.join(__dirname+'/express/index.html'));
})

router.post("/home",(req,res) => {
    console.log(req.body)
    res.send("success")

})




app.use('/', router);
app.listen(3000,()=>{
    console.log('Running at Port 3000');
});


//console.log('Running at Port 3000');