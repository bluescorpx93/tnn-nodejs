var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Connect to DB
mongoose.connect('mongodb://db_test_user:db_test_pass@ds143141.mlab.com:43141/todo_db_frommlab_cl');

//Create A Schema
var todoSchema = new mongoose.Schema({
	item: String
});

//Todo Model
var Todo = mongoose.model('Todo', todoSchema);

/*
var item1 = new Todo({item : "Write This"}).save(function(err){
	if (err) throw err;
	console.log("Item Created & Saved");
});
var item2 = new Todo({item: "Clean This"}).save(function(err){
	if (err) throw err;
	console.log("Item Created & Saved");
});
*/


// var data_static = [
// 	{ item: "write paragraph"} ,
// 	{ item: "go to hell hole"},
// 	{ item: "sleep less"}
// ]

var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

	const todo_route = '/todo'
	app.get(todo_route, function(req, res){
		console.log("Route GET "+todo_route);
		//get data from mongodb mlab
		Todo.find({}, function(err, data){
			if (err) throw err;
			res.render('todo', {data: data});
			//res.render('todo', {data: data_static})
		});
		
		
	});

	app.post('/todo', urlencodedParser, function(req, res){
		console.log("Route POST "+todo_route);
		
		//attain data from form and save to db
		var newTodo = new Todo(req.body).save(function(err, data){
			if (err) throw err;
			res.json(data);
		});
		
		// data_static.push(req.body);
		// res.json(data_static);
	});

	app.delete('/todo/:item', function(req, res){
		console.log("Route DELETE "+todo_route + " " +req.params.item);
		
		//delete item from db
		
		Todo.find({item: req.params.item.replace(/\-/g," ")}).remove(function(err, data){
			if (err) throw err;
			res.json(data);
		});
		

		//Delete from local ARRAY (my method)
		//data_static.splice(req.params.id, 1);
		//res.json(data_static);

		// data_static = data_static.filter(function(todo){
		// 	return todo.item.replace(/ /g, '-') !== req.params.item;
		// });
		// res.json(data_static);
		
	});

};