const express = require("express");
const router = express.Router()

router.get("/list", (req,res)=> {
    res.render("board/list")
})


module.exports = router;