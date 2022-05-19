const express = require("express");
const app = express();
const cors = require("cors")

app.use(cors());

// const auth2 = (str,req,res,next) => {
//     console.log(req.headers)
//     next()
// }
const auth2 = (str,req,res,next) => {
    console.log(req.headers)
    const data = req.headers.authorization.split("Basic")[1].trim()
    console.log(Buffer.from(data,"base64").toString("utf8"))
    next()
}

app.use((req,res,next)=>{
    auth2("hello world!!",req,res,next)
})

// app.use(auth2("hello world!!",req,res,next)) //이건 안됨

const auth = (req,res)=>{
    res.send("hello world!!")
}

app.get("/", auth)

app.use((req,res,next)=>{
    next()
})



app.listen(3000,()=>console.log("서버 3000 시작"))

/*

host

protocol + auth + hostname + port
http://id:password@localhost:3000

http request message
Authorization < header 내용 추가

req.headers.authorization 
type + data 로 나온다
url 검색해서 가는게 아니라 


*/

/*

게시판 회원만 가능한 게시판을 구현하고 싶습니다
                                 OAuth2.0 -> authorization / JWT /CORS
client front-server back-server  auth
cookie-> 화면
      <- 화면
data request -----------------> cookie 살펴본다
            <---------


todo auth server를 따로 만드는 이유는 서버가 여러개여도 관리할 수 있다??????

*/