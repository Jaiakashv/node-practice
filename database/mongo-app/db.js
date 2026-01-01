const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://jaiakashv_db_user:SqVV2ljcPBRXUsFp@cluster0.esfuela.mongodb.net/userdb?appName=Cluster0')
.then(()=>{
    console.log("DB connected");
})
.catch((err)=>{
    console.log("db connection failed",err)
})