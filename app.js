const port = 3000;
const ip_address = 'localhost';
var http = require('http');
var fileStream = require('./filestream');

var server = http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type':'text/html'});
	fileStream.outputIntoPage(res);
});

server.listen(port, ip_address);
console.log('Server Started on '+ip_address+" "+port);

