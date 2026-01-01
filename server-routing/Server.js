const http = require('http');
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
    else{
    res.writeHead(404,{"content-type":"text/plain"});
    res.end("404 page not found");
    }
    
});

server.listen(5000,()=>{
    console.log("server listening http://localhost:5000")
});
