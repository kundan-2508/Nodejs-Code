const express =  require("express");

const app = express();

app.use(express.json());

app.get("/", (req, resp) =>{
    resp.send("Working")
})

app.get("/wheather", (req, resp) =>{
    // console.log(req.query)
    // console.log(req.query.city)
    const { city } = req.query
    resp.send("Wheather is fine in " + city)
})

app.get("/students/:id", (req, resp)=>{
    const id = req.params.id;
    resp.send("Id of students is " + id)
})

app.listen(4500, (req, resp)=>{
    console.log("Server is running at port 4500")
})

// what is database
// we can store data in many format like file, etc.
// then why database ?
// sql & nosql
// SQL - structured query language
// NoSQL - not a structured query language
// which one is more flexible ? - nosql
// example in sql
// some of the examples of SQL are mySQL, postgres, MSSql, Oracle
// some of the example of NoSql are mongoDb, Cassandra
// NoSQL is more flexible

// MongoDb mainly have 3 components
// 1. Database - group of different collections
// 2. Collection - group of similar docuements
// 3. Document - each object is a document