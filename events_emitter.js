var events = require('events');
var util = require('util');

var myEmitter = new events.EventEmitter();
myEmitter.on('someEvent', function(msg){
	console.log(msg);
});
myEmitter.emit('someEvent', 'the event was emitted');

var Person = function(name){
	this.name = name;
}
util.inherits(Person, events.EventEmitter);

var james = new Person("James");
var mary = new Person("Mary");
var ron = new Person("Ron");
var people = [ james, mary, ron];

people.forEach(function(person){
	person.on('speak', function(msg){
		console.log(person.name + " said: " + msg);
	});
});

james.emit('speak', "Hey guys");
ron.emit('speak', "I want apples");



