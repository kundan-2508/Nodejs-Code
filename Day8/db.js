const mongoose = require("mongoose");

const connectToDB = async ()=>{
    const url = "mongodb://127.0.0.1:27017/backend";
    try{
        const connect = await mongoose.connect(url);
        console.log("Connect to DB");
    }
    catch(error){
        console.log("Error connecting database");
    }
};


// basic structure of the schema
const userSchema = mongoose.Schema({
    name : { type : String, required : true},
    age: { type :Number,required : true},
    city: { type : String,required : true},
    language : { type: String, required : true}
},{
    versionKey : false
});

// model for the data
const userModel = mongoose.model("user" , userSchema);

module.exports = {
    connectToDB,
    userModel
}