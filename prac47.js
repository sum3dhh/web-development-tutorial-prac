const fs = require("fs");
let text = fs.readFileSync("deadly.txt","utf-8");
text = text.replace("This" , "your mom");

console.log("The content of file is....");
console.log(text);

console.log("Creating a Fooking new file....");
fs.writeFileSync("sumedh.txt" , text);

