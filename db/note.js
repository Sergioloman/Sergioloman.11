//here we are writing our notes
const { errorMonitor } = require("events");
const fs = require("fs");
const { title } = require("process");
const util = require("util")
const { v4: uuidv4 } = require('uuid');


//create an asynchronous file read so we dont need to create callback functions
const readFileAsynch = util.promisify(fs.readFile)

const writeFileAsynch =  util.promisify(fs.writeFile)

// create a note class, we will use this methods in the rest of our application
class Note {
    //reading json
    read(){
        return readFileAsynch("db/db.json", "utf8")
    }
    //writing to file
    write(note){
        return writeFileAsynch("db/db.json", JSON.stringify(note))
    }
    //fetching all of the notes
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
            return parsenotes
        })
    }
    //adding new notes
     addNotes(note){

        const{title, text}=note;
        if (!title ||!text){
            throw new Error("Note 'title' and 'text' cannot be blank")
        }
        //use UUid to assign a new id to each note added.
        const newNote={title, text, id:uuidv4()};
        // return all notes added so far
        return this.getNotes()
            .then((notes)=>[...notes,newNote])
            .then((updatedNotes)=>this.write(updatedNotes))
            .then(()=>newNote)
    
        }
    
    //removing notes
    removeNotes(note){

        return this.getNotes()
    //filter the deleted note with the selected id. Filter it and return everything else.
        .then((notes)=> notes.filter((deletedNote)=> deletedNote.id !== note   ))
        //see all of the remaining notes again.
        .then((updatedNotes)=>this.write(updatedNotes))
    }
  
}

module.exports = new Note()