const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Animation</title>
  </head>
  <style>
      .container{
          background-color: aqua;
  
      }
      .box{
          height: 150px;
          width: 150px;
          border: 2px solid gold;
          background-color: tomato;
          position: relative;
           /* animation: animation-name animation-duration animation-timing-function animation-delay animation-iteration-count animation-fill-mode; */
          animation: sumedh 2s ease-in-out 2s 3   ;
          /* animation: sumedh1 1s ease-in 1s 2   ; */
      }
      @keyframes sumedh {
          0%{
              top: 0px;
              left: 0px;
          }
          25%{
              top: 250px;
              left: 0px;
          }
          50%{
              top: 250px;
              left: 250px;
          }
          75%{
              top: 0px;
              left: 250px;
          }
          100%{
              top: 0px;
              left: 0px;
          }
      }
      @keyframes sumedh1 {
          from{
              width: 100px;
          }
          to{
              width: 700px;
          }
          
      }
  </style>
  <body>
      <div class="container">
          <div class="box"></div>
      </div>
      
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});