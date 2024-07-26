const express = require("express")
const app = express();
const connectDB = require("./connect")

const product_routes = require("./routes/product")


const PORT = process.env.PORT || 5000;

app.get("/",(req,res)=>{
    res.send("hi i am live")
})

app.use("/api/products",product_routes)

const start = async()=>{
     await connectDB;
       try {
           app.listen(PORT,()=>{
           console.log( `${PORT} YES I AM CONNECTED`   )        })
       } catch (error) {
        console.log(error)
        
       }
}

start()