const express = require("express");
const cors = require("cors")
const {studentRouter} = require("./studentRouter")

const app = express();

// middleware
// app.use((req, resp, next)=>{
//     console.log("Hello from middleware");
//     next(); // it will take you to the next thing has to be executed
//     console.log("bye from middleware")
// })
app.use("/students", studentRouter);

// app.use((req, resp, next)=>{
//     if(req.url == "/about"){
//         next();
//     }
//     else{
//         resp.send("Not Permitted");
//     }
// })



app.get("/", (req, resp)=>{
    console.log("Home page") // this will be printed after middleware
    resp.send("Home Page")
})

app.get("/about", (req, resp)=>{
    resp.send("About Page")
})

app.get("/contact", (req, resp)=>{
    resp.send("Contact Page")
})

app.get("/data", (req, resp)=>{
    resp.send("Data Page")
})


// Learning CORS(cross origin resource sharing)
// try to call an api from different origin
// app.use(cors()) this will go at the top


app.listen(6700, ()=>{
    console.log("server is up and running at port 6700")
})

// If you want your middleware to run for all the routes, put it in the top
// if you want your middleware to work for specific route, put it above those route only
// next is a function, which will execute the next thing line