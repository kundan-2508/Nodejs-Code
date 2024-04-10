// what is server
// a person which serves something
// your machine(phone, laptop. tablet) is requesting from the server
// there should be some logic inside the server to process the request
// it means we have to program my server(then only logic we can add)
// how can we program our server => using http
// http - hyper text transfer protocol
// protocol - set of rules
// https => here s is for secure, rest all is same

// read about 3 way hand shake : https://www.geeksforgeeks.org/tcp-3-way-handshake-process/
// http verbs/methods
// GET - Read something from server
// POST - Adding something to the server
// PUT/PATCH - Update something into the server
// DELETE - Delete something from server

const http = require("http");
// console.log(http);
const server = http.createServer((request, response)=>{
    if(request.url == "/"){
        response.end("This is the home page");
    }else if(request.url == "/data"){
        response.end("Some data will be sent.");
    }else{
        response.end("Invalid endpoint")
    }
});
server.listen(7300, ()=>{
    console.log("Server is running at port 7300")
});

// we can use nodemon in order to avoid starting server on every change
// first we need to install it using npm
// we have to add it inside script in package.json