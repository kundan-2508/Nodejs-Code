// import {sum} from "./data.js"
// const sum = require("./data") // common js method
// const diff = require("./data")
// const [sum, diff] = require("./data") // this will replace above 2 lines
// what is the disadvantages of using these
// order must be in the order as they were exported
// this is not the correct way of doing it
// we can overcome by object referencing
const {sum, diff} = require("./data") // here only key name should match


// console.log("hellow")
// console.log(sum(2,5));
// console.log(diff(2,1));

// we can't use direct export and import

// main features of node js
// 1. dynamically typed
// let x = 10;
// 2. Single threaded
// if node js is a single threaded, it mean it will execute line by line
// then how it supports asynchronous programming
// console.log('A');
// console.log('B');
// console.log('C');
// the above 3 lines will execute 1 by 1, it means single threaded
console.log('A');
setTimeout(()=>{
    console.log('B');
}, 1000);
console.log('C')

// this is called concurrent, setTimeout is parallely working with console.log('C')
// how javascript is supporting asynchronous despite of being single threaded 
// ans is Javascript is concurrent

// basic of node js
// how many modules are in node
// basically 3 types
// 1. Inbuilt node modules => all things inside node_modules folder
// 2. user defined modules => local modules created by us
// 3. external modules 