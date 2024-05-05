const express = require("express");
const db = require("./db")

const app = express();
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Working");
});

app.post("/register", async (req, res) =>{
    const { name, age, city, language } = req.body;
    const user = new db.userModel({
        name : name,
        age: age,
        city : city,
        language : language
    });
    
    try{
        await user.save();
        res.send(user);
    }catch(error){
        console.log(error);
    }
});

app.get("/users", async (req, res)=>{
    try{
        const users = await db.userModel.find();
        res.send(users);
    }catch(error){
        console.log(error);
    }
});

app.patch("/update/:id", async(req, res) =>{
    const id = req.params.id;
    const payload = req.body;
    try{
        await db.userModel.findByIdAndUpdate({_id : id}, payload);
        res.send("user has been updated");
    }catch(error){
        console.log(error);
    }
});

app.listen(3000, (req, res)=>{
    console.log("App is running on port 3000");
    db.connectToDB();
})