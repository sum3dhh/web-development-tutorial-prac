const http = require("http");
const fs = require("fs");
const FileContent = fs.readFileSync("prac26.html");

const server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-type': 'html'});
    res.end(FileContent);

})

server.listen(80,'127.0.1.1' , () => {
    console.log("Listening on port 80");
});
