const pool = require("../../db")

const list = async (req,res)=> {
    try {
        const sql = `SELECT * FROM board`
        const result = await pool.query(sql); 
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
            item:result
        })
    }
    catch (e) {
        throw e;
    }
}
const write = (req,res)=> {
    res.render("board/write")
}
const update = async (req,res)=> {
    const idx = req.query.idx;
    try {
        const sql = `SELECT * FROM board where idx='${idx}'`
        const [[result]] = await pool.query(sql);  
        console.log(result);

        res.render("board/update",{
            item:result
        })
    }
    catch (e) {
        throw e;
    }
}

const writeAction = async (req,res)=>{
    try {
        // const subject = req.body.subject;
        // const content = req.body.content;
        // const name = req.body.name;
        const {subject, content, name} = req.body;

        const sql = `INSERT INTO board(subject,content,name) VALUES(?,?,?);`
        const [result] = await pool.query(sql,[subject, content, name]); 
        console.log(result);

    }
    catch (e) {
        throw e;
    }
    res.redirect("/");
}
const updateAction = async (req,res)=>{
    try {
        const subject = req.body.subject;
        const content = req.body.content;
        const name = req.body.name;
        const idx = req.body.idx;

        const sql = `update board SET subject=?, content=? WHERE idx=?;`
        const [result] = await pool.query(sql,[subject, content, idx]); 
        console.log(result);

    }
    catch (e) {
        throw e;
    }
    res.redirect("/");
}
const deleteAction = async (req,res)=>{
    try {
        const idx = req.query.idx;

        const sql = `DELETE FROM board WHERE idx = ${idx}`
        const [result] = await pool.query(sql); 
        console.log(result);
        res.redirect("/board/list");
    }
    catch (e) {
        throw e;
    }
    
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