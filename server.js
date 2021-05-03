const express = require("express");

const apiRoutes = require("./routes/apiroutes")
const htmlRoutes = require("./routes/htmlroutes")

const app = express();

const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// we are setting this public folder as an static route this way when we load the html they know how to pull from.
app.use(express.static("public"))
//using our routes
app.use("/api",apiRoutes)
app.use("/",htmlRoutes)

app.listen(PORT,()=>{
    //here we are creating a new route
    console.log(`
    app running on http://localhost:${PORT}
    `)
})