// Synchronous or blocking
// - line by line execution

// Asynchronous or non-blocking
// - line by line execution not guaranteed
// - callbacks will fire

const fs = require("fs");
fs.readFileSync("deadly.txt" ,"utf-8",(data)=>{
    console.log(data);
});
console.log("This is Your message");