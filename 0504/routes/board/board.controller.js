const items = [];

const list = (req,res) => {
    
    res.render("board/list")
}
const write = (req,res) => {
    res.render("board/write")
}
const update = (req,res) => {
    let name = req.query.name
    res.render("board/update",{name:name})
}
const view = (req,res) => {
    let name =req.query.name
    // res.render("board/view",{
    //     item:items[index-1]
    // })
    
    res.render("board/view",{name:name})
}

const writeAction = (req,res) => {
    const {subject, content} = req.body;
    const obj = {subject, content};
    items.push(obj);
    res.redirect(`/board/view?index=${items.length}`)
}
const updateAction = (req,res) => {
    // sungjin을 불러오는 방법
    // input hidden name="name" value="{{name}}"
    console.log(req.body.name)
    res.redirect("/board/view?")
}
const deleteAction = (req,res) => {
    res.redirect("/board/view?index=")
}

module.exports = {
    list,
    write,
    update,
    view,
    writeAction,
    updateAction,
    deleteAction
}