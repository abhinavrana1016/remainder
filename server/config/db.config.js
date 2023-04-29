const mongoose = require('mongoose')
const mongodbUrl = process.env.MONGODB_URL;
console.log(mongodbUrl)
mongoose.connect(mongodbUrl)
const connection = mongoose.connection;
connection.on('connected',()=>{
    console.log("mongodb connected successsfully");
})
connection.on('error',(error)=>{
    console.log("error in mongodb connection",error)
})
module.exports =  mongoose
