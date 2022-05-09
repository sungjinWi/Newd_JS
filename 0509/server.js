const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use((req,res,next)=>{ // 이렇게 넣으면 어디서든 req 쓸 수 있음
    const {cookie} = req.headers;

    // name = sungjin; name2=sungjin
    /* 
    {
        name: sungjin,
        name2: sungjin
    }
    */

    const newArr2 = cookie.split(";").map(v=>v.trim().split("="))
    // arrow함수는 return 생략 가능

    //[[name,sungjin],[name2,sungjin]]
    //reduce는 배열상태 애들을 객체로 변환할 때만 reduce(데이터 타입이 변할 때만)
    const cookies = newArr2.reduce((acc,val)=> {
        acc[val[0]]=val[1];
        //{}["name"]="sungjin" -> {}.name="sungjin"
        //{name:"sungjin"}["name2"]="sungjin" -> {name:"sungjin"}.name2 = "sungjin"
        return acc;
    },{})

    req.cookie = cookies;


    next(); // next 있으면 다음 미들웨어를 찾는다
})

app.get('/', (req,res)=>{
    console.log(req.cookie)
    // console.log(req.headers.cookie.split("=")[1])
    res.send("hello world")
})

app.get('/cookie', (req,res)=>{
    res.send("hello cookie")
})

app.get("/setCookie",(req,res)=>{
    // req.body userid, userpw
    // select * from user where userid = userid, pwd=userpw
    // 1개라도 있으면 로그인

    // res.setHeader("Set-cookie","name=sungjin"); // 브라우저가 처리해서 cookie {key : value} 로 저장한다 // 다른 곳에 요청해도 계속 자동으로 넘겨준다
    // res.send("hello setCookie");

    /* 

    http 통신 프로토콜에서 Set-cookie에 대한 문법이 존재
    httpOnly=true httpOnly 가능

    Expires

    path : 특정 path에서만 쿠키사용

    내가 요청해서 들어온 쿠키를 사용하는것을 해볼 것이다
     */
    res.setHeader("Set-cookie","name=sungjin; httpOnly=true;" ).send("hello setCookie");
})

app.listen(3000,console.log("3000 서버 시작"))