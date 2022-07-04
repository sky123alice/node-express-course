const sentence = require('./practice2.js')
const os = require('os')
const fs = require('fs')

console.log(sentence)

fs.writeFile('./practice.txt',`${sentence.sentence} ${os.userInfo().username}`,
        (err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            
        })