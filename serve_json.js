const port = 3000;
const ip_address = 'localhost';
var http = require('http');

var server = http.createServer(function(req, res){
	console.log("Request made to: "+req.url);
	res.writeHead(200, {'Content-Type':'application/json'});
	var myObj = {
		name: "Vincent",
		age: 46
	};
	res.end(JSON.stringify(myObj));
});

server.listen(port, ip_address);
console.log('Server Started on '+ip_address+" "+port);

