const fs = require("fs");

//write file(asynchronous)
fs.writeFile("asyncTest.txt","hello node.js async", (err)=>{
    if(err) throw err;
    console.log("file written complete");


    //read file(asynchronous)
     fs.readFile("asyncTest.txt",{encoding:"utf-8"},(err,data)=>{
        console.log("read file async",data)
    })
});

console.log("file written processing")


