fs = require('fs').promises


const makeFile = async() =>{
    try{
        await fs.writeFile('./practice2.txt',
        'This is the first line.\n')
        for(let i=0; i < 10; i++){
            await fs.writeFile('./practice2.txt',`This is line ${i}\n`,{flag: 'a'})
        }
      
    }catch(error){
        console.log(error)
    }

}

makeFile()