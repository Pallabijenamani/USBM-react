// import modules
const express = require("express");
const connection = require("./config/db");
const userModel= require("./model/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();

//middleware
app.use (express.json());

app.get("/",(req,res)=> {
    res.status(200).send({msg:"it's working"});
});

const port= process.env.PORT || 8000;
app.listen(port,async ()=>{
    try {
      await connection;
        console.log("connected to DB");
        
    } catch (error) {
        console.log(`error db : ${error.message}`);
        
        
    }

})