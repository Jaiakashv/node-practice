const http = require('http');
const fs = require('fs')
//create server
const server = http.createServer((req,res)=>{
    if(req.url == "/"){
    res.writeHead(200,{"content-type":"text/plain"});
    res.end("home page");
    }
    else if(req.url == "/about"){
    res.writeHead(200,{"content-type":"text/plain"});
    res.end("about page");
    }
    else if(req.url == "/file"){
    const readStream = fs.createReadStream('./sample.mp4')
    res.writeHead(200,{"content-type":"video/mp4"});
    // res.end("about page");
    readStream.pipe(res);
    }
    else{
    res.writeHead(404,{"content-type":"text/plain"});
    res.end("404 page not found");
    }
    
});

server.listen(5000,()=>{
    console.log("server listening http://localhost:5000")
});
