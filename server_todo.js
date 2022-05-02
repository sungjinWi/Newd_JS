const express = require("express");
const { nextTick } = require("process");
// 한줄 한줄 설명 할 수 있는가
const app = express(); // express method를 실행시킨 결과 = 객체
const router = require("./routes"); //index.js는 생략가능

app.use(router);

// app.get("/", (req, res) => {
//     res.send("hello world");
// });

app.listen(3000, ()=> {
    console.log("서버시작");
});

// app.get("/",                             (req,res,next)=> {}     미들웨어는 이 콜백함수                   )

// 미들웨어가 언제 실행되는지

// 콜백함수를 왜 쓸까?
    // 비동기는 event loop를 알아야한다

// => 내가 원하는 시점에 함수를 실행하고 싶어서

// express app 객체 안에 있는 method중에 get, post, use, ...

// GET, POST ... : request method -> http

// 서버 역할은 시키는 일 하기, client가 요청하면 server는 request에 따라 response를 준다

// app.get("/",a)

// 문을 열고 들어올 손님을 기다린다, 요청하는 사람이 GET인 사람중에 /로 오는 사람

// URL 패턴 protocol / auth / hostname /path



// app.use()는 무엇일까 get이든 post든 path만 맞으면 callback 실행하겠다


// path를 생략하면 모든 곳에서 그렇게 하겠다

express.urlencoded({extended:true}) // 함수를 실행시키면 result가 미들웨어 (req,res,next) => {}
app.use(express.urlencoded({extended:true}))  //req.body 만들어줌
// name=sungjin&age=20
// => {name:"sungjin", age : 20}


// app.use((req,res)=>{
//     res.send("hello world")
// })

// app.get("/",()=>{(req,res)
//     res.send("위에놈이 먼저")
// })

//해당 url에 해당되는 경우 가장 위에 것으로 된다




// next 미들웨어 3번째 인자값은 뭐여

app.use("/",(req,res,next)=>{
    // res.send("hello world")
    console.log("hello next")
    next()
})

app.get("/",(req,res)=>{
    res.send("next는 위에놈이 먼저 실행되고 밑으로 온다")
})


