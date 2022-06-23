const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('reponse',(name,id)=>{
    console.log(`data recieved user  ${name} with id:${id}`)
}) 

customEmitter.on('reponse',()=>{
    console.log(`some other logic here`)
}) 


customEmitter.emit('response', 'john',34)
