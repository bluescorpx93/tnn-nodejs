var fs = require('fs');

//read, write file, asynchronous
fs.readFile('readme.txt', 'utf8', function(err, data){
	console.log("Asynchronous Reading: "+data);
});
fs.writeFile('writeMeAsync.txt', readMeFile);

fs.mkdir('stuff', function(){
	fs.readFile('readme.txt', 'utf8', function(err, data){
		fs.writeFile(__dirname+'../stuff/writeMe.txt', data);
	});
})

fs.unlink('./stuff/writeMe.txt', function(){
	fs.rmdir('stuff');
})

console.log("Block placed after asynchronous function");