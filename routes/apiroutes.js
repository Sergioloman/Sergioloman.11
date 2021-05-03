const note = require("../db/note")
const router = require("express").Router()

// get route to retrieve all routes from database 
router.get("/notes",(req,res) => {
    // we can create a new object and use it here.
    note.getNotes().then(notes => {
        return res.json(notes)
    })
    .catch(err => {res.status(500).json(err)})
})


// receive a new note to save on body add to json and return to client
router.post("/notes",(req,res) =>  {
    note.addNotes(req.body)
        .then((note)=>res.json(note))
        .catch((err)=>res.status(500).json(err))
    
})

// route do delete a note from database
router.delete("/notes/:id",(req,res) => {
    note.removeNotes(req.params.id)
        .then(()=>res.json({ok:true}))
        .catch((err)=>res.status(500).json(err));

})

module.exports = router