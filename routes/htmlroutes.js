const path = require("path")
const router = require("express").Router()
//notes.html file link
router.get("/notes",(req, res)=>{
    res.sendFile(path.join(__dirname,"../public/notes.html"))    
})
//index.html file link
router.get("*",(req, res)=>{
    res.sendFile(path.join(__dirname,"../public/index.html"))    
})

module.exports = router