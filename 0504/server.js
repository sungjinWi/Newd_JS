const express = require("express");
const app = express();
const router = require("./routes");
const nunjucks = require("nunjucks")


app.set("view engine", "html");
nunjucks.configure("views",{
    express:app,
})

app.use(express.json());
app.use(express.urlencoded({extended:true, })) //post 했을 때 req.body를 만들어준다


app.use(router);


app.listen(3000,()=>console.log("서버 시작"));