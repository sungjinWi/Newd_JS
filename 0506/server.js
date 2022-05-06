const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

const nunjucks = require("nunjucks");
const router = require("./routes");

app.use(router);

app.set("view engine", "html");
nunjucks.configure("views",{
    express:app
});

app.listen(3000,()=>console.log("서버 시작"))