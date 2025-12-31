const http = require('http');
//create server
const server = http.createServer((req,res)=>{
    // res.writeHead(200,{"content-type":"text/plain"});//to define data type 
    // res.end("hello server");
    res.writeHead(200,{"content-type":"application/json"});
    res.end(`{"name":"akash"}`);
});

server.listen(5000,()=>{
    console.log("server listening http://localhost:5000")
});
