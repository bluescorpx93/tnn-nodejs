var express = require('express');
var bodyParser = require('body-parser');
var app = express();

const port = 3000;
const path = require('path');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

//app.set('view engine', 'ejs');

//For Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use('/assets', express.static('assets'));

const home_route = '/';
app.get(home_route, function(req, res){
	// res.send('HomePage');
	//res.sendFile(__dirname+"/public/index.html");
	//res.render('index.html.ejs');
	
	res.render("index");
	console.log("Route: "+home_route);
});

const contact_route='/contact';
app.get(contact_route, function(req, res){
	//res.sendFile(__dirname+"public/contact.html");
	console.log(req.query);
	// res.render('contact.html.ejs', {query_string: req.query});
	res.render("contact", {query_string: req.query});
});
app.post(contact_route, urlencodedParser, function(req, res){
	console.log(req.body);
	res.render('contact-success', {data: req.body});
});

const profile_route = '/profile/:id';
app.get(profile_route, function(req, res){
	console.log("Route: "+profile_route);
	var person = {
		name: "Jon",
		age: 145,
		id: req.params.id,
		hobbies: ['eating', 'fishing', 'reading']
	}
	//res.send("Requested Profile of ID: " + req.params.id);
	res.render('profile', {person: person});
});



app.listen(port, ()=>{
	console.log("Listening on Port "+port);
});