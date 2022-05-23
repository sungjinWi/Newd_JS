const express = require("express")
const app = express();
const nunjucks = require("nunjucks")
const router = require("./routes")

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.set("view engine", "html")

nunjucks.configure("views",{
    express:app,
})

app.use(router)

console.log(app.listen(3000,()=>console.log("서버시작")))

// require("./socket.js")( //래핑해준것(웹소켓이 먼저 시작되고 express 시작됨)
//     app.listen(3000,()=>
//     console.log("listening to server localhost:3000"))
//     )

