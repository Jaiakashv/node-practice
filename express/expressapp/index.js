const express = require('express');
const app = express();

app.use((req,res,next)=>{ //middleware to make the get and post works simutanously
    console.log("Request Url",req.url);
    next();
})

app.get("/",(req,res)=>{
    res.status(200).send("hello express app")
})

app.post("/",(req,res)=>{
    res.status(200).send("hello express app this is post method")
})  //this only works in post req , this only visible in postman


app.use((req,res,next)=>{ //if any page doesnt match then it returns 404 
    res.status(404).send("404 page not found")
})

app.listen(5000,()=>{
    console.log("server listening on port 5000")
})


