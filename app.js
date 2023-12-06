const express = require("express");
const router = require("./router/userRouter")
const port = 4000;
const mongoose = require("mongoose")
const app = express();
app.use(express.json())
app.use(router)



mongoose.connect("mongodb+srv://viviannzemeke:i10yCgMhrdGkvGAT@cluster0.hreycm6.mongodb.net/").then(()=>{
    console.log(`database is successful`)
}).catch((err)=> {
    console.log(`unable to connect to database ${err}`)
})




app.listen(port, ()=>{
    console.log(`server is listening on port ${port}`)
})