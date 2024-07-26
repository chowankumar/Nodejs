const mongoose = require("mongoose");

url = "mongodb+srv://chowan:chowan54@cluster0.rcsmaaf.mongodb.net/"


const connectDB = ()=>{
    return mongoose.connect(url,{
        useNewUrlParser : true,
        useUnifiedTopology: true
    })
}


module.exports = connectDB;