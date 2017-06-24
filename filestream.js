var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '.readme.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '.writemefilestream.txt');

//write just while reading
myReadStream.on('data', function(chunk){
	myWriteStream.write(chunk);
	//console.log('New Chunk: '+chunk);
});

//acheive all this via pipe
myReadStream.pipe(myWriteStream);

module.exports.outputIntoPage = function(outStream){
	var myNewReadStream = fs.createReadStream(__dirname + './index.html', 'utf8');
	myNewReadStream.pipe(outStream);
};