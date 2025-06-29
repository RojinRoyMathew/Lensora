const connect = require("./connect")
const express = require("express")
const cors = require("cors")
const posts = require("./postRoutes")
const users = require("./userRoutes")
const images = require("./imageRoutes"); // ✅
const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())
app.use("/uploads", express.static("uploads"));

app.use(posts)
app.use(users)
app.use(images); 


app.listen(PORT,() =>{
    connect.connetToServer()
    console.log(`sever is runing on port ${PORT}`)
})