const webSocket = require("ws");

let sockets = [];
console.log(module.exports) //{  }
module.exports = (server) => {
    const wss = new webSocket.Server({server})
    console.log("websocket 시작")

    wss.on("connection", (ws,req)=>{
        // console.log(req.headers) //쿠키도 들어있다
        ws.id = req.headers["sec-websocket-key"]
        sockets.push(ws)
        // console.log(ws) // handshake 객체의 모든것

        const obj1 = {type:"message",payload:"hello sungjin"}
        const obj2 = {type:"add",payload:"1"}

        // ws.send("hello sungjin") //network -> message에 담긴다
        ws.send(JSON.stringify(obj1))
        ws.send(JSON.stringify(obj2))

        ws.on("close", ()=>{ //connection 안에서 하는거다
            console.log("사용자 나감")
            sockets = sockets.filter(v=> v.id !== ws.id)
            console.log(sockets.length)
        })
        console.log(sockets.length)

    })

    function broadcast(data){
        sockets.forEach(ws=>{
            ws.send(data)
        })
    }
}