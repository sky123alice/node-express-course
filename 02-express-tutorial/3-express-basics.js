const express = require('express')
const app = express()
const path = require('path')

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
})

app.all('*',(req,res)=>{
    res.status(404).send('resource not found')
})

app.listen(5000,()=>{
    console.log('server is listening on port 5000')
})