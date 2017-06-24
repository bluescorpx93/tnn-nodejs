const port = 3000;
const ip_address = 'localhost';
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	console.log('Request Made: '+req.url);
	res.writeHead(200, {'Content-Type': "text/html"});
	if (req.url === '/home' || req.url === '/'){
		fs.createReadStream(__dirname+"/index.html").pipe(res);
	} else if (req.url === '/contact'){
		fs.createReadStream(__dirname+"/contact.html").pipe(res);
	} else if (req.url ==='/api/cats'){
		var cats = [{name: "Meow", size: "small"}, {name: "Yeao", size: "medium"}, { name: "wow", size: "large"}]
		res.end(JSON.stringify(cats));
	} else {
		res.writeHead(400, {"Content-Type": "text/html"});
		fs.createReadStream(__dirname+"/404.html").pipe(res);
	}
});

server.listen(port, ip_address);
console.log('Server Started on '+ip_address+" "+port);

