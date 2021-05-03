//here we are writing our notes
const { errorMonitor } = require("events");
const fs = require("fs");
const { title } = require("process");
const util = require("util")
const { v4: uuidv4 } = require('uuid');


//create an asynchronous file read so we dont need to create callback functions
const readFileAsynch = util.promisify(fs.readFile)

const writeFileAsynch =  util.promisify(fs.writeFile)

// create a note class
class Note {
    read(){
        // we are passing db/db.json since this will be running from server.js rather than note.js
        return readFileAsynch("db/db.json", "utf8")
    }

    write(note){
        return writeFileAsynch("db/db.json", JSON.stringify(note))
    }

    getNotes(){
        return this.read().then((notes) =>{
            //we need to create a temporarty variable
            let parsenotes;
            // if notes are not in array, then create array
            try {
                //change json to array format
                parsenotes = [].concat(JSON.parse(notes))
            } catch (error) {
                parsenotes=[]
            }
            //this returns all notes available inside array.
            return parsenotes
        })
    }
    
     addNotes(note){

        const{title, text}=note;

        if (!title ||!text){
            throw new Error("Note 'title' and 'text' cannot be blank")
        }
        //get new note to get id from uuid

        const newNote={title, text, id:uuidv4()};

        return this.getNotes()
            .then((notes)=>[...notes,newNote])
            .then((updatedNotes)=>this.write(updatedNotes))
            .then(()=>newNote)
    
        }
    
    // //create remove note and pass id do it inside note class
    removeNotes(note){

        // console.log(note)
        return this.getNotes()
    
        .then((notes)=> notes.filter((deletedNote)=> deletedNote.id !== note   ))
        .then((updatedNotes)=>this.write(updatedNotes))

    }
  
}

module.exports = new Note()