const express = require("express");
const studentRouter = express.Router();

studentRouter.get("/", (req, resp)=>{
    resp.send("Home Page for students")
})

studentRouter.get("/about", (req, resp)=>{
    resp.send("About Page for students")
})

module.exports = {
    studentRouter
}