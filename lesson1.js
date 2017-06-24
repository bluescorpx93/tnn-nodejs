var count =0;
var timer = setInterval(function(){
	console.log(count);
	count+=2;
	if (count>=10){
		clearInterval(timer);
	}
}, 2000);
setTimeout(function(){
	console.log("After 2 seconds");
}, 2000);

console.log("Hey");
console.log(__dirname);
console.log(__filename);

var sayHi = function(){
	console.log("Hi");
}
function callFunction(func){
	func();
}
callFunction(sayHi);