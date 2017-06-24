var express = require('express');
var path = require('path');
var todoController = require('./controllers/todoController');
var app = express();

//set up templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//setup static files
app.use('/assets', express.static('./assets'));

// fire off controllers
todoController(app);

//listen to port
const port = 3000;
app.listen(port, ()=>{
	console.log("Listening on Port "+port);
})