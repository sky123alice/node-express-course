// // const _ = require('lodash')
// // const items = [1,[2,[3,[4]]]]
// // const newItems = _.flattenDeep(items);
// // console.log(newItems)
// // console.log('hello world')

// // setInterval()

// const http = require('http');


// const server = http.createServer((req,res)=>{
// if(req.url === '/'){
//     res.end('Home page')
// }

// if(req.url === '/about'){
//     //Blocking code
//     for(let i=0; i<1000; i++){
//         for(let j=0; j<1000;j++){
//             console.log(`{i} ${j}`)
//         }
//     }
//     res.end('About page')
// }

//     res.end('Error page')

// })

// server.listen(5000,()=>{
//     console.log('Server is listening on port 5000...')
// })

const{readFile, writeFile} = require('fs').promises
// const util = require('util');
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)


const start = async() =>{
    try{
        const first = await readFile('./first.txt', 'utf8')
        const second = await readFile('./second.txt', 'utf8')
        await writeFile('./result-mind-grenade.txt/',
        `THIS IS AWESOME: ${first} ${second}`,{flag: 'a'}
        )
        console.log(first, second)
    }catch(error){
        console.log(error)
    }

}

start()



// const getText = (path) =>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8',(err,data)=>{
//             if(err){
//                 reject(err)
//             }else{
//                 resolve(data)
//             }
//         })

//     })
// }
// getText('./first.txt')
//     .then((result) => console.log(result))
//     .catch((err )=> console.log(err))