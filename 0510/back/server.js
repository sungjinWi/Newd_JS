const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}));

app.use(cookieParser());

app.get("/:idx",(req,res)=> {
    console.log(req.params)
    console.log(req.cookies)
    res.send("hello world!!");
})

app.post("/",(req,res)=>{
    res.cookie("name","why").send("hey")
})

app.post("/getCookie",(req,res)=>{
    console.log("post request came")
    // res.setHeader("set-Cookie","name=sungjin").send("cookie complete")
    res.send("cookie")
})

app.listen(3500,()=>console.log("3500 server start"))