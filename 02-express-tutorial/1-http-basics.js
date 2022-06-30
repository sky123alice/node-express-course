const http = require('http')
const {readFileSync, read} = require('fs')

//get all files
const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req,res) => {
    // console.log(req.method)
    // console.log(req.url)
    const url = req.url;
    console.log(url);

    if(url === '/'){//homepage
        res.writeHead(200, {'content-type':'text/html'})//head
        res.write(homePage)//body
        res.end()

    }else if(url === '/about'){//about page
        res.writeHead(200, {'content-type':'text/html'})//head
        res.write('<h1> about </h1>')//body
        res.end()

    }else if(url === '/styles.css'){//style
        res.writeHead(200, {'content-type':'text/css'})//head
        res.write(homeStyles)//body
        res.end()

    }
    else if(url === '/logo.svg'){//logo
        res.writeHead(200, {'content-type':'image/svg+xml'})//head
        res.write(homeImage)//body
        res.end()

    }
    else if(url === '/browser-app.js'){//javascript
        res.writeHead(200, {'content-type':'text/javascript'})//head
        res.write(homeLogic)//body
        res.end()

    }
    else{//404 error
        res.writeHead(404, {'content-type':'text/html'})//head
        res.write('<h1> 404 Page Not Found </h1>')//body
        res.end()
    }
    
}) 

server.listen(5000)
