const path = require("path");


const filePath = "Users/Akash/Desktop/node-js-practice/intro/app.js";

console.log("base name:",path.basename(filePath));
console.log("directory name", path.dirname(filePath));
console.log("extension name",path.extname(filePath));


//test.txt  path
console.log('joinedPath',__dirname+'\\test.txt');
