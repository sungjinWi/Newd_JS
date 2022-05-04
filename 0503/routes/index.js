const express = require("express");
const router = express.Router();
const boardRouter = require("./board")

router.get("/", (req,res)=> {
    res.render("index") //render는 views 기준
    // res.render("board/list") // views/board/list.html
})


router.use("/board",boardRouter)

module.exports = router