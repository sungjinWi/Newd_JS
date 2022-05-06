const pool = require("../../db")

const list = async (req,res)=> {
    try {
        const sql = `SELECT * FROM board`
        const [result] = await pool.query(sql); 
        console.log(result);

        res.render("board/list",{
            items:result
        })
    }
    catch (e) {
        throw e;
    }
}
const view = async (req,res)=> {
    const idx = req.query.idx;
    try {
        const sql = `SELECT * FROM board where idx='${idx}'`
        const [[result]] = await pool.query(sql);  //pool.query(sql)은 [[원하는 result],[column definition]] 구조
        console.log(result);

        res.render("board/view",{
            item:result,
            idx : idx
        })
    }
    catch (e) {
        throw e;
    }
}
const write = (req,res)=> {
    res.render("board/write")
}
const update = (req,res)=> {
    res.render("board/update")
}

const writeAction = (req,res)=>{
    res.redirect();
}
const updateAction = (req,res)=>{
    res.redirect();
}
const deleteAction = (req,res)=>{
    res.redirect();
}

module.exports = {
    list,
    view,
    write,
    update,
    writeAction,
    updateAction,
    deleteAction
}