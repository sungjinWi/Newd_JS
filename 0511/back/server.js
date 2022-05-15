const express = require("express");
const cors = require("cors")
const createToken = require("./utils/jwt.js")

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true,}))

app.use(cors({
    origin:["http://localhost:3000","http://127.0.0.1:3000"],
    credentials:true,
    optionsSuccessStatus:200,
}))

app.get("/",(req,res)=>{
    res.send("서버당~~")
})

app.post("/user/login",(req,res)=>{
    const {userid,userpw} = req.body;
    console.log(userid, userpw)
    const response = {
        response:null,
        error:null
    };
    if(userid === "admin" && userpw === "admin"){
        //쿠키 생성
            // payload 에 뭘 넣을까
            const token = createToken({userid})
            res.cookie("token",token,{sameSite:"none",secure:true})
            //response

            response.response = { userid } //{userid:"admin"}
    } else {
        //쿠키 생성 x
        //response
        response.error = "아이디와 패스워드가 일치하지 않습니다"
    }
    res.json(response)
})

app.post("/user/logout", (req,res)=>{
    res.send("로그아웃 테스트")
})

app.listen(3500,console.log("server at 3500"))