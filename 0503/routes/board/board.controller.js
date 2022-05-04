const items = [];

const list = (req,res)=> {
    res.render("board/list")
}

const view = (req,res)=> {
    console.log(req.query.index)

    const {index} = req.query
    console.log(index)
    res.render("board/view",{
        item:items[index-1]
    })
}
const write = (req,res)=> {
    res.render("board/write")
}
const update = (req,res)=> {
    res.render("board/update")
}

const writeAction = (req,res) => {
    console.log(req.body.subject, req.body.subject)
    // db 저장하고
    // const obj = { subject: req.body.subject, content : req.body.subject}

    const {subject, content} = req.body
    const obj = {subject, content}
    items.push(obj) // [] => [{subject:"ss", content:"ccc"}]
    items.length //1
    res.redirect(`/board/view?index=${items.length}`)
    // res.redirect("/board/view")
}

module.exports = {
    list, 
    view,
    write, 
    update,
    writeAction

}