// 먼저 route 폴더를 만든다

const express = require("express");
const router = express.Router(); // 반환값은 객체다


router.get("/",(req,res)=> {
    res.render("index")
})

router.get("/",(req,res)=> {
    res.send("hello /")
})

router.get("/",(req,res)=> {
    res.send("hello /")
})

router.get("/",(req,res)=> {
    res.send("hello /")
})

/*
    res.send() string이 간다


    res.json({key: "value"})  === res.send('{key:"value"}')
    보낼때는 무조건 string 타입이기 때문에 객체를 string으로 바꾼것이 json


    res.render() 파일 안에 있는 모든 텍스트를 가져온다
    왜냐하면 내용을 보내거나 , 응답을 해줄 때는 무조건 스트링 이기 때문에
    근데 가져온 모든 텍스트를 res.send하는 걸까?
    res.render("index",{name:"value"}) : 변수도 같이 지정해줄 수 있다

    단순히 res.send가 아니라 template engine을 거쳐 해석한 후 string으로 바꿔서 send

    텍스트 중 nunjucks 문법을 체크한 다음에 nunjucks 관련 모든 코드를 처리하고 string으로 변환한다
    res.send로 response body 영역에 완성본을 보낸다

    브라우저의 역할은 request message를 만들어준다
    브라우저는 기본적으로 string을 받는다
    <h1>asdsada<h1/> 받으면 html해석하는데 send는 브라우저가 해석하는것


    express는 브라우저가 message를 보내면 객체로 만든다 req 객체
    res는 웹서버에서 브라우저한테 던져주는 내용이 express에서 만들어지는것

    res.send

*/

module.exports = router;

console.log(router)