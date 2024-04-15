const express = require("express");

const app = express();
app.use(express.json()); // this is middleware

app.get("/", (req, resp) =>{
    // resp.setHeader("Content-type", "text/html"); 
    resp.send("home page") // this is plain text we are sending
    // resp.send("<h1>Home Page</h1>");
});

app.get("/data", (req, resp)=>{
    resp.send("sending some data")
});

app.post("/adddata", (req, resp) => {
    console.log(req.body) // it will give undefined, we have to parse it
    resp.send("data added")
})


app.listen(4500, ()=>{
    console.log("Server is running at port 4500");
});