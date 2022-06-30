const express = require('express')
const app = express()
const path = require('path')

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./new-public/index.html'))
})

app.get('/sample',(req,res)=>{
    res.send("This is working")
})

app.listen(3000,()=>{
    console.log("Server is listening on 3000...")
})