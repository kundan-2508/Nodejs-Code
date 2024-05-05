const mongoose = require("mongoose");

// const main = () =>{
//     // let url = "mongodb://127.0.0.1:27017/"; // type mongo/mongosh in terminal to get this
//     let wrongUrl = "mongodb://127.0.0.1:20017/";
//     // const connection = mongoose.connect(url);
//     const connection = mongoose.connect(wrongUrl);
//     console.log("connected to mongo");
// };

// main(); // we need to call this method to connect to our database

// it is working fine, but how can we so sure it is actually connected
// try changing the port
// we will see error but after some time
// because it is asynchronous

// in order to fix this we will use async and await


const main = async () => {
    let url = "mongodb://127.0.0.1:27017/backend";
    try {
        const connection = await mongoose.connect(url);
        console.log("Connected to DB");
        // await studentModel.insertMany({name:"Kundan",age:27, city:"Banglore"}); // insertMany is not recommended
        // const student = new studentModel({
        //     name : "Sonu",
        //     age : 23,
        //     city : "Delhi"
        // });
        // await student.save(); // creation part is over here
        // console.log("Data inserted")

        // reading data from db
        // const students = await studentModel.find();
        // console.log(students);

        // we want to fetch those students whose age is based on some condition
        // const students = await studentModel.find({$and : [{age : {$gte : 20}}, {age : {$lte : 25}}]});
        // console.log(students);

        // delete from db
        // await studentModel.deleteMany({$and : [{age : {$gte : 20}}, {age : {$lte : 25}}]});
        // console.log("Deleted");

        // validation
        // const student = new studentModel({
        //     name : "Kunal",
        //     age : "tweenty two", // this should be of string type
        //     city : "Ranchi"
        // });
        // await student.save(); //it will throw error

        // const student = new studentModel({
        //     name : 40, // this is integer
        //     age : 23,
        //     city : "Delhi"
        // });
        // await student.save(); // it will work because of typecasting

        // const student = new studentModel({
        //     name : "Aman", 
        //     age : "29",
        //     city : "Delhi"
        // });
        // await student.save(); // this will work as "29" can be converted into 29

        // const student = new studentModel({
        //     name : "Aquib", 
        //     age : 23,
        //     city : "Delhi",
        //     location :"Malviya Nagar"
        // });
        // await student.save(); // this will get added but location will not be saved

        const student = new studentModel({
            name: "Rahul"
        });
        await student.save(); // this will suceed but after added required it will fail

        connection.disconnect();
        console.log("Disconnected");
    } catch (error) {
        console.log(error)
    }
}

main();

// lets talk about structure
// we want to create a phone cover using 3d printer
// for that we need a model
// once we created a model, we can create as many cover we want
// similarly we will create schema and then model

// creating schema in mongo
// const studentSchema = mongoose.Schema({
//     name: String,
//     age: Number,
//     city: String
// },{
//     versionKey : false // using this we can remove version from mongo collection
// });

const studentSchema = mongoose.Schema({
    name: { typ: String, required: true },
    age: { typ: Number, required: true },
    city: { typ: String, required: true }
}, {
    versionKey: false // using this we can remove version from mongo collection
});

const studentModel = mongoose.model("student", studentSchema)