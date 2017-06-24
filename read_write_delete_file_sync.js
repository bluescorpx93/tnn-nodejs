var fs = require('fs');

//read, write file, synchronous, path to file, character encoding
var readMeFile = fs.readFileSync('readme.txt', 'utf8');
fs.writeFileSync(__dirname+'./writeMe.txt', readMeFile);

//delete file
fs.unlink('writeMeAsync.txt');

//make directory, async
fs.mkdirSync('stuff');
fs.rmdirSync('stuff');

console.log(readMeFile);