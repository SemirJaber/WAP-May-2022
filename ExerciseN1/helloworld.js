console.log("Server is intiallizing ...");

const http=require("http");
//const { type } = require("os");

http.createServer(function(req,res){
      res.writeHead(200,{
         "content-type":"text/html"
      });
      res.end("Hello World");
}).listen(8000);