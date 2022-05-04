const express = require("express");
const app = express();
const router = require("./routes")
const nunjucks = require("nunjucks")
const routers = express.Router();

app.set("view engine", "html")
nunjucks.configure("views",{
    express:app,
})

app.use(express.json()); // json 형식
app.use(express.urlencoded({ extended:true , })) // string형식으로 data를 받으면 request body로 만든다

app.use(router);

// http://localhost:3000/a/b
// 미들웨어를 찾다가 router를 만나서 또 들어가고 계속 중첩가능
app.use("/a", routers.get("/b",(req,res)=> {
    res.send("hello /a/b")
}))

app.get("/", (req,res)=> {
    res.send("hello world!!")
})

app.listen(3000,()=> {
    console.log("server listening to 3000")
})