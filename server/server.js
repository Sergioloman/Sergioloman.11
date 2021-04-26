const express = require("express");
const app = express();
const util = require("util");

const PORT = process.env.PORT || 3001;
const path = require("path");
const fs = require("fs");

const readFileAsync = util.promisify(fs.readFile);


app.get("/",(req, res)=>{
    // res.send("send whatever raw data we may need, in this case. html")
    res.sendFile(path.join(__dirname,"notes.html"))    
})

app.get("/",(req, res)=>{
    res.sendFile(path.join(__dirname,"index.html"))    
})


app.listen(PORT,()=>{
    //here we are creating a new route
})