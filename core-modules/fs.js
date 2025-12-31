const fs = require("fs")


//write file(synchronous)
fs.writeFileSync("test2.txt","hello node.js 2025");
console.log("file written");

//read file(synchronous)
const data = fs.readFileSync("test.txt",{encoding:"utf-8"});
console.log("read synchonously", data);

