
var http = require('http');
var dt = require('./MyModule1');
http.createServer(function (req, res) {
res.writeHead(200,
{'Content-Type': 'text/html'})
console.log("server is intializing ..");
res.write("The date and time are currently: " + dt.myDate());
res.end();
}).listen(8001); 