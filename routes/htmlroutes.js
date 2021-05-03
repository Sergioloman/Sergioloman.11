const path = require("path")
const router = require("express").Router()

//we need to separate our routes 1st! check on apiroutes.js and 
router.get("/notes",(req, res)=>{
    // res.send("send whatever raw data we may need, in this case. html")
    res.sendFile(path.join(__dirname,"../public/notes.html"))    
})

router.get("*",(req, res)=>{
    res.sendFile(path.join(__dirname,"../public/index.html"))    
})

module.exports = router