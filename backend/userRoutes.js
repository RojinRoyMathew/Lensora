const express = require("express")
const database = require("./connect")
const ObjectId = require("mongodb").ObjectId
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config({path:"./config.env"})

let userRoutes = express.Router()
const SALT_ROUNDS = 6
//# retrive all
//http://localhost:3000/users
userRoutes.route("/users").get(async(request,response) => {
    let db = database.getDb()
    let data = await db.collection("users").find({}).toArray()
    if (data.length >0){
       response.json(data)
    } else {
        throw new Error("Data was not found:(")
    }
})
//retrive
userRoutes.route("/users/:id").get(async(request,response) => {
    let db = database.getDb()
    let data = await db.collection("users").findOne({_id: new ObjectId(request.params.id)})
    if (Object.keys(data).length >0){
       response.json(data)
    } else {
        throw new Error("Data was not found:(")
    }
})
//createone
userRoutes.route("/users").post(async(request,response) => {
    let db = database.getDb()
    
    const takenEmail  = await db.collection("users").findOne({email: request.body.email})
     
    if(takenEmail){
        response.json({message:"the email is taken"})
    } else {
    const hash = await bcrypt.hash(request.body.password, SALT_ROUNDS)

    let mongoObject = {
        name:request.body.name,
        email:request.body.email,
        password:hash,
         imageUrl: request.body.imageUrl || null, 
        joinDate: new Date(),
        posts:[]
    }
    let data = await db.collection("users").insertOne(mongoObject)
       response.json(data)
    }

   
})
//update one
userRoutes.route("/users/:id").put(async(request,response) => {
    let db = database.getDb()
    let mongoObject = {
        $set: {
         name:request.body.name,
        email:request.body.email,
        password:request.body.password,
        joinDate:request.body.joinDate,
        posts:request.body.posts
        }
        
    }
    let data = await db.collection("users").updateOne({_id:new ObjectId(request.params.id)},mongoObject)
       response.json(data)
})
//delete row
userRoutes.route("/users/:id").delete(async(request,response) => {
    let db = database.getDb()
    let data = await db.collection("users").deleteOne({_id: new ObjectId(request.params.id)})
   response.json(data)
})

//login
userRoutes.route("/users/login").post(async(request,response) => {
    let db = database.getDb()
    
    const user  = await db.collection("users").findOne({email: request.body.email})
     
    if(user){
        let confirmation = await bcrypt.compare(request.body.password, user.password) 
        if(confirmation){
            const token = jwt.sign(user, process.env.SECRETKEY, {expiresIn: "1h"})
            response.json({success: true, token})
        }else{
            response.json({success: false, message: "Incorrect Password"})
        }
    }else{
        response.json({success: false, message: "User not found"})
    }

   
})

module.exports = userRoutes