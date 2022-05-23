const express = require("express")
const router = express.Router();

router.use("/",(req,res)=>{
    res.cookie("name","sungjin")
    res.render("index.html")
})

module.exports = router