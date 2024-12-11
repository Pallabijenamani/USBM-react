// import modules
//https ( s for extra security)

const http= require("http");
const fs= require("fs");
const os= require("os");
const path= require("path");
const {rawListener} = require("process");
//require ("dotenv").config();


//create server
const server= http.createServer((req,res)=>{
    if (req.url = "/"){
        res.writeHead(200);
        res.end("Home page");

    } else if(req.url === "/contact"){
        res.writeHead(200);
        res.end("contact page");

    } else if (req.url === "/service"){
        res.writeHead(200);
        res.end("service page");
    }
    else if (req.url === "/sign up"){
            res.writeHead(200);
            res.end("signup page");
    } else{
        res.writeHead(404);
        res.end("page not found");
    }
});

//server listening
const port =process.env.PORT || 8000;
server.listen(port,()=>{
    console.log(`server is runnig on ${port}`);  
});