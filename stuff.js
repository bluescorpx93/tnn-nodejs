var counter = function(arr){
return 'There are ' + arr.length + "elements";
};

console.log(counter(['hello', 'world', 'everyone']));

var adder = function(a,b){
	return `The sum is ${a+b}`
};

var pi = 3.142;

module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;

module.exports.counter = function(arr){
	return 'There are ' + arr.length + "elements";
};
module.exports.adder= function(a,b){
	return `The sum is ${a+b}`
};
module.exports.pi = 3.142;

module.exports = {
	counter: counter,
	adder: adder,
	pi: pi
}