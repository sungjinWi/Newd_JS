const express = require("express");
const app = express();
const cors = require("cors")
const nunjucks = require("nunjucks")
const axios = require("axios")
const qs = require("qs") // {a:"asd",b:"aa"} => a=asd&b=aa

/*
REST API
a3bd6b8f408a67e8fdc11ed2425cf080
redirectURI
http://localhost:3000/auth/kakao
Secret key
UGNpkFq5rkoF9Z5t9tiDz7Nq7zbkJ57t
*/
const client_id = "a3bd6b8f408a67e8fdc11ed2425cf080"
const redirect_uri = "http://localhost:3000/auth/kakao"
const client_secret = "UGNpkFq5rkoF9Z5t9tiDz7Nq7zbkJ57t"
const host = "https://kauth.kakao.com" //https로 해야함


app.set("view engine", "html");
nunjucks.configure("views",{
    express:app
})

app.use(cors());

app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/kakao/login",(req,res)=>{
    const redirect = `${host}/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`
    res.redirect(redirect) // 실제 kakao 주소
})

app.get("/auth/kakao", async (req,res)=>{
    const {query:{code}} =req


    // post 
    // 1. url 2. body 3. headers

    const body = qs.stringify({
        grant_type:  "authorization_code" ,
        client_id,
        redirect_uri,
        code,
        client_secret
    })
    const headers = {
        // query string
        headers: { "Content-type":"application/x-www-form-urlencoded;charset=utf-8" }
        
    }
    const response = await axios.post(`${host}/oauth/token`,body,headers)
    // console.log(response.data)

    try {
        const {access_token} = response.data;
        const url = "https://kapi.kakao.com/v2/user/me";
        const userinfo = await axios.post(url, null, {
            headers:{
                "Authorization": `Bearer ${access_token}`,
                "Content-type": "application/x-www-form-urlencoded;charset=utf-8"
            }
        })
        console.log( userinfo.data)
    }
    catch(e) {

    }

    

    res.send("hello")
})

app.listen(3000,()=>console.log("서버 3000 시작"))